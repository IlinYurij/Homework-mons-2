let start = document.querySelector(".start")
let incr = document.querySelector(".incr")
let decr = document.querySelector(".decr")

incr.addEventListener('click' , ()=>{
    start.innerHTML++
    start.style.color = "green"
})
decr.onclick=()=>{
    if (start.innerHTML>0){
        start.innerHTML--
        start.style.color = 'red'
    }

}

let cubit = document.querySelector(".cubit")
cubit.style.height = "500px"
cubit.style.width = "500px"
cubit.style.margin = "0 auto"
cubit.style.border = ' blue 5px solid'
let X = document.querySelector(".XK")
let Y = document.querySelector(".YK")
cubit.onmousemove = (event)=>{
    X.innerHTML=event.x
    Y.innerHTML=event.y
}

let svet = document.querySelector(".svet")
let green = document.querySelector(".green")
let yellow = document.querySelector(".yellow")
let red = document.querySelector(".red")


green.style.width='100px'
green.style.height='100px'
green.style.backgroundColor='grey'
green.style.borderRadius="50%"

yellow.style.width='100px'
yellow.style.height='100px'
yellow.style.backgroundColor='grey'
yellow.style.borderRadius='50%'

red.style.width='100px'
red.style.height='100px'
red.style.backgroundColor='grey'
red.style.borderRadius='50%'
let val =prompt()
if (val==='green'){
    green.style.backgroundColor='green'
} else if (val==='yellow'){
    yellow.style.backgroundColor='yellow'
} else if (val=='red'){
    red.style.backgroundColor='red'

} else{
    alert('ERRORRRRRRRRRR')
}



