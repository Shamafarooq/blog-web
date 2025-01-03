"use client"
import React, { useState } from 'react';
const Comments = () => {
    const [comment, setComment] = useState<string>(''); 
    const [comments, setComments] = useState<string[]>([]); 
  
    const handleCommentSubmit = (e: React.FormEvent) => {
      e.preventDefault(); 
      if (comment.trim() !== '') {
        setComments([...comments, comment]);
        setComment(''); 
      }
    };
    return (
        <>
        {/* Comment Section */}
    <div className="py-8 px-8">
    <h3 className="pb-4 text-[20px] px-12 font-bold text-left font-serif">Read This Blog And Add Your Feedback Here</h3>
    <form onSubmit={handleCommentSubmit} className="mt-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-[95%] p-2 ml-7 border border-gray-300 rounded-lg"
        placeholder="Write your comment..."
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 ml-7 text-[18px] mt-2 text-white bg-blue-500 rounded-lg"
      >
        Submit
      </button>
    </form>
    {/* Display Comments */}
    <div className="mt-4">
      <h4 className="pb-4 text-[20px] px-12 font-bold text-left font-serif">Comments:</h4>
      <ul className="mt-2 space-y-2">
        {comments.map((cmt, index) => (
          <li
            key={index}
            className="p-2 border border-gray-300 rounded-lg bg-gray-50"
          >
            {cmt}
          </li>
        ))}
      </ul>
    </div>
  </div>
  </>
)
}

export default Comments