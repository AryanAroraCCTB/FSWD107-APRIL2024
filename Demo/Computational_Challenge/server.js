import factorial from "./factorial.js";
import {fork} from "child_process";

let start_time, end_time;

// Node
// for (let index = 1; index < 500; index++) {
//     start_time = performance.now();
//     console.log(`Factorial ${index}: ${await factorial(index)}`)
//     end_time = performance.now();

//     console.log(`   --> ${end_time-start_time}`);
// }

// Node with Child Process
for (let index = 1; index < 50; index++) {
    // start_time = performance.now();
    const child = fork('factorial_child.js', [index]);

    child.on('message', (data) => {
        console.log(`Factorial of ${index}: ${data}`);
        child.kill();
    });
    // end_time = performance.now();

    // console.log(`   --> ${end_time-start_time}`);
}

