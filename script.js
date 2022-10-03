//variables
var xAxis = null;
var yAxis = null;
var totalDivs = xAxis * yAxis;

// functions
function eventHandler(pixelNumber) { /* colorChanger is nested inside eventHandler to be able to accept the argument x, the pixel number. */
console.log("eventHandler running");
    return function colorChanger () { // executed if the event occurs
    document.getElementById(pixelNumber).classList.add('filledInClass');
    console.log('colorChanger running');
    }
   
}
function sizer() { // Runs at page start, and onclick with Grid Size button. changes the sketch grid size.
for(let x = 0; x < totalDivs; x++) { //removes old divs
document.getElementById('housingDiv').removeChild(document.getElementById(x));
}
xAxis = prompt('Enter the grid width: ', 'Between 1-16');
yAxis = prompt('Enter the grid height: ', 'Between 1-16');
totalDivs = xAxis*yAxis; // gets new gridsize num

var housingDiv = document.getElementById('housingDiv');

for (let x = 0; x < (totalDivs); x++) {
    var gridDiv = document.createElement('div');
    gridDiv.id = x;
    gridDiv.classList.add('gridDiv');
    gridDiv.addEventListener('mouseover', eventHandler(gridDiv.id));
    document.getElementById('housingDiv').appendChild(gridDiv);
}    
return;
}
    sizer(); //runs sizer to establish init size of grid

/*

1. change markup to adapt individual boxes to grid full size.

*/

function resetFunct() {
console.log('resetfunct');
totalDivs = xAxis*yAxis;
    for (x=0; x<totalDivs; x++) {
            document.getElementById(x).classList.remove('filledInClass');
    }
}

// EVENT LISTENERS

// Reset listener
document.getElementById('reset').addEventListener('click', resetFunct);
//grid sizer
document.getElementById('gridSize').addEventListener('click', sizer);