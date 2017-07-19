/**
 * Created by AdrianH on 7/18/17.
 */
//Simply run the "test2.html", then click the "Start" button
    //Read the comment below if you want a different method of "Stop"ping

var robot = document.getElementById("theRobot");
var position=0;
var interval=0;

function clicking() {
    if (document.getElementById("moveButton").value=="Start") {
	    interval = setInterval(moving, 4);
        document.getElementById("moveButton").value="Stop";
        Start();
    }
    else {
        document.getElementById("moveButton").value="Start";
        Stop();
    }
}

function Start() {
	//If you want the "Start" (After "Stop") to be a restart, enable/de-comment the line of code below
	//robot.style.left=0; position=0; //<<<<<<<<<<<<<<<<<<<<<<<<<<<<< de-comment if you want an actual restart after "Stop"
    moving();
}

function moving() {
    if (position>=window.innerWidth) position=-119; //restart from negative for smoother transition
    position++;
    robot.style.left = position + 'px';
}

function Stop() {
    clearInterval(interval); //Technically a "pause" here.
}