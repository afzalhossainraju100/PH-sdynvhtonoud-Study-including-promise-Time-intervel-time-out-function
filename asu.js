console.log("first");
console.log("second");
fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
// schedule call34 after 4 seconds
setTimeout(()=>{
    console.log("third");
    console.log("fourth");
}, 4000);

console.log("fifth");
console.log("sixth");
console.log("seventh");
console.log("eighth");
console.log("ninth");
console.log("tenth");
