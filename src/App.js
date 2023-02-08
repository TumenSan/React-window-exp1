import Header from "./components/Header/Header";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Users from "./components/Pages/Users/Users";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Header />}></Route>
          <Route path="*" element={<h1>Ошибка</h1>}></Route>
        </Routes>
        <Link to="/">home</Link>
        <Link to="/user">user</Link>
        <Link to="/user/info">user info</Link>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Routes>
          <Route path="user/*" element={<Users />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
