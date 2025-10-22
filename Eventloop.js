console.log("1️⃣ Start");

setTimeout(() => console.log("2️⃣ Timeout done"), 0);

console.log("3️⃣ End");

//example using promise
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

