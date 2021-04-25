var song;
var amp;
var button;

var volhistory = [];

function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

function preload() {
    song = loadSound('assets/19thFloor-BobbyRichards.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //button = createButton('Stop/Restart')
  //button.mousePressed(toggleSong);
  
  amp = new p5.Amplitude();

  song.play();
}

function draw() {
  background(0);

  var vol = amp.getLevel();
  volhistory.push(vol);
  
  stroke(255);
  noFill();

  beginShape();

  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i],0,1,height,0);
    vertex(i,y);
  }
  
  endShape();
  
  if (volhistory.length > width - 50) {
    volhistory.splice(0,1);
  }
  
  stroke(0,255,0);
  line(volhistory.length, 0, volhistory.length, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}