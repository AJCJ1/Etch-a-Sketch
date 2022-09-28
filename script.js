//Variables

var toAdd = document.createElement('div');
var xAxis = null;
var yAxis = null;
var totalDivs = 256;

if (xAxis || yAxis == null) {
totalDivs == 256;
}

// functions
function eventHandler(x) { /* colorChanger is nested inside eventHandler to be able to accept the argument x, the pixel number. */
var pixelNum = x;
console.log("eventHandler running");
    return function colorChanger () { // executed if the event occurs
    document.getElementById(x).setAttribute('style', 'background-color: rgb(255, 204, 0)');
    console.log("colorChanger running");
    }
   
}

function sizer() { // changes the size of the grid
var xAxis = prompt('Enter the grid width: ', 'Between 1-16');
var yAxis = prompt('Enter the grid height: ', 'Between 1-16');
totalDivs = xAxis * yAxis;
var newToAdd = document.createElement('div');
    newToAdd.id = "gridDiv"
    for (let x = 0; x < totalDivs; x++) {
        var inDiv = document.createElement('div');
        inDiv.id = x;
        inDiv.className = 'pixel';
        newToAdd.appendChild(inDiv);
    }
document.getElementById('housingDiv').appendChild(newToAdd);    
return;
}
    sizer(); //runs sizer to establish init size of grid

/*

at the moment i can re-create the size of the grid

it will create boxes to the number of height times width

i need those to be ordered into 100% of the bigger box - this involves a changed markup - i need a certain number of heightXwidth which is hard when grid created via numbers not table


i also need the colorchange function to work whenever the size changes**



1. change markup to adapt individual boxes to grid full size.

2. change color funct to work regardless of gridsize


problem im trying to solve is twofold. 
1) how to change grid size and colorchanger function still works. when you initially run gridchanger function on page startup, it works! but when you change it again it doesn't.
2) how to change grid size and markup shows grid as a box rather than a barcode.

*/

function resetFunct() {
if (xAxis || yAxis == null) {
    totalDivs = 256;
} else {
    totalDivs = xAxis * yAxis;
}
    for (x=0; x<totalDivs; x++) {
            document.getElementById(x).setAttribute('style', 'background-color: cornflowerblue');
    }
}

// EVENT LISTENERS

// Reset listener
document.getElementById('reset').addEventListener('click', resetFunct);
//Color Changer
for (x=0; x<totalDivs; x++) {
    document.getElementById(x).addEventListener('mouseout', eventHandler(x));
}

document.getElementById('gridSize').addEventListener('click', sizer)

function testFunction() {
    return document.getElementById('30').setAttribute('style', 'background-color: red');
}
/*


Add gridSize function to change size on a prompt

prompt called on gridSize click
prompt opens, has height and width textbox
information gets put into function

table instead of divs to eliminate need to style
grid.

either max amount of elements per width/height changes and boxes fluid size
or num changes with sizing formula per num of boxes

either way, with gridSize being changed, the size of the boxes will change. i want the size of the main housingDiv to remain static.



*/