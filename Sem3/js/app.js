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
    document.getElementById('message').innerText  = "Надо бы похудеть"
} else if (result < 18.5) {
    document.getElementById('message').innerText  = "Иди покушай"
} else {
    document.getElementById('message').innerText  = "Все ОК :)"
}
//alert(`${x} squared equals ${result}`)
document.getElementById('result').innerText  = result
}

function greet() {
    let user = document.getElementById('userName').value
    document.getElementById('greetingMessage').innerText  = `Hello, ${user} !`
}

// function send() {
//     var message = document.getElementById('message').value;
//     (async () => {
//         var response = await fetch('chat.php', {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: 'message=${message}'
//         });
//         var answer = await response.json();
//         if (answer.status === "ok") document.getElementById('text').value = "";
//         if (answer.status === "error") document.getElementById('text').value = answer.error;
//     }
//     )();   
// }

// function get() {
//     (async () => {
//         var response = await fetch('chat.php');
//         var answer = await response.json();
//         let str = '';
//         for (i in answer.messages) {
//             str = str + <div class='message'>${answer.messages[i].message}</div>;
//         }
//     document.getElementById('messages').innerHTML = str;
//     }
//     )();
//}


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