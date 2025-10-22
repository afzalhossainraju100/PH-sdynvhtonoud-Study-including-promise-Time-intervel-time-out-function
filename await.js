// Function that returns a promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Data loaded!");
    }, 2000);
  });
}

// Using async / await
async function getData() {
  console.log("⏳ Fetching data...");
  const result = await fetchData(); // waits until promise is resolved
  console.log(result);
  console.log("🎉 Done!");
}

getData();





//example using fetch with async/await also use try catch for error handling
async function run() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const result = await data.json();
    console.log(result);
  } catch (err) {
    console.log("❌ Error:", err);
  }
}
run();
