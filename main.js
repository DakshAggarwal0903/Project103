Webcam.attach('#camera');
camera = document.getElementById("camera")
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 100
});
function capture(){
    Webcam.snap(function(bb){
        document.getElementById("result").innerHTML='<img id="bbb" src="'+bb+'"/>';
    });
}
console.log("ml5 loaded",ml5.version);
c = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0K5NX0mHF/model.json',modelloaded);
function modelloaded(){
    console.log("Model Loaded.")
}
function identify(){ 
    abd = document.getElementById("bbb")
    c.classify(abd,gotresult)
}
function gotresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
       document.getElementById("Member").innerHTML= result[0].label;
       document.getElementById("Accuracy").innerHTML=result[0].confidence.toFixed(4)*100 + "%";
    }
}