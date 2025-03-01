function printDiamond(n) {
    // Upper part of the diamond
    for (let i = 0; i < n; i++) {
      let st = '';
  
      // Spaces for alignment
      for (let j = 0; j < n - i - 1; j++) {
        st += ' ';
      }
  
      // Stars in the current row
      for (let k = 0; k < 2 * i + 1; k++) {
        st += '*';
      }
  
      console.log(st);
    }
  
    // Lower part of the diamond
    for (let i = n - 2; i >= 0; i--) {
      let st = '';
  
      // Spaces for alignment
      for (let j = 0; j < n - i - 1; j++) {
        st += ' ';
      }
  
      // Stars in the current row
      for (let k = 0; k < 2 * i + 1; k++) {
        st += '*';
      }
  
      console.log(st);
    }
  }
  
  // Example usage:
  printDiamond(5);
