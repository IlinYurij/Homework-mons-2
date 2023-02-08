
// var arr = [10, 20, 30, 50, 235, 3000];
// for (i of arr) {
//     if(String(i)[0]==='1' || String(i)[0]==='2' || String(i)[0]==='5'){
//         console.log(i);
//     }
// }

// for (var i=20 ; i > 0 ; i--){
//     console.log(i);
// }
var input=prompt('Введите цвет')
var obj={red:"stop" , green: "go" , yellow: 'ready'}
if (input in obj){
    alert(obj[input]);
} else {
    alert ('error,write correct');
}
