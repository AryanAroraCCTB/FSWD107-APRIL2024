import { send } from 'process';

console.log("Child Process Started");

setTimeout(() => {
    console.log("Child Process Running...");
}, 1000);

setTimeout(() => {
    console.log("Child Process Still Running...");
}, 2000);

setTimeout(() => {
    console.log("Child Process Completed");
    
    if(send) { 
        send("Hello, this is child process."); 
    }
}, 5000);