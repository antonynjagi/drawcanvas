var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple', 'magenta', 'brown'];
var swatches = document.getElementsByClassName('swatch');
var colorSelect = document.getElementById('colorSelect');

// Create color swatches for larger screens
for (var f = 0, g = colors.length; f < g; f++) {
    var swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = colors[f];
    swatch.addEventListener('click', setSwatch);
    document.getElementById('colors').appendChild(swatch);
}

// Populate the combo box for smaller screens
for (var f = 0, g = colors.length; f < g; f++) {
    var option = document.createElement('option');
    option.value = colors[f];
    option.textContent = colors[f];
    colorSelect.appendChild(option);
}

colorSelect.addEventListener('change', function() {
    setColor(colorSelect.value);
});

function setSwatch(e) {
    var swatch = e.target;
    setColor(swatch.style.backgroundColor);
    swatch.className += ' active';
}

function setColor(color) {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.fillStyle = color;
    context.strokeStyle = color;

    var active = document.getElementsByClassName('active')[0];
    if (active) {
        active.className = 'swatch';
    }
}

// Set initial color
setSwatch({target: document.getElementsByClassName('swatch')[4]});
colorSelect.value = 'yellow';
setColor('yellow');
