// import logo from './logo.svg';
// import React, { useState } from 'react'; // Import useState
// import './App.css';
// import Counter from './Counter';

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//const reset = () => {
  //     setCount(0)
  //   };

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <Counter count={count} increment={increment} decrement={decrement} />
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Counter from './Counter'

function App() {
  const increment = () => {
    document.getElementById("count").innerText = parseInt(document.getElementById("count").innerText) + 1;
  };

  const decrement = () => {
    document.getElementById("count").innerText = parseInt(document.getElementById("count").innerText) - 1;
  };

  return (
    <div class= 'body'>
      <div class='container'>
      <h1 class='h1'>Counter App</h1>
      <Counter increment={increment} decrement={decrement} />
      </div>
    </div>
  )
}

export default App


