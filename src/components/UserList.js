import React from "react";

// 스타일
import "./UserList.css";

// 컴포넌트
import Avatar from "../components/Avatar";

// hooks
import { useCollection } from "../hooks/useCollection";

const Userlist = () => {
  const { error, documents } = useCollection("users");
  return (
    <div className="user-list">
      <h2>모든 유저</h2>
      {error ? <p className="error">{error}</p> : null}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            {user.online ? <span className="online-user"></span> : null}{" "}
            {/*  온라인 유저 식별 버튼*/}
            <p>{user.displayName}</p>
            <Avatar src={user.photoURL} />
          </div>
        ))}

      {/* {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))} */}
    </div>
  );
};

export default Userlist;
