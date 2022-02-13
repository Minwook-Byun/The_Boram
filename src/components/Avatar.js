import "./Avatar.css";

import React from "react";

// 하드코딩하면 안 됨! 이미지 파일 많아지면 우째!
export default function Avatar({ src }) {
  return (
    <div className="avatar">
      <img src={src} alt="유저의 아바타이미지입니다" />
    </div>
  );
}
