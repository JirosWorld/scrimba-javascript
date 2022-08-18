// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let fname = "Jiro";
let greeting = "Welcome back ";
// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + fname;
welcomeEl.innerText += "👋";


let countEl = document.getElementById("count-el");
//the DOM: javascripts Objectlike representation of the HTML structure
console.log(countEl);
// 4. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
console.log(saveEl);


// intialize the count as 0
let count = 0;

// listen for clicks on the increment button
function increment() {
    //count = count + 1;
    count += 1;
    // change the count-el in the HTML to reflect the new count
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - ";
    // 5. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 6. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr;
    // NB: Make sure to not delete the existing content of the paragraph
    console.log("old: " + count);
    count = 0;
    console.log("reset: " + count);
    countEl.textContent = count;
}