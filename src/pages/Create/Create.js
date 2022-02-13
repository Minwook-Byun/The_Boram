import React, { useState, useEffect } from "react";
import Select from "react-select";

import "./Create.css";

import { timestamp } from "../../firebase/config";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useHistory } from "react-router-dom";

const categories = [
  { value: "개발자", label: "개발자" },
  { value: "디자인", label: "디자인" },
  { value: "영업", label: "영업" },
];

const Create = () => {
  // 폼의 필드 구성
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  const history = useHistory();
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore("projects");

  // 유저가 변경될 때마다 업데이트가 일어날 수 있도록 useEffect를 사용한다
  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    // 그 뒤로 해줄 것 없으니 return 처리
    if (!category) {
      setFormError("카테고리를 선택해주세요");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError("한 명 이상의 작성자를 선택해주세요!");
      return;
    }

    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id,
      };
    });
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const project = {
      name,
      details,
      assignedUsersList,
      createdBy,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
    };

    await addDocument(project);
    if (!response.error) {
      history.push("/");
    }
  };

  return (
    <div className="create-form">
      <h2 className="page-title"> 새 프로젝트 생성</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>프로젝트 이름:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>
        <label>
          <span>프로젝트 설명:</span>
          <textarea
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            required
          />
        </label>
        <label>
          <span>기한:</span>
          <input
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
            required
          />
        </label>
        <label>
          <span>구해요: </span>
          <Select
            options={categories}
            onChange={(options) => setCategory(options)}
            // options만 설정하고 만족하면, 반영이 안 돼요!
          />
        </label>
        <label>
          <span>올린 사람</span>
          <Select
            options={users}
            onChange={(options) => setAssignedUsers(options)}
            isMulti
          />
        </label>
        <button className="btn">작성완료</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;
