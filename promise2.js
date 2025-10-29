const getData = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log('generated num', num);
    if(num > 5){
        resolve("✅ Data fetched successfully!");
    }
    else{
        reject("❌ Error fetching data!");
    }
});
getData
.then(data=> console.log(data))
.catch(error => console.log(error))