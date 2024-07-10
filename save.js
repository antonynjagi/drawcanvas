var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);

function saveImage() {
    var canvas = document.getElementById('canvas');
    var offScreenCanvas = document.createElement('canvas');
    offScreenCanvas.width = canvas.width;
    offScreenCanvas.height = canvas.height;
    var offScreenCtx = offScreenCanvas.getContext('2d');

    offScreenCtx.fillStyle = '#fff';
    offScreenCtx.fillRect(0, 0, offScreenCanvas.width, offScreenCanvas.height);
    offScreenCtx.drawImage(canvas, 0, 0);

    var data = offScreenCanvas.toDataURL('image/png');
    var filename = 'image_' + Date.now() + '.png';

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var blob = new Blob([request.response], { type: 'image/png' });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clear the canvas after saving
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    };

    request.open('POST', 'save.php', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.responseType = 'blob';
    request.send('img=' + encodeURIComponent(data) + '&filename=' + encodeURIComponent(filename));
}
