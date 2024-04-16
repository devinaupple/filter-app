noseX=0;
noseY=0;
function preload(){
clownose=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup(){

canvas=createCanvas(300,300);
canvas.center();
Video=createCapture(VIDEO);
Video.size(300,300);
Video.hide();
posNET=ml5.poseNet(Video,modlLoaded);
posNET.on('pose',gotpoes);
}
function modlLoaded(){
console.log("PoseNET is initialized");
}
function draw(){
image(Video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
//(noseX,noseY,20);
image(clownose,noseX,noseY,40,40);
}
function take_snapshot(){
save('myFilterImange.png');
}
function gotpoes(results){
    if(results.length>0)
    {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    noseX=noseX-20;
    noseY=noseY+10;
    console.log("nose x"+noseX);
    console.log("nose y"+noseY);
    }
}
