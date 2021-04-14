var img1, img2, img3, img4, song1, song2, song3, song4, button1, button2, button3, button4; 
var playingone = false;
var playingtwo = false;
var playingthree = false;
var playingfour = false;
var line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14;
var vid1, vid2, vid3, vid4;
//var flagA = 1;
//var flagB = 1;
var playingvid1 = false;
var playingvid4 = false;

function preload() {
  //img1 = loadImage("assets/AmandaCollab.jpg");            //Could also make these automatic playing videos with no sound until press play
  //img2 = loadImage("assets/MadeleineCollab.jpg");        //Each image or video must be 640x384 pixels
  //img3 = loadImage("assets/MargotCollab.jpg");
  //img4 = loadImage("assets/ZoeCollab.jpg");
  //img4 = loadImage('assets/MadMap.mov');
  
  soundFormats('wav', 'mp3');
  //song1 = loadSound('assets/Amandaaudio.mp3');
  song2 = loadSound('assets/MargotBanWalk.mp3');
  song3 = loadSound('assets/MargotBanWalk.mp3');
  //song4 = loadSound('assets/MargotBanWalk.wav');
  
  
}

function setup() {
  createCanvas(1400, 768);
  background(0, 0, 0);


  vid1 = createVideo(['assets/ZoeVideo1.mp4']);
  vid1.loop();
  vid1.position(0, 0);
  vid1.size(690, 384);
  
  vid2 = createVideo(['assets/MadWalk.mp4']);
  vid2.hide();
  
  vid3 = createVideo(['assets/MargotVideo1.mp4']);
  vid3.loop();
  vid3.position(640, 384);
  vid3.size(790, 384);
  
  vid4 = createVideo(['assets/ZoeWalk2.mp4']);
  vid4.hide();
  
  //vid3 = createVideo(['assets/MadeleineVideoSmall.mp4'], vid3Load);
 // vid3.position(0, 384);
  //vid3.size(690, 384);
  //vid3.hide();
  
  //vid3 = createVideo(['assets/Amanda.mov'], vid1Load);
  //vid3.hide();
  //vid3.position(0, 384);
  //vid3.size(690, 384);
  //image(vid3, 0, 384, 790, 384);
  
  
  button1 = createButton('via');             //instead of ugly buttons, we can make it so that it's click image! But we'll
  button1.position(320, 350);                   //need to add some instructions at the top so people know to click images
  //button1.mousePressed(toggleSound);
  button1.mousePressed(toggleVideo1);
  //button1.mousePressed(changeFlagA);
  
  button2 = createButton('into');
  button2.position(960, 350);
  button2.mousePressed(toggleSound2);
  
  button3 = createButton('through');
  button3.position(320, 734);
  button3.mousePressed(toggleSound3);
  
  button4 = createButton('between');
  button4.position(960, 734);
  //button4.mousePressed(toggleSound4);
  button4.mousePressed(toggleVideo4);
  //button4.mousePressed(changeFlagB);
  
  
}

