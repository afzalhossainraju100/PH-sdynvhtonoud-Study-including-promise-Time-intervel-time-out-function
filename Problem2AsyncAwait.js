function fakeRequest(url, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`✅ Fetched from ${url} in ${time}s`);
    }, time * 1000);
  });
}

// Sequential Execution
async function runSequential() {
  console.time("Sequential Time");

  const res1 = await fakeRequest("user", 2);
  console.log(res1);

  const res2 = await fakeRequest("posts", 3);
  console.log(res2);

  const res3 = await fakeRequest("comments", 1);
  console.log(res3);

  console.timeEnd("Sequential Time");
}

// Parallel Execution
async function runParallel() {
  console.time("Parallel Time");

  const promises = [
    fakeRequest("user", 2),
    fakeRequest("posts", 3),
    fakeRequest("comments", 1),
  ];

  const results = await Promise.all(promises);
  console.log(results);

  console.timeEnd("Parallel Time");
}

runSequential().then(runParallel);
