var song2, button1, button2, button3, button4; 
var playingtwo = false;
var vid1, vid2, vid3, vid4;
var vid5, vid6, vid7, vid8;
var playingvid1 = false;
var playingvid4 = false;
var playingvid5 = true;
var playingvid6 = true;

function preload() {

  soundFormats('wav', 'mp3');

  song2 = loadSound('assets/MargotBanWalk.mp3');
  
  
  
  vid6 = createVideo(['assets/ZoeMap.mp4']);
  vid6.hide();
  
  vid4 = createVideo(['assets/ZoeWalk2.mp4']);
  vid4.hide();
  
  vid3 = createVideo(['assets/MargotVideo1.mp4']);
  vid3.hide();
  //vid3.loop();
  
  vid1 = createVideo(['assets/ZoeVideo1.mp4']);
  vid1.hide();
  //vid1.loop();
  
  vid2 = createVideo(['assets/MadWalk.mp4']);
  vid2.hide();
  
  vid5 = createVideo(['assets/MargotMapSmall.mp4']);
  vid5.hide();
  //vid5.loop();
  
  vid7 = createVideo(['assets/ScreenCodeVid2.mp4']);
  vid7.hide();

  vid8 = createVideo(['assets/ScreenCodeVid2.mp4']);
   vid8.hide();
  //vid6.loop();
}

function setup() {
  createCanvas(1400, 768);
  background(0, 0, 0);
  //img2.position(300, 200);
  //img2.size(100, 100);

  //vid1 = createVideo(['assets/ZoeVideo1.mp4']);
  vid1.loop();
  vid1.show();
  vid1.position(0, 0);
  vid1.size(690, 384);
  
  //vid2 = createVideo(['assets/MadWalk.mp4']);
  //vid2.hide();
  
  //vid3 = createVideo(['assets/MargotVideo1.mp4']);
  vid3.loop();
  vid3.show();
  vid3.position(640, 384);
  vid3.size(790, 384);
  
  //vid4 = createVideo(['assets/ZoeWalk2.mp4']);
  //vid4.hide();
  
  //vid5 = createVideo(['assets/ZoeMap.mov']);
  vid5.loop();
  vid5.show();
  vid5.position(640, 0);
  vid5.size(790, 384);
  
  //vid6 = createVideo(['assets/MadMap2.mp4']);
  vid6.loop();
  vid6.show();
  vid6.position(-40, 384); 
  vid6.size(790, 384);
  
  
  //vid7 = createVideo(['assets/ScreenCodeVid2.mp4']);
  //vid7.hide();
  
  //vid8 = createVideo(['assets/ScreenCodeVid2.mov']);
  //vid8.hide();
  
  
  button1 = createButton('via');
  button1.position(320, 350);
  button1.mousePressed(toggleVideo1);
  
  button2 = createButton('entre');
  button2.position(960, 350);
  button2.mousePressed(toggleSound2);
  button2.mousePressed(toggleVideo5);
  
  button3 = createButton('through');
  button3.position(320, 734);
  button3.mousePressed(toggleVideo6);
  
  button4 = createButton('between');
  button4.position(960, 734);
  button4.mousePressed(toggleVideo4);
  
  
}

//function draw() {
 
  
//}

function toggleSound2() {
  if (playingtwo) {
    

    
  } else {
    //song2.fade(0.4, 1);
    song2.play(0, 0, 0.01);
    song2.amp(0.1, 1.5);
    //song2.loop();
  }
  playingtwo = !playingtwo;
}  

function toggleVideo1() {
  
  if (playingvid1) { 
    
    //vid1 = createVideo(['assets/Madwalk1.mp4']);
    vid2.hide();
    vid1.loop();
    vid1.show();
    vid1.position(0, 0);
    vid1.size(690, 384);
  
  
    button1 = createButton('via');
    button1.position(320, 350);
    button1.mousePressed(toggleVideo1);
    console.log('new video A');
    
    
  } else {
    vid1.hide();
    vid2.loop();
    vid2.show();
    vid2.position(0,0);
    vid2.size(690, 384);
    
    button1 = createButton('via');
    button1.position(320, 350);
    button1.mousePressed(toggleVideo1);
    
    console.log('New Video again');
    
  }
  
playingvid1 = !playingvid1; 

}

function toggleVideo4() {
  
  if (playingvid4) {
    //vid4 = createVideo(['assets/MargotVideo1.mp4']);
    vid4.hide();
    vid3.loop();
    vid3.show();
    vid3.position(640, 384);
    vid3.size(790, 384);
  
    button4 = createButton('between');
    button4.position(960, 734);
    button4.mousePressed(toggleVideo4);
    console.log('new video B');
  
  }
  else {
    vid3.hide();
    //vid4 = createVideo(['assets/ZoeWalk2.mp4']);
    vid4.loop();
    vid4.show();
    vid4.position(640, 384);
    vid4.size(790, 384);
    
    button4 = createButton('between');
    button4.position(960, 734);
    button4.mousePressed(toggleVideo4);
    
    console.log('newVideoB again');
  }
  
  playingvid4 = !playingvid4;
}

function toggleVideo5() {
  
  if (playingvid5) {
    vid5.hide();
    vid7.loop();
    vid7.show();
    vid7.position(640, 0);
    vid7.size(800, 384);
  } 
  else {
    vid7.hide();
    vid5.loop();
    vid5.show();
    vid5.position(640,0);
    vid5.size(790, 384);
    
    console.log('hi there!');
  }
  playingvid5 = !playingvid5;
}

function toggleVideo6() {
  if (playingvid6) {
    vid6.hide();
    vid8.loop();
    vid8.show();
    vid8.position(-50, 384);
    vid8.size(790, 384);
    
  }
  else {
    vid8.hide();
    vid6.loop();
    vid6.show();
    vid6.position(-50, 384);
    vid6.size(790, 384);
  }
  playingvid6 = !playingvid6;
}
