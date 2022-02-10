import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// 페이지
import Create from "./pages/Create/Create";
import Dashboard from "./pages/Dashboard/Dashboard";
import Groups from "./pages/Groups/Groups";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

// 컴포넌트
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className=".container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/groups/:id">
              <Groups />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
