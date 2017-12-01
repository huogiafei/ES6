'use strict';
// AJAX
var someUrl = ''
var xhr = new XMLHttpRequest()
xhr.open('GET',someUrl)
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
    let arrayBuffer = xhr.response
}

xhr.send()

xhr.onreadystatechange = function () {
    if (req.readyState === 4 ) {
        var arrayResponse = xhr.response;
        var dataView = new DataView(arrayResponse);
        var ints = new Uint32Array(dataView.byteLength / 4);
        xhrDiv.style.backgroundColor = "#00FF00";
        xhrDiv.innerText = "Array is " + ints.length + "uints long";
    }
}

//Canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
var uint8ClampedArray = imageData.data;

//WebSocket

//Fetch API

//File API


