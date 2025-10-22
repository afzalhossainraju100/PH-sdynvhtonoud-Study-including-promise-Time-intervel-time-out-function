const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data!");
    }
  }, 2000);
});

myPromise
  .then((result) => console.log(result)) // runs if resolved
  .catch((error) => console.log(error)) // runs if rejected
  .finally(() => console.log("Done!")); // runs no matter what
