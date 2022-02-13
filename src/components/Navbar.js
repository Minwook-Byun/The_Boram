import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

// CSS
import "./Navbar.css";

// 이미지 파일
import logo from "../assets/bible.svg";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        {/* 유저에게 항상 보여줄 부분 */}
        <li className="logo">
          {/* <img src={logo} alt="로고 이미지" /> */}
          <span></span>
        </li>
        {user ? (
          <>
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
          </>
        ) : (
          <>
            <li>
              <Link to="/login">로그인🔒</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
