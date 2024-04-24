const { spawn } = require('child_process');

const child = spawn('node', ['childServer.js']);
// const child = spawn('python3', ['childServer.py']);

child.stdout.on('data', (data) => {
    console.log(`Child Said: ${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`Child Complains: ${data}`);
});

child.on('message', (message) => {
    console.log(`Child Messaged: ${message}`);
});

child.on('close', (code) => {
    console.log(`Child Finished: ${code}`);
});