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
var playingsound = false;
var extraCanvas;
var playinground = false;
var graphics;
var flag = 1;
var myDiv;
var expeributton;
var stateflag = false;
var marginpop;
var border1;
var border2;
var border3;
var border4;
var w;
var h;


function preload() {

  soundFormats('wav', 'mp3');
  songround = loadSound('assets/Round.mp3');
  song2 = loadSound('assets/MargotBanWalk.mp3');
  img2 = loadImage('assets/AmandaMap.png');
  img = loadImage('assets/MapTwine4.jpeg');
  img5 = loadImage('assets/CanaryMap.png');
  
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

  //graphics = createGraphics();
  
  
}

function setup() {
  w = window.innerWidth;
  h = window.innerHeight
  if (w > 1350 && h > 750) {
    canvas = createCanvas(w, h);
  } else {
    canvas = createCanvas(displayWidth, displayHeight);
  }
    //ORIGINALLY 1620, 861 //1400, 628
  background(0, 0, 0);        //do we want a white background?
  
  
  imageMode(CORNER);
  tint(255, 200);
  image(img2, 690, 0);
  tint(255, 200);
  image(img, 5, 393, 679, 379);
  noTint();
  
  
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
  vid3.position(640, 388);
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
  
  var col = color(20, 20, 20, 200);
  var textcol = color(250, 250, 250);
  button1 = createButton('via');
  button1.style('background-color', col);
  button1.style('color:white');
  button1.style('font-size', '11px');
  button1.style('font-family', 'Georgia, sans-serif');
  button1.size(60,20);
  button1.position(5, 365);
  button1.mousePressed(toggleVideo1);
  button1.mousePressed(toggleRound);
  
  button2 = createButton('entre');
  button2.style('background-color', col);
  button2.style('color:white');
  button2.style('font-size', '11px');
  button2.style('font-family', 'Georgia, sans-serif');
  button2.size(60,20);
  button2.position(694, 365);
  button2.mousePressed(toggleSound2);
  button2.mousePressed(toggleVideo5);
  
  button3 = createButton('through');
  button3.style('background-color', col);
  button3.style('color:white'); 
  button3.style('font-size', '11px');
  button3.style('font-family', 'Georgia, sans-serif');
  button3.size(60,20);
  button3.position(5, 752);
  button3.mousePressed(toggleVideo6);
  
  button4 = createButton('between');
  button4.style('background-color', col);
  button4.style('color:white');
  button4.style('font-size', '11px');
  button4.style('font-family', 'Georgia, sans-serif');
  button4.size(60,20);
  button4.position(694, 752);
  button4.mousePressed(toggleVideo4);
  
  noFill();
  //noStroke();
  //marginpop = createDiv('');
 // marginpop.position(1100, 0);
  //marginpop.style('width', '300px');
  //marginpop.style('height', '900px');
  //marginpop.style('background-color', 'white');
  //marginpop.mouseOver(artiststate);
  //marginpop.mouseOut(noartiststate);
  //graphics = createGraphics(0, 0, displayWidth, displayHeight);
  textSize(30);
  fill(250, 250, 250);
  border1 = createDiv('');
  border1.style('width', '680px');
  border1.style('height', '380px');
  border1.position(-10, -370);
  border1.style('border', '8px solid black');
  border1.parent(button1);
  
  border2 = createDiv('');
  border2.style('width', '680px');
  border2.style('height', '375px');
  border2.position(-10, -365);
  border2.style('border', '8px solid black');
  border2.parent(button3);
  
  border3 = createDiv('');
  border3.style('width', '685px');
  border3.style('height', '380px');
  border3.position(-10, -370);
  border3.style('border', '8px solid black');
  border3.parent(button2);
  
  border4 = createDiv('');
  border4.style('width', '685px');
  border4.style('height', '375px');
  border4.position(-10, -365);
  border4.style('border', '8px solid black');
  border4.parent(button4);
  
  //inout = '>>'
  
  expeributton = createButton('<<');
  expeributton.style('background-color', col);
  expeributton.style('color:white');
  expeributton.style('font-size', '20px');
  expeributton.style('font-family', 'Georgia, sans-serif');
  expeributton.size(60,760);
  expeributton.position(1350, 5);
  if (stateflag === false) {
    expeributton.mousePressed(artiststate);
  } //else {
  //if (stateflag === true) {
   // expeributton.mousePressed(noartiststate);
    //console.log("get rid of artists state");
  //}
  
  
  
  //SIDE ARTIST STATEMENT FROM ORIGINAL
  //textStyle(ITALIC);
  //textSize(20);
  //text('Spinning Walks', 1465, 50);
  //textStyle(NORMAL);
  //textSize(15);
  //text('Created collaboratively by', 1430, 80);
  //text('Madeleine Campbell', 1465, 110);
  //text('Margot Machado', 1490, 130);
  //text('Zoë Quick', 1533, 150);
  //text('and Amanda Hodes', 1470, 170);
  //noFill();
}

