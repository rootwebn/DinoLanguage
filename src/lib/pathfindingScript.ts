type Point = {
  x: number;
  y: number;
};

type Grid = number[][];

export function generateGrid(
  rows: number,
  cols: number,
  obstacleProbability: number,
): Grid {
  const grid: Grid = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (Math.random() < obstacleProbability) {
        if ((y === 0 && x === 0) || (y === 4 && x === 4)) {
          grid[y][x] = 0;
        }
        grid[y][x] = 1; // Set obstacle
      }
    }
  }
  console.log('worked');
  return grid;
}

export function findPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  grid: Grid,
  useDiagonals: boolean,
): number[][] {
  const directions = useDiagonals
    ? [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ]
    : [
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 0],
      ];
  const queue: number[][] = [[startX, startY]];
  const visited: boolean[][] = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(false),
  );
  const path: number[][] = [];

  const prev: { [key: string]: [number, number] } = {};
  let pathFound = false;

  while (queue.length > 0) {
    const [x, y] = queue.shift()!;
    visited[y][x] = true;

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newX >= 0 &&
        newX < grid[0].length &&
        newY >= 0 &&
        newY < grid.length &&
        grid[newY][newX] !== 1 &&
        !visited[newY][newX]
      ) {
        queue.push([newX, newY]);
        visited[newY][newX] = true;
        prev[`${newX},${newY}`] = [x, y];

        if (newX === endX && newY === endY) {
          pathFound = true;
          break;
        }
      }
    }

    if (pathFound) {
      break;
    }
  }

  if (pathFound) {
    let current = [endX, endY];
    while (current) {
      path.unshift(current);
      if (current[0] === startX && current[1] === startY) {
        break;
      }
      current = prev[`${current[0]},${current[1]}`];
    }

    // Mark the path on the grid
    for (const [x, y] of path) {
      grid[y][x] = 3;
    }
  }

  return path;
}
