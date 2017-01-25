const io = (inputStream, callback) => {
  inputStream.resume();
  inputStream.setEncoding('ascii');

  let buffer = '';
  let currentLine = 0;

  inputStream.on('data', data => {
    buffer += data;
  });

  inputStream.on('end', () => {
    const collectedData = buffer.split("\n");
    const readData = () => collectedData[currentLine++];
    callback(readData);
  });
};

