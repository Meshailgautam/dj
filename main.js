song="";
lefthandwrist_x=0;
lefthandwrist_y=0;
righthandwrist_x=0;
righthandwrist_y=0;
score_leftWrist=0;
score_rightWrist=0;



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
      score_rightWrist=results[0].pose.keypoints[10].score;
      score_leftWrist=results[0].pose.keypoints[9].score;
    }
}
function draw(){
 image(video,0,0,600,500);
 fill("#FF0000");
 stroke("#FF0000");
 if(score_rightWrist > 0.2){
     circle(righthandwrist_x,righthandwrist_y,20);
 }
}

function startsong(){
    song.play();
}