function artiststate() {
  if (stateflag === false) {
    expeributton.html('>>');
    myDiv = createP('< THROUGH > @57.2503576, -6.2516006, 398m-@40.8062679, -75.6021669, 1264m- @52.4189819, -3.7213852, 33165m- @28.1848642, -16.8090115, 3049m < /THROUGH > <br/><br/><br/>< ENTRE > feminine-body-[of-land]-as-exquisite-corpse-corps-cadavre-exquis?-[violence-of-linearity-&&-polyvocal-multiplicity-liminality-latency-cycles-site-specificity] < /ENTRE > <br/><br/><br/>< BETWEEN > foot-prints-walking-hem-lines-in-canon-[rhythms-of-multiple-pacings-mapping-the-translocal]-singing-translations-spinning-&&-circles-overflow-digital-squares < /BETWEEN > <br/><br/><br/>< VIA > four-prepositions-side-stepping-lines-that-never-meet-[clicking-&&-collaborating]-sound-unravelling-strings-[audience-enters-contrapuntal-tempos] < /VIA ><br/>');
    myDiv.style('padding', '12pt');
    myDiv.style('font-size', '18px');
    myDiv.style('width', '250px');
    myDiv.style('word-wrap', 'break-word');
    myDiv.style('background-color', 'white');
    myDiv.style('opacity', '0.7');
    myDiv.position(1150, -18);
    stateflag = true;
    myDiv.mousePressed(artiststate);
  } else {
    myDiv.remove();
    expeributton.html('<<');
    stateflag = false;
  }
}

function noartiststate() {
  if (stateflag === true) {
    myDiv.remove();
    expeributton.html('<<');
    stateflag = false;
  }
}
  

function toggleSound2() {
  if (playingtwo) {
    playingtwo = true;

    
  } else {
    //song2.fade(0.4, 1);
    song2.play(0, 0, 0.01);
    song2.amp(0.1, 1.5);
    //song2.loop();
    
  }
  playingtwo = true;
}  

function draw() {
  if (playingtwo === true) {
    if (!song2.isPlaying()) {
      song2.play();
      song2.amp(0.1, 1.5);
      
    }
  }
  if (playinground === true) {
''
    if (!songround.isPlaying()) {
      songround.play();
      songround.amp(0.2, 1.5);
    }
  }
}

function toggleVideo1() {
  
  if (playingvid1) { 
    
    vid2.hide();
    vid1.loop();
    vid1.show();
    vid1.position(0, 0);
    vid1.size(690, 384);
  
  
    //button1 = createButton('via');
    //button1.position(5, 365);
    //button1.mousePressed(toggleVideo1);
    
    
  } else {
    vid1.hide();
    vid2.loop();
    vid2.show();
    vid2.position(0,0);
    vid2.size(690, 384);
    
    //button1 = createButton('via');
    //button1.position(5, 365);
    //button1.mousePressed(toggleVideo1);
    
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
    vid3.position(640, 388);
    vid3.size(790, 384);
  
    //button4 = createButton('between');
    //button4.position(960, 734);
    //button4.mousePressed(toggleVideo4);
    //console.log('new video B');
    //image(extraCanvas, 0, 0);
    
  }
  else {
    vid3.hide();
    //vid4 = createVideo(['assets/ZoeWalk2.mp4']);
    vid4.loop();
    vid4.show();
    vid4.position(640, 388);
    vid4.size(790, 384);
    
    //button4 = createButton('between');
    //button4.position(960, 734);
    //button4.mousePressed(toggleVideo4);
    
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
    vid8.position(-138, 390);
    //vid8.position(-60, 0)
    vid8.size(967, 384);
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
window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  if (w > 1350 && h > 750) {
    canvas.size(w,h);
  } else {
    canvas.size(displayWidth, displayHeight);
  }
  background(0, 0, 0); 
  tint(255, 200);
  image(img2, 690, 0);
  tint(255, 200);
  image(img, 5, 393, 679, 379);
  
}
