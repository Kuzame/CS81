/**
 * Created by AdrianH on 7/28/2017.
 */

var normal = document.getElementById("Normal");
var green = document.getElementById("Green");
var winning=1;
var raceWidth=0;

var Nposition=0;
var Ninterval=0;
var Nspeed=0;
var Nwin=0;

var Gposition=0;
var Ginterval=0;
var Gspeed=0;
var Gwin=0;

function clicking() {

	raceWidth=window.innerWidth-104-7-5; // minus track image's width, body's padding, farm field's padding
	Normal();
	Green();
	// if (document.getElementById("moveButton").value=="Start") {
	// 	interval = setInterval(moving, 4);
	// 	document.getElementById("moveButton").value="Stop";
	// 	Start();
	// }
	// else {
	// 	document.getElementById("moveButton").value="Start";
	// 	Stop();
	// }
}
function starting() {
	var x = setInterval(
		function(){
			if(winning==0) {
				Stop();
				if(Gwin) console.log("Green won");
				else if (Nwin) console.log("Normal won");
				clearInterval(x);
			} else
			clicking();
		}, 1000);
}
function betting() {
	document.getElementById("balance").value -= document.getElementById("betInput").value;
	document.getElementById("betInput").max = document.getElementById("balance").value;
}

function Start() {
	//If you want the "Start" (After "Stop") to be a restart, enable/de-comment the line of code below
	//robot.style.left=0; position=0; //<<<<<<<<<<<<<<<<<<<<<<<<<<<<< de-comment if you want an actual restart after "Stop"
	Nmoving();
}

function Nmoving() {
	//if (Nposition>=raceWidth) Nposition=-119; //restart from negative for smoother transition
	Nposition++;
	if (Nposition>=raceWidth && winning) {
		winning=0; Nwin=1;
	}
	normal.style.left = Nposition + 'px';
}
function Normal() {
	Nspeed = Math.floor(Math.random()*8)+10;
	clearInterval(Ninterval);
	Ninterval = setInterval(Nmoving, Nspeed);
}

function Gmoving() {
	//if (Gposition>=raceWidth) Gposition=-119; //restart from negative for smoother transition
	Gposition++;
	if (Gposition>=raceWidth && winning) {
		winning=0; Gwin=1;
	}
	green.style.left = Gposition + 'px';
}
function Green() {
	Gspeed = Math.floor(Math.random()*9)+10;
	//if (Gspeed>15) if(Math.floor(Math.random()*2)==0) Gspeed-=10;//50% chance of running berserk for a sec
	clearInterval(Ginterval);
	Ginterval = setInterval(Gmoving, Gspeed);
}

function Stop() {
	clearInterval(Ninterval);
	clearInterval(Ginterval);
}