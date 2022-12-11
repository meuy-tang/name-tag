// grab DOM elements
// Document Object Model - allows us to interact with the browser using JavaScript

// set event listeners


// const nameDisplay = document.getElementById('name-display');
// console.log(nameDisplay);
// nameDisplay.textContent = 'Tiffany';
// nameDisplay.style.color = 'orange';

const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const button = document.getElementById('update-button');

button.addEventListener('click', ()=>{
    // console.log('I am clicking the button');
    const nameDisplay = document.getElementById('name-display');
    console.log(nameDisplay);
    //nameDisplay.textContent = 'Tiffany';
    nameDisplay.textContent = nameInput.value;
    nameDisplay.style.color = 'orange';
});

const pronounsDisplay = document.getElementById('pronouns-display');
const pronounsInput = document.getElementById('pronouns-input');
const submit = document.getElementById('submit-button');

submit.addEventListener('click', ()=>{
    console.log('This button works');
    const pronounsDisplay = document.getElementById('pronouns-display');
    pronounsDisplay.textContent = pronounsInput.value;
});


// const nametag = document.getElementById('nametag');
// nametag.style.backgroundColor = 'purple';