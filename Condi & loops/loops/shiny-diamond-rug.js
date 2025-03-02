function shinyDiamondRug(n) {
  let p = "";

  // Upper half
  for (let row = 0; row < n; row++) {
    // Spaces
    for (let i = 0; i < n - row - 1; i++) {
      p += " ";
    }
    // Stars
    for (let j = 0; j < 2 * row + 1; j++) {
      p += "*";
    }
    if (row !== n - 1) p += "\n"; // Avoid new line on the last row
  }

  // Lower half
  for (let row = n - 2; row >= 0; row--) {
    p += "\n"; // Only add newline before lower rows
    // Spaces
    for (let i = 0; i < n - row - 1; i++) {
      p += " ";
    }
    // Stars
    for (let j = 0; j < 2 * row + 1; j++) {
      p += "*";
    }
  }

  return p;
}

// You just need to implement the shinyDiamondRug function
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const n = parseInt(input.trim(), 10); // Get the number input
  const result = shinyDiamondRug(n); // Call our function
  process.stdout.write(result); // Output the result
});
