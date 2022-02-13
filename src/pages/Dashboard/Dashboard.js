import React from "react";

import { useCollection } from "../../hooks/useCollection";
import ProjectList from "../../components/ProjectList";
import "./Dashboard.css";

const Dashboard = () => {
  const { documents, error } = useCollection("projects");

  return (
    <div>
      <h2 className="page-title">대쉬보드</h2>
      {error ? <p>{error}</p> : null}
      {documents ? <ProjectList projects={documents} /> : null}
    </div>
  );
};

export default Dashboard;
