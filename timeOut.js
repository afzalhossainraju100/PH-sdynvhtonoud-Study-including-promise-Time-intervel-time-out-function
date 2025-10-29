console.log("Start of script");
console.log("Scheduling a timeout...");
const timeoutId = setTimeout(()=>{
    console.log("Timeout executed after 3 seconds");
    console.log("End of timeout");
    if(timeoutId>=2){
        clearTimeout(timeoutId);
        console.log("Timeout cleared");
    }
}, 3000);
console.log("Timeout scheduled with ID:", timeoutId);
console.log("end of script");
