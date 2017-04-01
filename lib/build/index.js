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
  handleInput: __dirname + '/handle-input.js',
  template:    __dirname + '/template.js'
};

module.exports = { build, FILES };
