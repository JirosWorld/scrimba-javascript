// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

// Create two variables in order to keep track of what is entered/typed:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field - make constant!

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// you can Push the value "www.awesomelead.com" to myArray when the input button is clicked 
// // by pushing to myLeads, but this needs to become a variable
// Push the value from the inputEl into the myLeads array 
// instead of the hard-coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
