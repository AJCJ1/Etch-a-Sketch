//variables
var squaresPerSide = null;
var totalDivs = squaresPerSide * squaresPerSide;
var squarePercentage = null;
// functions
function eventHandler(pixelNumber) { /* colorChanger is nested inside eventHandler to be able to accept the argument x, the pixel number. */
console.log("eventHandler running");
    return function colorChanger () { // executed if the event occurs
    document.getElementById(pixelNumber).classList.add('filledInClass');
    console.log('colorChanger running');
    }
   
}
function sizer() { // Runs at page start, and onclick with Grid Size button. changes the sketch grid size.
    squaresPerSide = prompt('Enter a whole number between 1-25 to dictate the squares per side: ', '1-25');




      

if (squaresPerSide > 25 || squaresPerSide < 1 || squaresPerSide.isInteger == false) {
        alert('I said... Enter a whole number between 1-25! Try again.');
        sizer(); // reruns function if unacceptable char, hopefully they get it right this time...
} else {
    for(let x = 0; x < totalDivs; x++) { //removes old divs
        document.getElementById('housingDiv').removeChild(document.getElementById(x));
    }
        totalDivs = squaresPerSide*squaresPerSide // gets new gridsize num
        var housingDiv = document.getElementById('housingDiv');
        squarePercentage = ((1 / squaresPerSide) * 100) + "%";
    for (let x = 0; x < (totalDivs); x++) {
        var gridDiv = document.createElement('div');
        gridDiv.id = x;
        gridDiv.classList.add('gridDiv');
        gridDiv.addEventListener('mouseover', eventHandler(gridDiv.id));
        document.getElementById('housingDiv').appendChild(gridDiv);
        gridDiv.style.height = squarePercentage;
        gridDiv.style.width = squarePercentage;
    }
return;
}
}
    sizer(); //runs sizer to establish init size of grid

function resetFunct() { //removes class from all divs within the grid
    totalDivs = squaresPerSide*squaresPerSide;
        for (x=0; x<totalDivs; x++) {
            document.getElementById(x).classList.remove('filledInClass');
        }
}

// EVENT LISTENERS

// Reset listener
document.getElementById('reset').addEventListener('click', resetFunct);
//grid sizer
document.getElementById('gridSize').addEventListener('click', sizer);