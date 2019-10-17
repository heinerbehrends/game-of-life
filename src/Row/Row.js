import React from 'react';
import Square from '../Square/Square'

function Row({ rowState, rowKey, setMatrix, matrix }) {
  
  const row = rowState.map(
    (value, index) => (
      <Square 
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