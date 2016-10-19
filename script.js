var c = document.querySelector('#c');
var ctx = c.getContext('2d');

var image = new Image();



image.onload = function() {
    console.log('loaded image');
    ctx.drawImage(image, 0, 0, 100, 100);
    var savedImage = c.toDataURL();
    greenBars();
    grayscaleImage();
};

// filled/outlined rectangle
ctx.fillRect(100, 100, 100, 100);
ctx.strokeRect(200, 200, 50, 50);

// free draw basically
ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(300, 300);
ctx.lineTo(300, 250);
ctx.lineTo(250, 250);
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
// have to set the styles before calling the function
ctx.stroke();
ctx.fill();
// set the text style
ctx.font = "bold 36px impact";
// makes the fill text with the color and then the outline color
function writeUpperText() {
    var string;
    string = document.getElementById('upperText').value;
    ctx.strokeText(string, 148, 43);
}

function writeLowerText() {
    var string;
    string = document.getElementById('lowerText').value;
    ctx.strokeText(string, 43, 300);
}

// makes green bars using imageData

function greenBars() {
    var imageData = ctx.getImageData(0, 0, 100, 100);

    for (var i = 0; i < imageData.data.length; i += 40) {
        imageData.data[i] = 0; // red
        imageData.data[i + 1] = 255; // green
        imageData.data[i + 2] = 0; // blue
        imageData.data[i + 3] = 255; // is alpha (transparency)
    }
    //redraw the image with green bars
    ctx.putImageData(imageData, 100, 0);
}

// makes a grayscale image

function grayscaleImage() {
    var imageData = ctx.getImageData(0, 0, 100, 100);

    for (var i = 0; i < imageData.data.length; i += 4) {
        var grayscale = imageData.data[i] * 0.3 + imageData.data[i + 1] * 0.59 + imageData.data[i + 2] * 0.11;
        imageData.data[i] = grayscale; // red
        imageData.data[i + 1] = grayscale; // green
        imageData.data[i + 2] = grayscale; // blue
        imageData.data[i + 3] = 255; //is alpha
    }
    //redraw the image in black & white
    ctx.putImageData(imageData, 0, 100);
}

function clearCanvas() {
    if (confirm('Are you sure you want to clear the canvas?')) {
        ctx.clearRect(0, 0, c.width, c.height);
        document.querySelector('.user-inputs').style.display = 'none';
    } else {
        // Do nothing!
    }
}

// moves all elements drawn after it 20 pixels to the rights and 40 pixels down.
// ctx.translate(20, 40);

// make all values twice as large on the x axis and three times as large on the y axis.
//ctx.scale(2, 3);

// var radians = degrees * (Math.PI / 180);
// ctx.rotate(radians);

image.src = 'cute.jpg';
