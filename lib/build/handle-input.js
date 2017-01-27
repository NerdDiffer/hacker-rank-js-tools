
// TODO: You'll have to modify the 'handleInput' function for every challenge.
// All data comes in as a string. You must transform the input according to the
// problem statement, so carefully read it.
function handleInput(readData) {
  // Invoke `readData` to get the next input line. For example:
  const numQueries = parseInt(readData()); // interpret entire line as a number
  const line2 = readData(); // interpret entire line as a string
  const space_separated_nums = readData().split(' ').map(v => parseInt(v));

  // TODO: Do the problem solving here
  const result = TODO();

  // Remember to log your result to standard output
  console.log(result);
}

io(process.stdin, handleInput);
