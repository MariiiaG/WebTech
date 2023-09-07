// let name1 = prompt("Enter your name :")
// let str = `Hello, ${name1} !`
// alert(str) 

function app() {
//let x = parseInt(prompt("Enter x :"))
let kilos = parseInt(document.getElementById('weight').value)
let cms = parseInt(document.getElementById('height').value)
let meters = cms / 100

const result = kilos / (meters * meters)

if (result > 25) {
    document.getElementById('message').innerText  = "Overweight"
} else if (result < 18.5) {
    document.getElementById('message').innerText  = "Underweight"
} else {
    document.getElementById('message').innerText  = "Normal weight"
}
//alert(`${x} squared equals ${result}`)
document.getElementById('result').innerText  = result
}

function greet() {
    let user = document.getElementById('userName').value
    document.getElementById('greetingMessage').innerText  = `Hello, ${user} !`
}

function send() {
    document.getElementById('chatMessage').value = "";
    console.log("Display chat message")
}


// x = 234 
// switch(true) { // example of boolean switch-case scenario
//     case o :
//         alert("x === 0")
//         break
//     case (x > 0 && x <= 100) :
//         alert("x is within 0-100 range")
//         break
//     case (x > 100) :
//         alert("x greater than 100")
//         break
// }