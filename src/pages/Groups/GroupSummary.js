import React from "react";
import Avatar from "../../components/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useHistory } from "react-router-dom";

const Groupsummary = ({ project }) => {
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
  const history = useHistory(); // 얘는 {} 쓰면 안 되요!

  const handleClick = (e) => {
    deleteDocument(project.id);
    history.push("/");
  };
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>작성자 : {project.createdBy?.displayName}</p>
        <p className="due-date">
          프로젝트 기한 {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>함께 하는 사람들 : </h4>
        {project.assignedUsersList?.map((user) => (
          <div key={user.id}>
            <Avatar src={user.photoURL} />
          </div>
        ))}
      </div>
      {user.uid === project.createdBy?.id && (
        <button className="btn" onClick={handleClick}>
          완료된 프로젝트
        </button>
      )}
    </div>
  );
};

export default Groupsummary;
