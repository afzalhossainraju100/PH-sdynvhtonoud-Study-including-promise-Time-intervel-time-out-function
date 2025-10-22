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

//real time problem using fetch
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())         // convert response to JSON
  .then(data => console.log(data)) // handle success
  .catch(err => console.log(err)); // handle error
