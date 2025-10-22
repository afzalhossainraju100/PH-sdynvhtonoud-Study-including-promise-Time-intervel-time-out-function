// setintervel.js
// Demonstrates using setInterval to run repeated code every second

let count = 0; // tick counter

// schedule a function to run every 1000 milliseconds (1 second)
const id = setInterval(() => {
    count++; // increment tick counter
    console.log(`Tick ${count}: ${new Date().toLocaleTimeString()}`); // log tick number and current time

    // stop the interval after 5 ticks
    if (count >= 5) {
        clearInterval(id); // cancel the scheduled interval
        console.log('Stopped.'); // indicate the interval was cleared
    }
}, 1000);