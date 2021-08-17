import { useEffect, useState } from 'react';

let App = () => {

  let [count, setCount] = useState(0);

  let [process, setProcess] = useState("running");

  console.log("render was called")

  //case 1:
  // you have passed a function and an empty arr
  // then useEffect calls the passed function only once, after first render
  // useEffect(() => {
  //   console.log("use effect was called when component mounted");
  // }, []);

  // case 2:
  // in this case you only give a function and no arr
  // useEffect will execute your function after every render, that is after first render and every re-render
  // useEffect(() => {
  //   console.log("use effect was called on every render");
  // })

  // case 3:
  // this useEffect will execute after first render 
  // and also after the state variable which is being used changes 
  useEffect(() => {
    let arr = process.split('i');
    console.log(arr);
  }, [process])


  return (
    <div className="App">
      <button onClick={() => {
        setCount(count + 1);
      }}>+</button>
      <p>{count}</p>
      <button onClick={() => {
        setCount(count - 1)
      }}>-</button>

      <p>{process}</p>
      <button onClick={() => {
        setProcess("Killed")
      }}>Kill Process</button>
    </div>
  );
}

export default App;
