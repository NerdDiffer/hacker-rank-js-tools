#! /usr/bin/env node
const path = require('path');
const inquirer = require('inquirer');
const { build, FILES } = require('../lib/build/index.js');

const TASKS = [
  'Set up boilerplate for new challenge',
  'Add IO handling for some code I already have'
];
const OUTPUTS = ['file', 'process.stdout'];

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
    when: answers => answers.output === OUTPUTS[0],
  },
];

inquirer.prompt(questions)
  .then(answers => {
    const res = {};

    if (answers.task_name === TASKS[0]) {
      res.inputFiles = [FILES.io, FILES.template, FILES.handleInput];
    } else {
      res.inputFiles = [FILES.io, answers.path_to_input, FILES.handleInput];
    }

    if (!answers.output) {
      res.output = null;
    } else {
      res.output = answers.outputFilename;
    }

    build(res.inputFiles, res.output);
  });