function draw() {
  textSize(20);
  //fill(250, 250, 250);
  
  //for (var x = (millis()/1000); x > 4; x < 6) {
  //  fill(250, 250, 250, 10);
 //   line1 = text('What is the intersection between the local and the translocal?', 780, 100);
  //  console.log('how many times');
  //}


  if ((round(millis()/1000)) === 6) {
    fill(250, 250, 250, 60);
    line1 = text('What is the intersection between the local and the translocal?', 780, 100);
  vid1.loop();
  vid1.position(0, 0);
  vid1.size(690, 384);
  }
  
  if ((round(millis()/1000)) === 8) {
    fill(250, 250, 250, 55);
   line2 = text('Our soundscapes, taking us through the digital', 740, 130);
  }
  
  if ((round(millis()/1000)) === 10) {
    fill(250, 250, 250, 55);
    line3 = text('Our bodies, pushing up against walls', 800,160);
  }
  
  if ((round(millis()/1000)) === 12) {
    fill(250, 250, 250, 20);
    line4 = text('Overflow our boxes, smolder beneath the surface', 780, 190)
  }
  
  if ((round(millis()/1000)) === 14) {
    fill(250, 250, 250, 20);
    line5 = text('This is a fake text', 120, 460);
  }
  
  if ((round(millis()/1000)) === 16) {
    fill(250, 250, 250, 20);
    line6 = text('We can fill this with a collaboration', 160, 490);
  }
  
  if (round((millis()/1000)) === 18) {
    fill(250, 250, 250, 20);
    line7 = text('But we can also experiment with the audio files', 150, 520);
  }
  
  if (round((millis()/1000)) === 20) {
    fill(250, 250, 250, 20);
    line8 = text('And manipulate the movies, because I am limited with my code', 110, 550);
    
  }
  
  if ((round(millis()/1000)) === 22) {
    //background(0, 0, 0);
    fill(0, 0, 0);
    rect(720, 50, 650, 300);
    //console.log('reached');
  }
  
  if ((round(millis()/1000)) === 24) {
    fill(250, 250, 250, 20);
    line9 = text('What spaces do I have access to in the digital?', 780, 100);
  }
  
  if ((round(millis()/1000)) === 26) {
    fill(250, 250, 250, 20);
    line10 = text('As a woman, which I would not in person', 740, 130);
  }
  
  if ((round(millis()/1000)) === 28) {
    fill(250, 250, 250, 20);
    line11 = text('And when does it becomes something else--', 800, 160);
  }
  
  if ((round(millis()/1000)) === 30) {
    fill(250, 250, 250, 20);
    line12 = text('voyeurism, tourism?', 780, 190);
  }
  
  if ((round(millis()/1000)) > 32) {
    //image(vid3, 0, 384, 690, 384);
    //vid3Load; 
    //vid3.position(0, 384);
    //vid3.size(690, 384);
    
  }
  
}

//function toggleSound() {
  //if (playingone) {
    //song1.fade(0, 1.5);
    //song1.pause(2);
    
  //} else {
    
    //song1.fade(0.2, 3);
   // song1.play(0, 0, .01);
    //song1.amp(0.1, 1.5);
  //}
  //playingone = !playingone;
//}  


function toggleSound2() {
  if (playingtwo) {
    song2.fade(0, 1.5);
    song2.pause(2);

    
  } else {
    //song2.fade(0.4, 1);
    song2.play(0, 0, 0.01);
    song2.amp(0.1, 1.5);
    
  }
  playingtwo = !playingtwo;
}  

function toggleSound3() {
  if (playingthree) {
    song3.fade(0, 1.5);
    song3.pause(2);
    
  } else {
    //song3.fade(0.4, 1);
    song3.play(0, 0, 0.01);
    song3.amp(0.1, 1.5);
    
  }
  playingthree = !playingthree;
}  
  
//function toggleSound4() {
  //if (playingfour) {
   // song4.fade(0, 1.5);
    //song4.pause(2);
    
  //} else {
    //song4.fade(0.4, 1);
   // song4.play(0, 0, 0.01);
   // song4.amp(0.2, 1.5);
  //}
//}
  //playingfour = !playingfour;
//}

function vid1Load() {
  vid1.loop();
}

//function vid2Load() {
  //vid2.loop();
//}

//function vid3Load() {
 //vid3.loop();
//}

//function vid4Load() {
//  vid4.loop();
//}

function toggleVideo1() {
  
  if (playingvid1) { 
    
    //vid1 = createVideo(['assets/Madwalk1.mp4']);
    vid2.hide();
    vid1.show();
    vid1.loop();
    vid1.position(0, 0);
    vid1.size(690, 384);
  
  
    button1 = createButton('via');             //instead of ugly buttons, we can make it so that it's click image! But we'll
    button1.position(320, 350);                   //need to add some instructions at the top so people know to click images
    //button1.mousePressed(toggleSound);
    button1.mousePressed(toggleVideo1);
    //button1.mousePressed(changeFlagA);
    console.log('new video A');
    
    
  } else {
    vid1.hide();
    //vid1b = createVideo(['assets/ZoeVideo1.mp4']);
    vid2.show();
    vid2.loop();
    vid2.position(0,0);
    vid2.size(690, 384);
    
    button1 = createButton('via');
    button1.position(320, 350);
    //button1.mousePressed(toggleSound);
    button1.mousePressed(toggleVideo1);
   // button1.mousePressed(changeFlagA);
    
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
    //button4.mousePressed(toggleSound4);
    button4.mousePressed(toggleVideo4);
    //button4.mousePressed(changeFlagB);
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
    //button4.mousePressed(toggleSound4);
    button4.mousePressed(toggleVideo4);
    //button4.mousePressed(changeFlagB);
    
    console.log('newVideoB again');
  }
  
  playingvid4 = !playingvid4;
}
