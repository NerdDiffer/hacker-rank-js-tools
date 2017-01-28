/**
 * Use this module to build your answer for HackerRank console.
 * - Pass in the path to your challenge file as process.argv[2]
 * - Optionally, pass in path to output file as process.argv[3]
 *   - If nothing is passed, then it outputs to process.stdout
 *
 * Example (assuming you're doing it from project root):
 *
 * node lib/build <path/to/src> [path/to/dest]
 */

const fs = require('fs');
const multistream = require('multistream');

const streamifyInput = filenames => filenames.map(file => fs.createReadStream(file));
const writeToFile = filename => fs.createWriteStream(filename, { autoClose: true });

const build = (inputFiles, output) => {
  const inputStreams = streamifyInput(inputFiles);
  const outputStream = !!output ?
    writeToFile(output) :
    process.stdout;

  multistream(inputStreams).pipe(outputStream);
};

const FILES = {
  io:          __dirname + '/io.js',
  template:    __dirname + '/template.js',
  handleInput: __dirname + '/handle-input.js'
};

module.exports = { build, FILES };
