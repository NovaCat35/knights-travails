// Now you’re a pro with DFS and BFS. Let’s try using our search algorithms on a real problem.

// For this project, you’ll need to use a graph, a data structure that’s similar (but not identical) to a binary tree. For a good introduction on what graphs are, reference this article. Don’t forget to look at the section on representing graphs, as it should give you some good ideas on how to actually implement graphs in your code.

// A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns (don’t believe it? See this animation). Its basic move is two steps forward and one step to the side or one step forward and two steps to the side. It can face any direction.

// All the possible places you can end up after one move look like this:

// Assignment
// Your task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

// You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:

// knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
// Sometimes there is more than one fastest path. Examples of this are shown below. Any answer is correct as long as it follows the rules and gives the shortest possible path.

// knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]] or knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
// knightMoves([3,3],[0,0]) == [[3,3],[2,1],[0,0]] or knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]
// knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]
// Think about the rules of the board and knight, and make sure to follow them.
// For every square there is a number of possible moves, choose a data structure that will allow you to work with them. Don’t allow any moves to go off the board.
// Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.
// Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:
//   > knightMoves([3,3],[4,3])
//   => You made it in 3 moves!  Here's your path:
//     [3,3]
//     [4,5]
//     [2,4]
//     [4,3]


function knightMoves(start, end) {
   const checkKnightValidMoves = (x, y) => {
       const validMoves = [
           [x + 2, y + 1],
           [x + 2, y - 1],
           [x - 2, y + 1],
           [x - 2, y - 1],
           [x + 1, y + 2],
           [x + 1, y - 2],
           [x - 1, y + 2],
           [x - 1, y - 2]
       ];
       return validMoves.filter(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8);
   };

   const queue = [[start]];
   const visited = new Set([start.toString()]);

   while (queue.length) {
       const path = queue.shift();
       const [x, y] = path[path.length - 1];

       if (x === end[0] && y === end[1]) { // the end point is reached
           return path;
       }

       for (const [newX, newY] of checkKnightValidMoves(x, y)) {
           const newPath = [...path, [newX, newY]];
           const newPathStr = newPath.toString();
           if (!visited.has(newPathStr)) {
               queue.push(newPath);
               visited.add(newPathStr);
           }
       }
   }

   return [];
}

const example1 = knightMoves([0, 0], [1, 2]);
console.log(example1); // [[0,0],[1,2]]

const example2 = knightMoves([0, 0], [3, 3]);
console.log(example2); // [[0,0],[2,1],[3,3]] or [[0,0],[1,2],[3,3]]

const example3 = knightMoves([3, 3], [0, 0]);
console.log(example3); // [[3,3],[2,1],[0,0]] or [[3,3],[1,2],[0,0]]

const example4 = knightMoves([0, 0], [7, 7]);
console.log(example4); // [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]

const example5 = knightMoves([0,0],[3,3]);
;
console.log(example5); // [[3,3],[4,5],[2,4],[4,3]