import { Route, Routes } from "react-router-dom";

function User() {
  return (
    <>
      <Routes>
        <Route path="infouser/*" element={<h1>user info in user</h1>}></Route>
        <Route path="*" element={<h1>Magic users mb</h1>}></Route>
      </Routes>
      <h1>user</h1>
    </>
  );
}

export default User;
