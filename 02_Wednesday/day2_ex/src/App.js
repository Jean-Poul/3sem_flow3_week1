//import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import SearchResults from './searcher';
import React, { useState, useEffect } from 'react';

const CounterFunction = (props) => {
  //Declare a state variable we'll call count
  const [count, setCount] = useState(props.count);

  console.log(localStorage.getItem("count"));

  useEffect(() => {
    localStorage.setItem("count", count);
})

  return (
    <div>
      <p>You clicked {localStorage.getItem("count")} times</p>
      <button onClick={() => setCount(count + props.incDec)}>
        Click me to increment by {props.incDec}
      </button>
      <button onClick={() => setCount(count - props.incDec)}>
        Click me to decrement by {props.incDec}
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h2>With class component</h2>
      <Counter />
      <h2>With function component</h2>
      <CounterFunction count={9} incDec={3} />
      <h2>Fetching</h2>
      <SearchResults />
    </div>
  );
}

export default App;


