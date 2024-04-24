import { fork } from 'child_process';

const forked = fork('childServer2.js');

forked.on('message', (msg) => {
  console.log('Message from child', msg);
});

forked.send({ hello: 'world' });