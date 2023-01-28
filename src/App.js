import './App.css';
import { useState, useEffect } from 'react';
import { faker } from "@faker-js/faker";

function App() {
  faker.setLocale("en");
  const [listOfUsers, setListOfUsers] = useState([]);

  function createUser() {
    return {
      uuid: faker.datatype.uuid(),
      fullName: faker.name.fullName(),
      address: faker.address.streetAddress(true),
      phone:faker.phone.number(),
    }
  }
  const newUsers = [];
  Array.from({ length: 10 }).forEach(() => {
    newUsers.push(createUser());
  });

  function refresh() {
    setListOfUsers([...newUsers]);
  }

  useEffect(() => {
    setListOfUsers(newUsers);
  }, []);

  const scrollHandler = (e) => {
      if ((e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight) < 100) {
        setListOfUsers([...newUsers, ...newUsers]);
      }
    }

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    }
  }, []);


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
              <p>Phone: {el.phone}</p>
            </div>
            )
          })
        }
    </div>
  )
}

export default App;