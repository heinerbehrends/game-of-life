import React from 'react';
import Row from '../Row/Row';

function Matrix({ matrix, setMatrix }) {
  return (
    matrix.map((row, index) => (
      <Row rowList={row} key={index} rowKey={index} setMatrix={setMatrix} matrix={matrix} />
    ))
  )
}

export default Matrix;