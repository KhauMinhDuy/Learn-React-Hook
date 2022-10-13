import React, { useMemo, useState } from "react";

function expensiveFunction(number) {
  console.log("start");
  const start = new Date();

  while (new Date() - start < 3000) {}

  console.log("end", new Date() - start, "ms");

  return number * number;
}

function App() {
  const [count, setCount] = useState(0);
	const [num, setNum] = useState(20);

  // const number = expensiveFunction(10);
  const number = useMemo(() => {
    return expensiveFunction(num);
  }, [num]);

  return (
    <>
      <p>Count {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <p>Number: {number}</p>
    </>
  );
}

export default App;
