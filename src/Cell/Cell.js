import React from 'react';
import styled from 'styled-components';

const StyledSquare = styled.div`
  width: 8px;
  height: 8px;
  display: inline-block;
  margin: .66px; 
  background-color: ${ props => props.isAlive ? "black" : "white" };
`;

function Cell({ isAlive, x, y, setMatrix, matrix }) {
  const handleClick = e => {
    const x = e.target.getAttribute('x');
    const y = e.target.getAttribute('y');
    const updatedMatrix = matrix.map(row => row.slice());
    updatedMatrix[y][x] = ! isAlive;
    setMatrix(updatedMatrix
      // matrix.map(
      //   (row, rowIndex) => {
      //     console.log(rowIndex);
      //     console.log(y);
      //     if (rowIndex == y) {
      //       console.log('yeah')
      //       return row.map(
      //         (cell, cellIndex) => {
      //           console.log(cell)
      //           if (cellIndex == x) {
      //             return ! cell;
      //           }
      //           return cell;
      //         }
      //       )
      //     }
      //   return row;
      // }
      )
  }
  return (
    <StyledSquare isAlive={isAlive} x={x} y={y} onClick={handleClick} />
  )
}

export default Cell;