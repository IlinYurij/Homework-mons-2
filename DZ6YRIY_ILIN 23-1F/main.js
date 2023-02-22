const inp = document.querySelector('input')
const result = document.querySelector('h4')


let text= ' '
inp.oninput=()=>{
    let arr = []
    arr.push(inp.value.split('').reverse().join(''))

    arr.forEach(element => {
        result.innerHTML=''
        let span = document.createElement('span')
        span.innerHTML=element
        result.append(span)
    });
}