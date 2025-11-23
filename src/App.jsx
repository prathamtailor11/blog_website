import React from "react";
import BlogPost from "./BlogPost";
import posts from "./data";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <header className="header">
        <div className="header-inner">
          <div>
            <h1 className="brand">My Blog</h1>
            <p className="tagline">Thoughtful articles on design, productivity and photography</p>
          </div>
          <nav>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <a href={`#post${post.id}`}>Post {post.id}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="posts-grid">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
