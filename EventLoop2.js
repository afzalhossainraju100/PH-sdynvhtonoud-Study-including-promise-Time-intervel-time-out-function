function one(){
    two();
    console.log('one');
}
function two(){
    three();
    console.log('two');
}
function three(){
    setTimeout(()=>{
        console.log('timeout in three');
    },5000);
    four();
    console.log('three');
}
function four() {
    five();
  console.log("four");
}
function five() {
    six();
    console.log("five");
}
function six() {
    setTimeout(()=>{
        console.log("timeout in six");
    },2000);

  console.log("six");
}
one();

//stack fast in last out
//Queue first in first out from the available queue