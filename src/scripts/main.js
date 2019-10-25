console.log("Good morning sunshine!")

// Create an HTML page that contains a text area and a button labeled Create. When the user enters in text into the text area and then clicks the create button, use a factory function that creates a new DOM component that has a border, and includes it's own delete button.

//Define "clickFunction"
const buttonHandler = () => {
    // console.log("create button was clicked")

}


// TODO: create textArea element
//grab a reference to the container the element will go in
let formEl = document.querySelector("#cardInputContainer")

//create individual components using .element
let textArea = document.createElement("textarea")
textArea.rows = 20
textArea.cols = 50
textArea.id = "input-cardtext"
console.log(textArea)

//use appendChild() to add these to container
formEl.appendChild(textArea)

// TODO: create "create" button
let buttonEl = document.createElement("button")
//name the button create
buttonEl.textContent = "Create"
//give button an id
buttonEl.id = "create-button"
console.log(buttonEl)

//add Create button to DOM
formEl.appendChild(buttonEl)
//add future event listener to Create button
buttonEl.addEventListener("click", buttonHandler)
//test
console.log(formEl)

// Insert that new component into the DOM.


// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.


// Pro tip: The card's id attribute, and the button's id attribute should share some common value. Then, when the button is clicked, find the corresponding parent DOM component. Remember the split() method on a string? That will be helpful.