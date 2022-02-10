import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>로그인</h2>
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
        {isPending ? (
          <button className="btn">진행중...</button>
        ) : (
          <button className="btn">로그인</button>
        )}
        {error ? <div className="error">{error}</div> : null}
      </form>
    </div>
  );
};

export default Login;
