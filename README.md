# HackerRank Tools for JS

Tools to handle the business of IO for [HackerRank](https://www.hackerrank.com)
challenges in JS.

### Usage

All of these assume there is one file with your problem solving code. It just
sandwiches your solution with IO-handling code for easy transfer to HackerRank.

```sh
# Pipe to standard output
node lib/build <path/to/problem-file.js>

# Write to a file
node lib/build <path/to/problem-file.js> <path/to/dest>

# Pipe to your clipboard (linux)
node lib/build <path/to/problem-file.js> | xclip -sel clip
```
