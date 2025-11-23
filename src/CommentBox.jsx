import React, { useState } from "react";

function CommentBox() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    if (name === "" || msg === "") {
      alert("Please fill all fields");
      return;
    }

    setComments([...comments, { name, msg }]);
    setName("");
    setMsg("");
  };

  return (
    <div className="comment-box">
      <h3>Leave a Comment</h3>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Your Comment"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      <div className="comments">
        {comments.map((c, index) => (
          <p key={index}>
            <strong>{c.name}: </strong>
            {c.msg}
          </p>
        ))}
      </div>
    </div>
  );
}

export default CommentBox;
