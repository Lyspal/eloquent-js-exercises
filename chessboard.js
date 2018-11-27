/* Returns a chessboard pattern like:
    # # # #
   # # # # 
    # # # #
   # # # # 
    # # # #
   # # # # 
    # # # #
   # # # # 
*/

// My implementation
let size = 8;

for (let y = 0; y < size; y++) {
    let row = "";
    let x = 0;
    while (x < size) {
        if (y % 2 == x % 2) {
            row += " ";
        } else {
            row += "#";
        };
        x++;
    }
    console.log(row);
}


console.log("\n");


// Solution
size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);