import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      Hello from React!
      <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
    </div>
  );
}
ReactDOM.render(<App></App>, document.getElementById("app"));
// const { useState } = React;

// const Button = ({ increment, onClickFunction }) => {
//   const handleClick = () => {
//     onClickFunction(increment);
//   };
//   return <button onClick={handleClick}>+{increment}</button>;
// };

// const App = () => {
//   const [count, setCount] = useState(0);

//   const incrementCount = increment => {
//     setCount(count + increment);
//   };

//   return (
//     <div>
//       <Button increment={1} onClickFunction={incrementCount} />
//       <Button increment={10} onClickFunction={incrementCount} />
//       <Button increment={100} onClickFunction={incrementCount} />
//       <Button increment={1000} onClickFunction={incrementCount} />
//       <span>{count}</span>
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("app"));
