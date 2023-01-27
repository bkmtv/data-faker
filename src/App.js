import './App.css';
import { faker } from "@faker-js/faker";
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  faker.setLocale("ru");

  let listOfUsers = [];

  function createUser() {
    return {
      uuid: faker.datatype.uuid(),
      fullName: faker.name.fullName(),
      address: faker.address.streetAddress(true),
      phone:faker.phone.number(),
    }
  }

  Array.from({ length: 10 }).forEach(() => {
    listOfUsers.push(createUser());
  });

  const fetchUsers = () => {
    console.log("fetchUsers");
    listOfUsers.push(
      Array.from({ length: 10 }).forEach(() => {
        listOfUsers.push(createUser());
      })
    )
  };

  return (
    <div className="App">
      <h3>Случайные данные</h3>
      
      <InfiniteScroll
        dataLength={listOfUsers.length}
        next={fetchUsers}
        hasMore={true}
      >
        {listOfUsers.map((el, key) => {
          return (
            <div key={key} className="card">
              <p>Index: {key + 1}</p>
              <p>ID: {el.uuid}</p>
              <p>Full Name: {el.fullName}</p>
              <p>Address: {el.address}</p>
              <p>Phone: {el.phone}</p>
            </div>
            )
          })
        }
      </InfiniteScroll>
    </div>
  );
}

export default App;
