song="";
lefthandwrist_x=0;
lefthandwrist_y=0;
righthandwrist_x=0;
righthandwrist_y=0;




function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.position(450,200);
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);

    

}


function modelloaded(){
    console.log("Model Is Loaded");


}

function gotposes(results){
    if(results.length > 0){
      console.log(results);

      righthandwrist_x=results[0].pose.rightWrist.x;
      righthandwrist_y=results[0].pose.rightWrist.y;
      lefthandwrist_x=results[0].pose.leftWrist.x;
      lefthandwrist_y=results[0].pose.leftWrist.y;
    }
}
function draw(){
 image(video,0,0,600,500);
}

function startsong(){
    song.play();
}

