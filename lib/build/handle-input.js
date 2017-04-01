/**
 * TODO: You'll have to modify the 'handleInput' function for every challenge.
 * All data comes in as a string. You must transform the input according to the
 * problem statement, so carefully read it.
 *
 * @param cb, {Function} the thing to do to your results. In HackerRank, it'll
 * be console.log. But if using this module in a local unit test, you might want
 * to pass in a function that wraps your assertion.
 */
const handleInput = (cb, readData) => {
  // Invoke `readData` to get the next input line. For example:
  const numQueries = parseInt(readData()); // interpret entire line as a number
  const line2 = readData(); // interpret entire line as a string
  const space_separated_nums = readData().split(' ').map(v => parseInt(v));

  // TODO: Do the problem solving here
  const result = TODO();

  // Remember to log your result to standard output
  cb(result);
};

io(process.stdin, handleInput.bind(null, console.log));

