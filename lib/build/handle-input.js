
// Copy this template for a new problem. Copy & paste your work into the
// HackerRank console. You'll have to modify the 'main' function for every challenge.

const handleInput = readData => {
  // All data comes in as a string. You must transform the input according to
  // the problem statement, so carefully read it.
  // Invoke `readData` to get the next input line. For example:
  const line1 = readData(); // interpret entire line as a string
  const line2 = +readData(); // interpret entire line as one number
  const space_separated_nums = readData().split(' ').map(v => parseInt(v));

  // Do the problem solving here
  const result = TODO(...args);

  // Remember to log your result to standard output
  console.log(result);
};

io(process.stdin, handleInput);
