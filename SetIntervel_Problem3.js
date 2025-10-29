let count = 10;

const id = setInterval(()=>{
    --count;
    console.log(`Tick ${count}: ${new Date().toLocaleTimeString()}`);

    if(count <= 0){
        clearInterval(id);
        console.log('Stopped.');
    }
}, 1000);