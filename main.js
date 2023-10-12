rightWristX = 0;
leftWristX = 0
difference = 0;

function setup() {
canvas = createCanvas(550, 500)
canvas.position(650, 120)
video = createCapture(VIDEO)
video.size(550, 520)
video.position(50, 120)

poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}

function modelLoaded() {
console.log("model is loaded")

}

function draw() {

background("#E0FFFF")
textSize(difference);
text('kunal',50, 200)

fill("#FF0000")
}


function gotPoses(results) {

    if (results.length > 0) 
    {
        console.log(results)
       
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }

}