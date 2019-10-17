function getNeighbours([x, y]) {
  return ([
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1], 
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ]);
}

function isOnBoard([x, y], matrix) {
  return (
    x >= 0 && 
    x < matrix[0].length &&
    y >= 0 &&
    y < matrix.length
  );
}

function checkLive([x, y], state) {
  return state[x][y];
}

function countLives(acc, neighbour) {
  return neighbour ? acc + 1 : acc;
}

function countLiveNeighbours(cell, matrix) {
  return (
    getNeighbours(cell)
      .filter(cell => isOnBoard(cell, matrix))
      .map(cell => checkLive(cell, matrix))
      .reduce(countLives, 0)
  );
}

function liveCellChange(liveNeighbours) {
  if (liveNeighbours < 2) return false;
  else if (liveNeighbours > 3) return false;
  return true;
}

function deadCellChange(liveNeighbours) {
  if (liveNeighbours === 3) return true;
  return false;
}

function cellChange(isAlive, liveNeighbours) {
  return isAlive ? liveCellChange(liveNeighbours) : deadCellChange(liveNeighbours);
}

function nextGen(matrix) {
  return matrix.map((row, indexRow) => {
    return row.map((isAlive, indexColumn) => {
      return cellChange(isAlive, countLiveNeighbours([indexRow, indexColumn], matrix));
    })
  })
}

export default nextGen;