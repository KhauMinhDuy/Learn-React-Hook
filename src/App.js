import React, { useEffect, useRef } from "react";

function App() {

  // const countRef = useRef(0); // singleton
	const ref = useRef();

  // const obj = {
  //   current: 0,
  // }; // => khi component render lai thi obj duoc khoi tao lai

  // const [count, setCount] = useState(0);

  // console.log({
  //   count,
  //   countRef,
  //   obj,
  // });

	// useEffect(() => {
	// 	setInterval(() => {
	// 		countRef.current = countRef.current + 1;
	// 		// console.log({countRef});	
	// 	}, 1000);
	// }, []);

  // const handleClick = () => {
  //   // setCount(count + 1);
  //   countRef.current = countRef.current + 1;
  //   obj.current = obj.current + 1;
  // };


	console.log({ref});
	useEffect(() => {
		ref.current.focus();
	}, []);

  return (
    <>
			<input type="text" ref={ref}/>
      <button>Click Button</button>
    </>
  );
}

export default App;
