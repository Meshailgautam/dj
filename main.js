song="";
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.position(450,200);
    video = createCapture(VIDEO);
    video.hide();

    

}


function draw(){
 image(video,0,0,600,500);
}

function startsong(){
    song.play();
}