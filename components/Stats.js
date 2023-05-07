// components/Stats.js
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Stats = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts');
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    return (
        <div className="p-4 text-white">
            <h2 className="text-4xl font-semibold mb-8">Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {posts.map((post, index) => (
                    <Card
                        key={index}
                        icon="fas fa-file-alt"
                        title={post.title}
                        description={post.content || 'No content'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Stats;
