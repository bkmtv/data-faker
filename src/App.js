import './App.css';
import { useState, useEffect } from 'react';
import { faker } from "@faker-js/faker";

function App() {
  faker.setLocale("ru");

  const [listOfUsers, setListOfUsers] = useState([]);

  function createUser() {
    return {
      uuid: faker.datatype.uuid(),
      fullName: faker.name.fullName(),
      address: faker.address.streetAddress(true),
      phone:faker.phone.number(),
    }
  }

  useEffect(() => {
    setListOfUsers(
      Array.from({ length: 10 }, (e => createUser()))
    )
  }, [setListOfUsers]);

  function refresh() {
    setListOfUsers(
      Array.from({ length: 10 }, (e => createUser()))
    )
  }

  return (
    <div className="App">
      <h2>Fake Users</h2>
      <button onClick={refresh}>Refresh</button>
        {listOfUsers.map((el, key) => {
          return (
            <div key={key} className="card">
              <p>Index: {key + 1}</p>
              <p>ID: {el.uuid}</p>
              <p>Full Name: {el.fullName}</p>
              <p>Address: {el.address}</p>
              <p>Phone: {"+7" + el.phone}</p>
            </div>
            )
          })
        }
    </div>
  );
}

export default App;