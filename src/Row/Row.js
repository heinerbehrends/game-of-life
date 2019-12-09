import React from 'react';
import Cell from '../Cell/Cell'

function Row({ rowList, rowKey, setMatrix, matrix }) {
  
  const row = rowList.map(
    (value, index) => (
      <Cell 
        isAlive={value} 
        key={index} 
        x={index} 
        y={rowKey} 
        setMatrix={setMatrix} 
        matrix={matrix} />
    )
  )
  return (
    <div>{row}</div>
  )
}

export default Row;