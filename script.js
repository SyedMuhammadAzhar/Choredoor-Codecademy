let imagedoor1=document.getElementById("door1");
let imagedoor2=document.getElementById("door2");
let imagedoor3=document.getElementById("door3");

let botDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

let beachDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

let spaceDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

imagedoor1.onclick=()=>{


    imagedoor1.src=botDoorPath;

}


imagedoor2.onclick=()=>{


    imagedoor2.src=beachDoorPath;

}


imagedoor3.onclick=()=>{


    imagedoor3.src=spaceDoorPath;

}