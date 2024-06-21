import React, { useState } from 'react';

const CommentBox = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={newComment}
          onChange={handleInputChange}
          placeholder="Leave a comment..."
        />
        <br />
        <button type="submit">Add Comment</button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index} style={{ margin: '10px 0', alignItems: 'center' }}>
            <span style={{ flexGrow: 1 }}>{comment}</span>
            <button onClick={() => handleDeleteComment(index)} style={{ marginLeft: '100px' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;


// Comments does not stay if you leave the page

