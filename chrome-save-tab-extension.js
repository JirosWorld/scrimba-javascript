// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

// Create two variables in order to keep track of what is entered/typed:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field - make constant!

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked!")
})

