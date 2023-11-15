import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {decrement, increment, reset} from "./counterSlice";


const CounterView = () => {
  //use selector
  const count = useSelector((state) => state.counter.count);
  //use dispatch
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => {dispatch(increment())}}>Increment</button>
      <button onClick={() => {dispatch(decrement())}}>Decrement</button>
      <button onClick={() => {dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default CounterView;