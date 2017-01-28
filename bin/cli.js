#! /usr/bin/env node
const path = require('path');
const inquirer = require('inquirer');
const build = require('../lib/build/index.js');

const BUILD_FILES_DIR = path.join(__dirname, '../lib/build');
const BUILD_FILES = {
  io:       BUILD_FILES_DIR + '/io.js',
  template: BUILD_FILES_DIR + '/template.js'
};
const TASKS = [
  'Set up boilerplate for new challenge',
  'Add IO handling for some code I already have'
];
const OUTPUTS = ['process.stdout', 'file'];

const questions = [
  {
    name: 'task_name',
    message: 'What task do you want to do?',
    type: 'list',
    choices: TASKS,
    'default': 0
  },
  {
    name: 'path_to_input',
    message: 'Type in the relative path to your existing code',
    type: 'input',
    filter: input => path.join(process.cwd(), input),
    when: answers => answers.task_name !== TASKS[0]
  },
  {
    name: 'output',
    message: 'Do you want to write to a process.stdout or a file?',
    type: 'list',
    choices: OUTPUTS,
    'default': 0
  },
  {
    name: 'outputFilename',
    message: 'Type in the relative path you want to write your output file',
    type: 'input',
    filter: input => path.join(process.cwd(), input),
    when: answers => answers.output !== OUTPUTS[0],
  },
];

inquirer.prompt(questions)
  .then(answers => {
    const res = {};

    if (answers.task_name === TASKS[0]) {
      res.inputFiles = [BUILD_FILES.io, BUILD_FILES.template];
    } else {
      res.inputFiles = [BUILD_FILES.io, answers.path_to_input, BUILD_FILES.template];
    }

    if (!answers.output) {
      res.output = null;
    } else {
      res.output = answers.outputFilename;
    }

    build(res.inputFiles, res.output);
  });
