// cum e alba neagra ,

// 3 butoane , unul din butoane este castigator 
//             2 dintre ele sunt pierzatoare 

// creezi o variabila castigatoare 
// si celelalte 2 trebuie sa fie pierzatoare 
var Elem = document.getElementById("refresh")
var Elem1 = document.getElementById("refresh1")

let x =  Math.floor((Math.random()) * 3 ) + 1 
let y = Math.floor((Math.random()) * 3 ) + 1 
let z =  Math.floor((Math.random()) * 3 ) + 1 

var castigatoare =  3
function winlose(){
if((x == castigatoare) || ( y == castigatoare) || (z == castigatoare)) {
    document.getElementById("x").innerHTML = "Ai castigat! 100 $"
    console.log(x)
    console.log(y)
    console.log(z)
}
else {
    document.getElementById("x").innerHTML = "Ai pierdut!"
    console.log(x)
    console.log(y)
    console.log(z)
}
}

  Elem.addEventListener("click", function(){
    location.reload()
  })
  Elem1.addEventListener("click",function(){
    location.reload()
  })
    