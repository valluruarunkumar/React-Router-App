import React, { Component } from 'react';
import DisplayBlog from '../BlogItem';
import './index.css';
import { TailSpin } from 'react-loader-spinner';

class BlogList extends Component {
    state = { blogData: [], isLoading: true }

    componentDidMount() {
        this.getBlogsData();
    }

    getBlogsData = async () => {
        try {
            const response = await fetch('https://apis.ccbp.in/blogs');
            const data = await response.json();
            const updatedData = data.map(eachItem => ({
                id: eachItem.id,
                title: eachItem.title,
                imageUrl: eachItem.image_url,
                avatarUrl: eachItem.avatar_url,
                author: eachItem.author,
                topic: eachItem.topic
            }));
            this.setState({ blogData: updatedData, isLoading: false });
        } catch (error) {
            console.error(error);
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { blogData, isLoading } = this.state;

        return (
            <>
                <div className="discc">
                    {isLoading ? (
                        <div className="loader-container">
                            <TailSpin color="00BFFF" height={50} width={50} />
                        </div>
                    ) : (
                        blogData.map(eachItem => (
                            <DisplayBlog key={eachItem.id} details={eachItem} />
                        ))
                    )}
                </div>
            </>
        );
    }
}

export default BlogList;
