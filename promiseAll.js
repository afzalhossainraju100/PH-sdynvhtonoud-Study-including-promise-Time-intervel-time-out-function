const getData1 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("generated num", num);
  if (num > 5) {
    resolve("✅ Data fetched successfully!1");
  } else {
    reject("❌ Error fetching data!1");
  }
});
const getData2 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("generated num", num);
  if (num > 5) {
    resolve("✅ Data fetched successfully!2");
  } else {
    reject("❌ Error fetching data!2");
  }
});

const getData3 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("generated num", num);
  if (num > 5) {
    resolve("✅ Data fetched successfully!3");
  } else {
    reject("❌ Error fetching data!3");
  }
});

Promise.all([getData1, getData2, getData3])
  .then(res => console.log('All data:', res))
  .catch(err => console.log('One of the promises failed:', err));
