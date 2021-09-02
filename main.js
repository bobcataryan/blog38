var SpeechRecognition= window.webkitSpeechRecognition;

var recognition= new SpeechRecognition();

function start(){
    document.getElementById("output").innerHTML=""
    recognition.start();
}

recognition.onresult=function run(event){

    console.log(recognition)
    
var content=event.results[0][0].transcript;
document.getElementById("output").innerHTML=content;

console.log(content);

if (content== "take my selfie"){
    console.log("taking selfie...");
    speak();
}
}
function speak(){
    var synth=window.speechSynthesis;

    speak_data= "taking your selfie in 5 seconds";

    var utterthis= new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);

    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    },5000)
}

Webcam.set({
    width:230,
    height:250,
    image_format: 'png',
    png_quality:90
});
console.log("webcam_set");


function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_img' src="+data_uri+">";
        console.log("picture taken");
    });

}

function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie_img").src;
    link.href=img;
    link.click();
}