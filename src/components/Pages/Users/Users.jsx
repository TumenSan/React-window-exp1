import { Route, Routes } from "react-router-dom";
import User from "./User/User";
import { FixedSizeList } from "react-window";
import faker from "faker";
//import { faker } from '@faker-js/faker';

const bigList = [...Array(500)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));
function Users() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );

  return (
    <>
      <Routes>
        <Route path="info/*" element={<User />}></Route>
        <Route path="*" element={<h1>Magic users</h1>}></Route>
      </Routes>
      <FixedSizeList
        height={window.innerHeight}
        width={window.innerWidth - 20}
        itemCount={bigList.length}
        itemSize={50}
      >
        {renderRow}
      </FixedSizeList>
    </>
  );
}

export default Users;
