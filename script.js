// functions

function eventHandler(x) {
var pixelNum = x;
console.log(pixelNum);

    return function colorChanger () { // executed if the event occurs
    document.getElementById(pixelNum).setAttribute('style', 'background-color: rgb(255, 204, 0)');

    }

}

function gridCreation() {

        var toAdd = document.createElement('div');
        toAdd.id = "gridDiv"
            for (let x = 0; x < 256; x++) {
                var theDiv = document.createElement('div');
                theDiv.id = x;
                theDiv.className = 'pixel';
                toAdd.appendChild(theDiv);
                
            }
        document.getElementById('housingDiv').appendChild(toAdd);
}
    gridCreation(); // creates the grid of 255 divs





function resetFunct() {
    for (x=0; x<256; x++) {
            document.getElementById(x).setAttribute('style', 'background-color: cornflowerblue');
    }
}

// event listeners

document.getElementById('reset').addEventListener('click', resetFunct);

for (x=0; x<256; x++) {
    document.getElementById(x).addEventListener('mouseout', eventHandler(x));
}


/*

got rid of the queryselectorall because someone said just add them using a loop.

so they all have an event listener that runs colorchanger



now i want each one to have an event listener to
run the colorChanger function.

alternatively, i could change their class to
something with a different markup... easier.
*/