

function Start_Classification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JVocdmpep/model.json", model_ready)
}

function model_ready(){
    classifier.classify(gotResults)
}


function gotResults(error, result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("result_label").innerHTML = "I can hear " + result[0].label
        document.getElementById("confidence_label").innerHTML = "Accuracy " + (result[0].confidence*100).toFixed(2) + " %"
    

     if(result[0].label=="Background Noise"){
        document.getElementById("a1").style.visibility = "visible"
        document.getElementById("a2").style.visibility = "hidden"
        document.getElementById("a3").style.visibility = "hidden"
    }


     if(result[0].label=="Roaring"){
        document.getElementById("a1").style.visibility = "hidden"
        document.getElementById("a2").style.visibility = "visible"
        document.getElementById("a3").style.visibility = "hidden"
    }


     if(result[0].label=="Neighing"){
        document.getElementById("a1").style.visibility = "hidden"
        document.getElementById("a2").style.visibility = "hidden"
        document.getElementById("a3").style.visibility = "visible"
    }
    }
}  