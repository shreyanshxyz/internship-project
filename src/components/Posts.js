import React from "react";
import "./Posts.css";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post">
          <img src={post.thumbnailUrl} alt={post.url} />
          <p key={post.id} className="list-group-item">
            {post.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
