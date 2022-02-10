import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

// CSS
import "./Navbar.css";

// 이미지 파일
// 로고
import logo from "../assets/bible.svg";

const Navbar = () => {
  const { logout, isPending } = useLogout();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={logo} alt="로고 이미지" />
          <span> 이름짓기가 젤 어렵다 </span>
        </li>

        <li>
          <Link to="/login">로그인🔒</Link>
        </li>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
        <li>
          {isPending ? (
            <button className="btn" onClick={logout}>
              로그아웃 중입니다...
            </button>
          ) : (
            <button className="btn" onClick={logout}>
              로그아웃
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
