console.log("A. Start");

setTimeout(() => console.log("B. setTimeout callback"), 0);

Promise.resolve()
  .then(() => console.log("C. First Promise"))
  .then(() => console.log("D. Second Promise"));

console.log("E. End");
// Expected Output Order:
// A. Start
// E. End
// B. setTimeout callback
// C. First Promise
// D. Second Promise
