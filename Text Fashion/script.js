var prTxt = document.getElementById('previewTxt');
function changeTxt() {
    prTxt.innerHTML = document.getElementById('name').value;
}
function changeTxtColor(){
    prTxt.style.color = 'hsl('+document.getElementById('hue').value+','+document.getElementById('saturation').value+'%,'+document.getElementById('lightness').value+'%)';
}
function changeBgColor(){
    prTxt.style.backgroundColor = 'hsl('+document.getElementById('bgHue').value+','+document.getElementById('bgSaturation').value+'%,'+document.getElementById('bgLightness').value+'%)';
}

function changeSize(){
    prTxt.style.fontSize = document.getElementById('size').value +'px';
}
function changeShadow(){
    prTxt.style.textShadow = document.getElementById('shadowX').value+'px '+document.getElementById('shadowY').value+'px '+document.getElementById('shadowBlur').value+'px '+"black";
}