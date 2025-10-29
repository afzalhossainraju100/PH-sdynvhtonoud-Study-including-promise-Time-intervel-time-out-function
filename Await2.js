async function loadData() {
  console.log("first");
  console.log("second");
  const res = await fetch("https://api.github.com/users");
  const data = await res.json();
  console.log("data got await", data[0]);
  console.log("fourth");
  console.log("fifth");
}
// loadData();

// try{

// }
// catch(err){

const loadData2 = async ()=>{
    console.log("start");
    console.log("loading...");
    try{
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        console.log("data received", data);

    }
    catch(err){
        console.log("error happend", err);

    }
    console.log("end");
    console.log("loading finished");
}

loadData2();