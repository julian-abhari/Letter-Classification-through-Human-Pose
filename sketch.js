// let video;
// let poseNet;
// let poseArray;
// let skeleton;
// let targetLabel;
// let state = 'waiting';

let brain;

function setup() {
  createCanvas(640, 480);
  let options = {
    inputs: 34,
    outputs: 4,
    task: 'classification',
    debug: true
  }
  brain = ml5.neuralNetwork(options);
  brain.loadData('love.json', dataReady);
}

function dataReady() {
  brain.normalizeData();
  brain.train({epochs: 50}, finished);
}

function finished() {
  console.log('model trained');
  brain.save();
}

// function setup() {
// 	createCanvas(640, 480);
// 	video = createCapture(VIDEO);
// 	video.hide();
// 	poseNet = ml5.poseNet(video, modelLoaded);
// 	poseNet.on('pose', gotPoses);
// 	let options = {
//     inputs: 34,
//     outputs: 4,
//     task: 'classification',
//     debug: 'true'
//   }
//   brain = ml5.neuralNetwork(options);
//   brain.loadData('LOVE.json', dataReady);
// }
//
// function dataReady() {
//   //brain.normalizeData();
//   brain.train({epochs: 50}, finished);
// }
//
// function finished() {
// 	console.log('model trained');
// 	brain.save();
// }
//
// function modelLoaded() {
// 	console.log("poseNet ready");
// }
//
// function gotPoses(poses) {
// 	if (poses.length > 0) {
// 		poseArray = poses[0].pose;
// 		skeleton = poses[0].skeleton;
// 		if (state = 'collecting') {
// 			let inputs = [];
// 			for (let i = 0; i < skeleton.length; i += 1) {
// 				let x = skeleton[i][0];
// 				let y = skeleton[i][1];
// 				inputs.push(x);
// 				inputs.push(y);
// 			}
// 			let target = [targetLabel];
// 			brain.addData(inputs, target);
// 		}
// 	}
// }
//
// function keyPressed() {
// 	if (key == 'S') {
// 		brain.saveData();
// 	} else {
// 		targetLabel = key;
// 		console.log(targetLabel);
// 		setTimeout(function() {
// 			console.log('collecting');
// 			state = 'collecting';
// 			setTimeout(function() {
// 				console.log('stopped collecting');
// 				state = 'waiting';
// 			}, 10000);
// 		}, 10000);
// 	}
// }
//
// function draw() {
// 	translate(video.width, 0);
// 	scale(-1, 1);
// 	image(video, 0, 0);
//
// 	if (poseArray) { // Checking if the poseArray exists
// 		fill(100, 0, 200);
// 		let eyeLeft = poseArray.leftEye;
// 		let eyeRight = poseArray.rightEye;
// 		let distance = dist(eyeLeft.x, eyeRight.x, eyeLeft.y, eyeRight.y);
//
// 		for (let i = 0; i < poseArray.keypoints.length; i += 1) {
// 			let x = poseArray.keypoints[i].position.x;
// 			let y = poseArray.keypoints[i].position.y;
// 			ellipse(x, y, 16, 16);
// 		}
//
// 		for (let i = 0; i < skeleton.length; i += 1) {
// 			let a = skeleton[i][0];
// 			let b = skeleton[i][1];
// 			strokeWeight(2);
// 			stroke(255);
// 			line(a.position.x, a.position.y, b.position.x, b.position.y);
// 		}
// 	}
//}
