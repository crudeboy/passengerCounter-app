// document.getElementById("count-el").innerText = 50

// let count = 0;

// console.log(count)

// var myAge = 72;
// console.log(myAge)

// Application pseudo code
// Initialize the count as 0
// listen for clicks on the increament button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// let count = 0

// let countEl = document.getElementById("count-el")

// console.log(countEl)
// // addEventListener.onclick=increment()
// function increment(){
//     count += 1
//     countEl.innerText = count;
//     console.log(count)
// }


// let countEl = document.getElementById("count-el")
// // console.log(countEl)
// let count = 0
// function increment() {
//     count = count + 1
//     countEl.innertext = count
//     // console.log(countEl.innertext,count)
//     // set countEl's innerText to the count
// }

let countEl = document.getElementById("count-el");
let count = 0

let saveEl = document.getElementById("save-el");


function increment() {
    count += 1
    countEl.innerText=count;
}
// ` ${count} -`
function save(){
    let passengers = count + " - ";
    saveEl.textContent += passengers;
    countEl.textContent = 0;
    count = 0;
}
//how to make the first click add only the number and subsequent clicks add "- count"