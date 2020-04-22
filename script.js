let imagedoor1=document.getElementById("door1");
let imagedoor2=document.getElementById("door2");
let imagedoor3=document.getElementById("door3");

let botDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

let beachDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

let spaceDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';


let numClosedDoor=3;

let openDoor1;
let openDoor2;
let openDoor3;

let startButton=document.getElementById('start');

imagedoor1.onclick=()=>{


    imagedoor1.src=openDoor1;
    playgame();

};


imagedoor2.onclick=()=>{


    imagedoor2.src=openDoor2;
    playgame();

};


imagedoor3.onclick=()=>{


    imagedoor3.src=openDoor3;
    playgame();
};


function randomChoreDoorgenerator(){

    let choreNum=Math.floor(Math.random()*numClosedDoor);

    if(choreNum===0){

        openDoor1=botDoorPath;
        openDoor2=spaceDoorPath;
        openDoor3=beachDoorPath;


    }
    else if(choreNum===1){

        openDoor1=beachDoorPath;
        openDoor2=botDoorPath;
        openDoor3=spaceDoorPath;

    }
    else if(choreNum===2){
        openDoor1=spaceDoorPath;
        openDoor2=beachDoorPath;
        openDoor3=botDoorPath;

    }


}

function gameover(status){

    if(status==='win'){

        startButton.innerHTML="You Win! play Again?"

    }



}


function playgame()
{


    numClosedDoor--;

    if(numClosedDoor===0){

        gameover('win');

    }



}


randomChoreDoorgenerator();