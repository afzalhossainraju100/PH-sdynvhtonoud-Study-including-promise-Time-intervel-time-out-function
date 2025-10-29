function getUser(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({name: "Afzal", id: 1});
        },1000);
    });
}
function getPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            Math.random()>0.2
            ?resolve(["Post1","Post2","Post3"])
            :reject("Failed to fetch posts");
        },1500);
    })
}
function getComments(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(["Comment1","Comment2","Comment3"]);
        },800);
    })
}

Promise.all([getUser(),getPosts(),getComments()])
    .then((res)=> console.log("All data fetched:",res))
    .catch(err=> console.log("Error fetching data:",err));





// problem no 1
// Simulate fake APIs (you don't need real API calls)
// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ name: "Afzal", id: 1 }), 1000);
//   });
// }

// function getPosts() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       Math.random() > 0.2
//         ? resolve(["Post1", "Post2", "Post3"])
//         : reject("Posts API failed!");
//     }, 1500);
//   });
// }

// function getComments() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(["Good", "Nice", "Cool"]), 800);
//   });
// }

// // TODO: Use Promise.all() to call all 3 together
// // Print: 
// // - "All data loaded successfully" with results if all succeed
// // - "Error: ..." if any one fails

// Call 3 fake APIs in parallel and print results only when all succeed.
// If one fails, show the error.
// Concepts covered:
// Parallel execution, handling success & failure, Promise.all behavior.