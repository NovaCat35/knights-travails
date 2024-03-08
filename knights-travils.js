function knightMoves(start, end) {
	let queue = [[start]];
	let visited = new Set();
	visited.add(start.toString()); // Convert coordinates to string to use them as keys in the set

	// Generate possible knight moves
	const moves = [
		[-2, -1],
		[-2, 1],
		[2, -1],
		[2, 1],
		[-1, -2],
		[-1, 2],
		[1, -2],
		[1, 2],
	];

	while (queue.length > 0) {
		const currPath = queue.shift(); // this holds an array(all paths) of arrays (specific path)
		const [x, y] = currPath[currPath.length - 1];

		if (x === end[0] && y === end[1]) {
			console.log(`You made it in ${currPath.length - 1} moves!  Here's your path:`);
			console.log(currPath);
			return currPath; // return the path
		}

		for (const [dx, dy] of moves) {
			const newCoordX = x + dx;
			const newCoordY = y + dy;
			const newPosition = [newCoordX, newCoordY];
			const newPositionStr = newPosition.toString(); // Convert coordinates to string

			// prevent path from going out of bound in the 8x8 grid
			if (!visited.has(newPositionStr) && newCoordX >= 0 && newCoordX < 8 && newCoordY >= 0 && newCoordY < 8) {
				queue.push([...currPath, newPosition]);
				visited.add(newPositionStr);
			}
		}
	}

	console.log(`No valid path found from ${start} to ${end}.`);
	return null;
}


/* TESTING */
knightMoves([0, 0], [3, 3]);
// knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]] 
// or knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]

knightMoves([3,3],[4,3])
// => You made it in 3 moves!  Here's your path:
//   [3,3]
//   [4,5]
//   [2,4]
//   [4,3]
