
window.onload = choosePic;

var myPix = new Array("images/foto1.png","images/foto2.png","images/foto3.png","images/foto4.png");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}

