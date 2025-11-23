import React from "react";
import CommentBox from "./CommentBox";

function BlogPost({ post }) {
  const handleImageError = (e) => {
    // Prevent infinite loop if the fallback also fails
    e.currentTarget.onerror = null;
    // swap in local fallback
    e.currentTarget.src = '/assets/fallback.svg';
    e.currentTarget.alt = 'Image not available';
  };

  return (
    <section id={`post${post.id}`} className="post">
      <h2>{post.title}</h2>
      <p className="date">Published on: {post.date}</p>
      <img src={post.image || '/assets/fallback.svg'} alt={post.title} onError={handleImageError} loading="lazy" />
      <p>{post.content}</p>

      <CommentBox />
    </section>
  );
}

export default BlogPost;
