// Basic Promise (create, resolve, reject)
const p = new Promise((resolve, reject) => {
  // some async work simulated with setTimeout
  setTimeout(() => {
    const success = true;
    if (success) resolve("Done");
    else reject(new Error("Failed"));
  }, 500);
});

p.then((value) => {
  console.log("Resolved with:", value);
}).catch((err) => {
  console.error("Rejected with:", err.message);
});

// 2) Promise.resolve() and Promise.reject() — immediate promises
Promise.resolve('fast').then(v => console.log(v));     // fast
Promise.reject(new Error('oops')).catch(e => console.log(e.message)); // oops
// 3) Chaining Promises & returning values
new Promise((res) => res(2))
  .then((x) => x + 3) // returns 5
  .then((x) => Promise.resolve(x * 2)) // returns a promise with 10
  .then((x) => console.log("Result:", x));
// 4) Error propagation and .catch at the end
Promise.resolve()
  .then(() => {
    throw new Error("boom");
  })
  .then(() => console.log("won't run"))
  .catch((err) => console.log("Caught:", err.message));
// 5) .finally()
new Promise((res, rej) => res("ok"))
  .finally(() => console.log("Cleanup works even on success or error"))
  .then((v) => console.log("Value:", v));
// 6) Parallel with Promise.all (wait all)
const p1 = new Promise((r) => setTimeout(() => r(1), 300));
const p2 = new Promise((r) => setTimeout(() => r(2), 100));
Promise.all([p1, p2])
  .then((results) => console.log("All results:", results))
  .catch((err) => console.error("One failed:", err));
// 7) Race with Promise.race
const slow = new Promise((r) => setTimeout(() => r("slow"), 300));
const fast = new Promise((r) => setTimeout(() => r("fast"), 100));
Promise.race([slow, fast]).then((v) => console.log("Race winner:", v));
// 8) AllSettled & Any
const a = Promise.resolve(1);
const b = Promise.reject(new Error('bad'));
Promise.allSettled([a, b]).then(console.log);
// Promise.any([a, b]) resolves with first fulfilled, ignores rejections until none left (would resolve 1)

// 9) Promisify a callback (convert callback API → Promise)
// Example old-style callback: readFile(path, cb(err, data))
function fakeReadFile(path, cb) {
  setTimeout(() => {
    if (path === 'ok') cb(null, 'file-data');
    else cb(new Error('no file'));
  }, 200);
}

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fakeReadFile(path, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

readFilePromise('ok').then(console.log).catch(console.error);
// 10) Async/Await — syntactic sugar over Promises
async function load() {
  try {
    const a = await Promise.resolve(10);
    const b = await new Promise((r) => setTimeout(() => r(20), 100));
    return a + b;
  } catch (err) {
    console.error("Error:", err);
  }
}

load().then((sum) => console.log("Sum:", sum));
// 11) Sequential vs Parallel with async/await
// Sequential (waits one by one)
async function seq() {
  const a = await new Promise(r => setTimeout(() => r(1), 300));
  const b = await new Promise(r => setTimeout(() => r(2), 300));
  return a + b; // takes ~600ms
}

// Parallel (start both then await)
async function par() {
  const p1 = new Promise(r => setTimeout(() => r(1), 300));
  const p2 = new Promise(r => setTimeout(() => r(2), 300));
  const [a, b] = await Promise.all([p1, p2]);
  return a + b; // takes ~300ms
}
// 12) Microtask queue — Promise callbacks run before macrotasks
console.log("script start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
  .then(() => console.log("promise1"))
  .then(() => console.log("promise2"));

console.log("script end");
