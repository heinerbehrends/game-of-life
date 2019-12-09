import React, { useState } from 'react';
import useInterval from './useInterval';
import Matrix from './Matrix/Matrix';
import Button from './Button/Button';
import nextGen from './nextGen/nextGen';
import './App.css';


const initialState = Array(50).fill(false).map(item => {
  return Array(50).fill(item)
});

function App() {
  const [matrix, setMatrix] = useState(initialState);
  const [delay, setDelay] = useState(null);
  useInterval(() => setMatrix(nextGen(matrix)), delay)

  return (
    <>
      <Matrix matrix={matrix} setMatrix={setMatrix} />
      <Button onClick={() => {
        delay ? setDelay(null) : setDelay(100)
      }}>{delay ? 'Stop' : 'Start'}</Button>
    </>
  );
}

export default App;
