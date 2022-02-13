import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

const GroupComments = ({ project }) => {
  const { updateDocument, res } = useFirestore("projects");
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });
    await setNewComment("");
  };
  return (
    <div className="project-comments">
      <h4>프로젝트 댓글</h4>
      <ul>
        {project.comments?.length > 0 &&
          project.comments?.map((comment) => (
            <li key={comment.id}>
              <div className="comment-author">
                <Avatar src={comment.photoURL} />
                <p>{comment.displayName}</p>
              </div>
              <div className="comment-date">
                <p>date here</p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>
      <form className="댓글 추가" onSubmit={handleSubmit}>
        <label>
          <span>새로운 댓글 추가 : </span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          />
        </label>
        <button className="btn">댓글 추가</button>
      </form>
    </div>
  );
};

export default GroupComments;
