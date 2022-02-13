import { NavLink } from "react-router-dom";

// CSS
import "./Sidebar.css";
// 이미지 파일
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";

// 컴포넌트
import Avatar from "../components/Avatar";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* 프랍으로 넘겨주려면 user에서 또 받아와야 한다! */}
          {user ? (
            <>
              <Avatar src={user.photoURL} />
              <p>안녕하세요 {user.displayName}님!</p>
            </>
          ) : null}
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
