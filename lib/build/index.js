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

const BUILD_TEMPLATE_DIR = __dirname + '/';
const pathToProblemSrc = process.argv[2];
const outputStream = setOutput(process.argv[3]);

const inputFiles = [
  BUILD_TEMPLATE_DIR + 'io.js',
  pathToProblemSrc,
  BUILD_TEMPLATE_DIR + 'handle-input.js'
];

const inputStreams = inputFiles.map(file => {
  return fs.createReadStream(file);
});

multistream(inputStreams).pipe(outputStream);

function setOutput(filename) {
  if (!filename) { return process.stdout; }
  return fs.createWriteStream(filename, { autoClose: true });
}
