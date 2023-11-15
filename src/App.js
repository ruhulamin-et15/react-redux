import React from "react";
import "./App.css";
// import { FaBeer } from 'react-icons/fa';
//import Button from 'react-bootstrap/Button';
// import { createRoot } from 'react-dom/client';
// import { uuid } from 'uuidv4';

// import Home from "./Home";
// import Counter from "./components/Counter";
// import Todos from "./components/Todos";
import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";


function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Todos/> */}
      <CounterView/>
      <PostsView/>
    </div>
  );
};

export default App;
