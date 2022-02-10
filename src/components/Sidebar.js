import { NavLink } from "react-router-dom";

// CSS
import "./Sidebar.css";
// 이미지 파일
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* 아바타와 유저 이름이 추가될 영역 */}
          <p>안녕하세요 ㅇㅇ님!</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="대쉬보드 아이콘" />
                <span>대쉬보드</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="프로젝트 추가 아이콘" />
                <span>새로운 프로젝트</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
