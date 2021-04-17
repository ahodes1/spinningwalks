var img, img2;
var img3, img4, img5;
var song2, button1, button2, button3, button4; 
var playingtwo = false;
var vid1, vid2, vid3, vid4;
var vid5, vid6, vid7, vid8;
var playingvid1 = false;
var playingvid4 = false;
var playingvid5 = true;
var playingvid6 = true;
var extraCanvas;
var playinground = false;

function preload() {

  soundFormats('wav', 'mp3');
  songround = loadSound('assets/Round.mp3');
  song2 = loadSound('assets/MargotBanWalk.mp3');
  img2 = loadImage('assets/AmandaMap.png');
  img = loadImage('assets/MapTwine4.jpeg');
  //img3 = loadImage('assets/TwineRemover.png');
  img4 = loadImage('assets/Wool3.png');
  img5 = loadImage('assets/CanaryMap.png');
  img6 = loadImage('assets/Wool4.png');
  
  vid6 = createVideo(['assets/ZoeMap.mp4']);
  vid6.hide();
  
  vid4 = createVideo(['assets/Seashell.mp4']);
  vid4.hide();
  
  vid3 = createVideo(['assets/MargotVideo1.mp4']);
  vid3.hide();
  //vid3.loop();
  
  vid1 = createVideo(['assets/ZoeVideo1.mp4']);
  vid1.hide();
  //vid1.loop();
  
  vid2 = createVideo(['assets/MadWalk.mp4']);
  vid2.hide();
  
  //vid5 = createVideo(['assets/MargotMapSmall.mp4']);
  //vid5.hide();
  //vid5.loop();
  
  vid8 = createVideo(['assets/ScreenCodeVid2.mp4']);
  vid8.hide();
  
  //vid7 = vid8;
  //vid7 = createVideo(['assets/ScreenCodeVid2.mp4']);
  //vid7.hide();


  
  
}

function setup() {
  createCanvas(1440, 861);    //1400, 628
  background(0, 0, 0);        //do we want a white background?
  
  
  
  imageMode(CORNER);
  tint(255, 200);
  image(img2, 690, 0);
  tint(255, 200);
  image(img, 5, 390, 682, 370);
  noTint();
  image(img4, 5, 490);
  
  textSize(40);
  fill(240, 240, 240);
  textStyle(ITALIC);
  //text('Spinning Walks', 1000, 200);
  
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
  //vid5.loop();
  //vid5.show();
  //vid5.position(640, 0);
  //vid5.size(790, 384);
  
  //vid6 = createVideo(['assets/MadMap2.mp4']);
  //vid6.loop();
  //vid6.show();
  //vid6.position(-40, 384); 
  //vid6.size(790, 384);
  
  
  //vid7 = createVideo(['assets/ScreenCodeVid2.mp4']);
  //vid7.hide();
  
  //vid8 = createVideo(['assets/ScreenCodeVid2.mov']);
  //vid8.hide();
  
  
  button1 = createButton('via');
  button1.position(320, 350);
  button1.mousePressed(toggleVideo1);
  button1.mousePressed(toggleRound);
  
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
  
  //graphics = createGraphics(0, 0, displayWidth, displayHeight);
  
}


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
    //console.log('new video A');
    
    
  } else {
    vid1.hide();
    vid2.loop();
    vid2.show();
    vid2.position(0,0);
    vid2.size(690, 384);
    
    button1 = createButton('via');
    button1.position(320, 350);
    button1.mousePressed(toggleVideo1);
    
    //console.log('New Video again');
    
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
    //console.log('new video B');
    //image(extraCanvas, 0, 0);
    
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
    //image(extraCanvas, 0, 0);
  }
  
  playingvid4 = !playingvid4;
  
}

function toggleVideo5() {
  
  if (playingvid5) {
    fill(0, 0, 0);
    rect(690, 0, 690, 384);
    tint(255, 200);
    image(img5, 690, 3);
    noTint();
    image(img6, 680, 0);
    
    
    //vid5.hide();
    //vid7.loop();
    //vid7.show();
    //vid7.position(632, 0);
    //vid7.size(807, 384);
  } 
  else {
    fill(0, 0, 0);
    rect(690, 0, 690, 384);
    
    tint(255, 200);
    imageMode(CORNER);
    image(img2, 690, 0);
    
    //textSize(40);
    //fill(240, 240, 240);
    //textStyle(ITALIC);
    //text('Spinning Walks', 1000, 200);
   // vid7.hide();
    //vid5.loop();
    //vid5.show();
    //vid5.position(640,0);
    //vid5.size(790, 384);
    
    console.log('hi there!');
  }
  playingvid5 = !playingvid5;
}

function toggleVideo6() {
  if (playingvid6) {
    //vid6.hide();
    //vid1.show();
    
    
    vid8.loop();
    vid8.show();
    vid8.position(-135, 384);
    //vid8.position(-60, 0)
    vid8.size(965, 384);
    //vid8.size(1500, 780);
    
  }
  else {
    vid8.hide();
    //vid6.loop();
    //vid6.show();
    //vid6.position(-50, 384);
    //vid6.size(790, 384);
  }
  playingvid6 = !playingvid6;
}

function toggleRound() {
  if (playinground) {
    playinground = true;
  } else {
    songround.play(0, 0, 0.01);
    songround.amp(0.2, 1.5);
    //songround.loop();
    
    playinground = true;
  }
}

//function draw() {
  //image(graphics, 20, 20);
  //graphics.fill(250, 250, 250);
  //graphics.ellipse(0, 0, 500, 500);
  
//}
