// functions

function eventHandler(x) {
var pixelNum = x;


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


function sizer() {
    document.getElementById('slidersDiv').style.display = 'flex';
}

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

document.getElementById('gridSize').addEventListener('click', sizer);
/*


I now want the grid size button to display an ALERT
with two <input type='range'>


*/