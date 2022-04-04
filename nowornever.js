


let counting = document.getElementById("count");


let subCount = 0;

function increment(){
    subCount = subCount + 1;
    counting.innerText = subCount;
    console.log(subCount)
}
increment()


function reset(){
    subCount = 0;
    counting.innerText = subCount;
    console.log(subCount)
}
reset()

function decrement(){
    if(subCount > 0){
    subCount = subCount - 1
   // if(subCount == 0)
    //break;
    counting.innerText = subCount;
    console.log(subCount)
    }
}
decrement()
