const { Worker, isMainThread, parentPort } = require('worker_threads');

// console.log(__dirname);
// console.log(__filename);

if(isMainThread) {
    console.log("I am main thread");
    // code for main thread
    // const worker = new Worker(`${__dirname}/worker.js`);
    const worker = new Worker(__filename);

    worker.stdout.on('data', (data) => {
        console.log(`Worker Said: ${data}`);
    });
    worker.stderr.on('data', (data) => {
        console.log(`Worker Error Said: ${data}`);
    });
    worker.on('exit', (code) => {
        console.log(`Worker exited with code: ${code}`);
    });

    worker.on('message', (message) => {
        console.log(`Worker Messaged: ${message}`);
    });

    // worker.postMessage('Hi I am main thread'); 

    worker.postMessage([1,2,3,4,5,6,7]); // main to worker thread 
    worker.postMessage([1,2,3,4,5,6,7,8,9,10,11]);
    worker.postMessage([1,2,3,4,5,6,7,1,2,3,4,5,6,7,]);
    worker.postMessage([1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,]);
} else {
    // code for worker thread

    // console.log("I am working worker thread");
    // console.error("I am error worker thread");

    // setTimeout(() => {
    //     console.log("Worker Thread Finished Computation");
    // }, 5000);

    // const numbers = [1,2,3,4,5,6,7];
    // let sum = 0;
    // for (let index = 0; index < numbers.length; index++) {
    //     sum += numbers[index];
    // }

    // parentPort.postMessage(sum); // worker to main thread

    parentPort.on('message', (message) => {
        const numbers = message;
        let sum = 0;
        for (let index = 0; index < numbers.length; index++) {
            sum += numbers[index];
        }

        parentPort.postMessage(sum); // worker to main thread
    })

    return 1;
}
