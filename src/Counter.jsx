// import React from 'react';

// function Counter({ count, increment, decrement }) {
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//        <button onclick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Counter;


import React from 'react';

function Counter({ increment, decrement }) {
  return (
    <div>
      <p id="count">0</p>
      <button onClick={increment}>Add (+1)</button>
      <button onClick={decrement}>Subtract (-1)</button>
    </div>
  );
}

export default Counter;

