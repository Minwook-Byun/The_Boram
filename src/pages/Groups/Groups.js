import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

import "./Groups.css";

// 컴포넌트
import GroupSummary from "./GroupSummary";
import GroupComments from "./GroupComments";

const Groups = () => {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id); //위에서 param 으로 받은 id

  // conditional 하는 방법 2 여기서 return이 일어나서 더 이상 내려가지 않는다.
  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <div className="loading">로딩중...</div>;
  }

  return (
    <div className="project-details">
      {document ? (
        <>
          {/* 안된다면 url도 꼭 살펴보자!  */}
          <GroupSummary project={document} />
          <GroupComments project={document} />
        </>
      ) : (
        <p>데이터 로딩중</p>
      )}
    </div>
  );
};

export default Groups;
