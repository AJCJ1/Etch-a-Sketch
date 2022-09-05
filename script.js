// functions

function colorChanger(number) {
    console.log(number);
}

function gridCreation() {

        var toAdd = document.createElement('div');
        toAdd.id = "gridDiv"
            for (let x = 0; x < 256; x++) {
                var theDiv = document.createElement('div');
                theDiv.id = x;
                theDiv.className = x;
                toAdd.appendChild(theDiv);
                
            }
        document.getElementById('housingDiv').appendChild(toAdd);
}
    gridCreation(); // creates the grid of 255 divs





function resetFunct() {
        location.reload();
}

// event listeners

document.getElementById('reset').addEventListener('click', resetFunct);

for (x = 0; x < 256; x++) {
    document.getElementById(x).addEventListener('mouseout', colorChanger);
}