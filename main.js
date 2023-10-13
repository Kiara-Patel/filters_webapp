prediction1=""
prediction2=""
Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
})

Webcam.attach("#camera")
function takesnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">'
})
}
Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DY4Q-Suyb0/model.json,modelLoaded")

function modelLoaded(){
console.log("modelIsLoaded")
}

function speak(){
synth=window.speechSynthesis
speakdata1="The First Prediction is"+prediction1
speakdata2="The Second Prediction is"+prediction2
utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
synth.speak(utterThis)
}

