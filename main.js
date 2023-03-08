x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
function preload() {
  apple = loadImage('apple.png');
}
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
 to_number = Number(content);
 if(Number.isInteger(to_number))
 {
  document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
 }
 else {
  document.getElementById("status").innerHTML = "The speech has not recognised a number";
 }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_apple == "set")
  {
    
    x= Math.floor(Math.random() * 700);
    y= Math.floor(Math.random() * 400);
    document.getElementById("status").innerHTML = to_number + " Apple is drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}




