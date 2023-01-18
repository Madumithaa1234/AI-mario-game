img = "";
marioX = 325;
marioY = 325;
noseX = 0;
noseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario01.png")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function gotposes(results){
    if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX, "noseY = " + noseY);

	}
}

function modelLoaded(){
	console.log(modelLoaded);
}


function draw() {
	game()
	background("#470a80");
	if(noseX < 300){
		marioX = marioX-1;
	}
	if(noseX >300){
		marioX = marioX+1;
	}
	if(noseY > 150){
		marioY = marioY+1;
	}
	Image(img,marioX, marioY, 40, 70);

}






