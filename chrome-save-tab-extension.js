// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

// Create two variables in order to keep track of what is entered/typed:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field - make constant!

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// you can Push the value "www.awesomelead.com" to myArray when the input button is clicked 
// ~ by pushing to myLeads, but this needs to become a variable
// Push the value from the inputEl into the myLeads array 
// instead of the hard-coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"

// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");

console.log(ulEl);

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

// Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // create element
    const li = document.createElement("li");
    // set text content
    li.textContent = myLeads[i];
    // append to ul
    ulEl.append(li);
}