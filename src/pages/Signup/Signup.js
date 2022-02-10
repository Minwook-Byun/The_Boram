import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

// CSS
import "./Signup.css";

const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailErrorMessage, setThumbnailErrorMessage] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  const handleThumFile = (e) => {
    setThumbnail(null); // 이전 파일 초기화
    let selectedFile = e.target.files[0]; //하나만
    console.log(selectedFile);

    // 예외처리 : 업로드 아예 x한 경우, 이미지가 아닌경우, 사이즈가 over한 경우
    if (!selectedFile) {
      setThumbnailErrorMessage("썸네일 이미지를 업로드해주세요🥺");
      return; // 각각의 에러처리를 독립적으로 하기 위해서 return
    }
    if (!selectedFile.type.includes("image")) {
      setThumbnailErrorMessage("흠.. 올리신 파일이 이미지가 아닌 것 같아요!🥺");
      return; // 각각의 에러처리를 독립적으로 하기 위해서 return
    }
    if (selectedFile.size > 1000000) {
      setThumbnailErrorMessage("1000KB 이하의 이미지만 업로드 해주세요!🥺");
      return; // 각각의 에러처리를 독립적으로 하기 위해서 return
    }

    setThumbnailErrorMessage(null);
    setThumbnail(selectedFile);
    console.log("썸네일 업데이트 완료!");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <label>
        <span>이메일: </span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>비밀번호: </span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>사용자 이름: </span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>프로필 이미지: </span>
        <input required type="file" onChange={handleThumFile} />
        {thumbnailErrorMessage ? (
          <div className="error">{thumbnailErrorMessage}</div>
        ) : // 정신차리긔 set~으로 하면 아래와 같이 에러가 난다.
        // index.js:1 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
        null}
      </label>
      {isPending ? (
        <button className="btn">진행중...</button>
      ) : (
        <button className="btn">제출하기</button>
      )}
      {error ? <div className="error">{error}</div> : null}
    </form>
  );
};

export default Singup;
