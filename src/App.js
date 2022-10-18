import React, { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [users, setUsers] = useState([]);

  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  const handlerClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };

  return (
    <>
      <p>Data:</p>
      <button onClick={handlerClick}>Get Users Data</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData} />
    </>
  );
}

export default App;
