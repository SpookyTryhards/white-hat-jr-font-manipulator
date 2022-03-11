function setup(){
canvas = createCanvas(600, 600);
canvas.position(560, 150);
video = createCapture(VIDEO);
video.size(600, 600);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);

}



function draw(){
background('#808080');

}

function preload(){

}

function modelLoaded(){
    console.log(modelLoaded);
}

function gotPoses(results){
if(results.length > 0) {
    console.log(results);
   }
}
