import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// 페이지
import Create from "./pages/Create/Create";
import Dashboard from "./pages/Dashboard/Dashboard";
import Groups from "./pages/Groups/Groups";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

// 컴포넌트
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import userList from "./components/UserList";

// hooks
import { useAuthContext } from "./hooks/useAuthContext";
import Userlist from "./components/UserList";

function App() {
  const { user, authIsReady } = useAuthContext();
  // authIsReady action의 타입을 통해서 조건부 렌더링해줄 예정

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Sidebar />
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/">
                {user ? <Dashboard /> : <Redirect to="/login" />}
              </Route>
              <Route path="/create">
                {user ? <Create /> : <Redirect to="/login" />}
              </Route>
              <Route path="/groups/:id">
                {user ? <Groups /> : <Redirect to="/login" />}
              </Route>
              <Route path="/login">
                {user ? <Redirect to="/" /> : <Login />}
              </Route>
              <Route path="/signup">
                {user ? <Redirect to="/" /> : <Signup />}
              </Route>
              <Route path="/signup">
                {user ? <Redirect to="/" /> : <Signup />}
              </Route>
            </Switch>
          </div>
          {user && <Userlist />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
