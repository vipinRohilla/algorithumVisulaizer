function disableSearchingBtn(){
    document.querySelector(".linearSearch").disabled = true;
    document.querySelector(".binarySearch").disabled = true;
}

function enableSearchingBtn(){
    document.querySelector(".linearSearch").disabled = false;
    document.querySelector(".binarySearch").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arr_num").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#arr_num").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Selecting size slider from DOM
let numSize = document.querySelector('#arr_num');

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});


// Creating array to store randomly generated numbers
let numArray = [];

// Helper function to delete all the previous bars so that new can be added
function deleteChildNum(){
    const num = document.querySelector(".boxes");
    num.innerHTML = ''
}

function createNewNumArray(noOfNums = 20){
    deleteChildNum();
    numArray = [];
    for (let i = 0; i < noOfNums; i++) {
        numArray.push(Math.floor(Math.random() * 250) + 10);
    }

    // select the div .boxes element
    const bars = document.querySelector(".boxes");

    // create multiple element div using loop and adding class 'box'
    for (let i = 0; i < noOfNums; i++) {
        const bar = document.createElement("div");
        bar.classList.add('box');
        bar.innerHTML = i+1;
        bars.appendChild(bar);
    }
}

// Call to display bars right when you visit the site
createNewNumArray();

numSize.addEventListener('input', function(){
    createNewNumArray(parseInt(numSize.value));
})