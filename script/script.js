let [secound, minute, hour] = [0, 0, 0]         // initial value
let time = document.getElementById("time")
let timer = null    

// to make seconds and minutes doesn't up to 60
function stopWatch(){  
    secound++
    if(secound === 60){
        secound = 0
        minute++
        if(minute === 60){
            minute = 0
            hour++
        }
    }
// to add 0 on the left to show like 00:00:00  not 0:0:0
let h = hour < 10 ? "0" + hour : hour;
let m = minute < 10 ? "0" + minute : minute;
let s = secound < 10 ? "0" + secound : secound;

    time.innerHTML = h + ":" + m + ":" + s;
}

// play watch
function watchPlay(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopWatch,1000)
}

// stop watch
function watchStop(){
    clearInterval(timer);
}

// reset watch
function watchReset() {
    clearInterval(timer);
    [secound, minute, hour] = [0, 0, 0];
    time.innerHTML = "00:00:00";
}


let play = document.getElementById("play")
let pause = document.getElementById("pause")
let restart = document.getElementById("restart")
let stop = document.getElementById("stop")

// event on the buttons
play.addEventListener("click",()=>{
    watchPlay()
    play.style.display = ("none")
    pause.style.display = ("block")
})

pause.addEventListener("click",()=>{
    watchStop()
    pause.style.display = ("none")
    play.style.display = ("block")
})

restart.addEventListener("click",()=>{
    watchReset()
    play.style.display = ("block")
    pause.style.display = ("none")
})

stop.addEventListener("click",()=>{
    saveTimeList()
    watchStop()
    play.style.display = ("block")
    pause.style.display = ("none")
})

let lists = document.getElementById("lists")
let saveTime = document.getElementById("saveTime")

//make container to save time
function saveTimeList(){
    if (hour > 0 || minute > 0 || secound > 0) {    // check the watch play
        let li = document.createElement("li")
        li.innerHTML = `Saved Time: ${time.innerHTML}` 
        lists.appendChild(li)
    }
}

//clear container save time
let clear = document.getElementById("clear")
clear.addEventListener("click",()=>{
    lists.innerHTML = ""
})


