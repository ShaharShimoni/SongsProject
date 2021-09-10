
var mediaRecorder;
var song1 = new Audio('./songs/120_future_funk_beats_25.mp3');
var song2 = new Audio('./songs/120_stutter_breakbeats_16.mp3');
var song3 = new Audio('./songs/Bass Warwick heavy funk groove on E 120 BPM.mp3');
var song4 = new Audio('./songs/electric guitar coutry slide 120bpm - B.mp3');
var song5 = new Audio('./songs/FUD_120_StompySlosh.mp3');
var song6 = new Audio('./songs/GrooveB_120bpm_Tanggu.mp3');
var song7 = new Audio('./songs/MazePolitics_120_Perc.mp3');
var song8 = new Audio('./songs/PAS3GROOVE1.03B.mp3');
var song9 = new Audio('./songs/SilentStar_120_Em_OrganSynth.mp3');

var audioArray = [ song1, song2, song3, song4, song5, song6, song7, song8,song9];
var IndexArray = [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0]; 
var list=[];
var count=0;



let audioIN = { audio: true }; //  audio is true, for recording
// Access the permission for use the microphone
navigator.mediaDevices.getUserMedia(audioIN)
  .then(function (mediaStreamObj) {

    let audio = document.querySelector('audio');
    if ("srcObject" in audio) {
      audio.srcObject = mediaStreamObj;
    }
    else {  
      audio.src = window.URL.createObjectURL(mediaStreamObj);
    }
    let start = document.getElementById('record');
    let stop = document.getElementById('stopRecord');
    let playAudio = document.getElementById('adioPlay');
    mediaRecorder = new MediaRecorder(mediaStreamObj);
  
    start.addEventListener('click', function (ev) {
        console.log('I was clicked')
        record.disabled = true;
        record.style.backgroundColor = "blue"
        stopRecord.disabled=false;
        mediaRecorder.start();
      
    })

    stop.addEventListener('click', function (ev) {
      console.log("Stop")
      record.style.backgroundColor = "red";
      mediaRecorder.stop();
      
    });
    // Chunk array to store the audio data 
    let dataArray = [];
    // If audio data available then push it to the chunk array
    mediaRecorder.ondataavailable = function (ev) {
      dataArray.push(ev.data);
    }

    // Convert the audio data in to blob 
    // after stopping the recording
    mediaRecorder.onstop = function (ev) {

      // blob of type mp3
      let audioData = new Blob(dataArray,  { 'type': 'audio/mp3;' });
      dataArray = [];
      let audioSrc = window.URL.createObjectURL(audioData);
      playAudio.src = audioSrc;
      record.disabled = false;  // can record again
      stopRecord.disabled=true;  
    }
  })

  // If any error occurs then handles the error 
  .catch(function (err) {
    console.log(err.name, err.message);
  });



function changeState(index,state,id){
  IndexArray[index]=state;
  if(state==1){
     document.getElementById(id).style.color ="black";
  }
  if(state==0){
    audioArray[index].pause();
    document.getElementById(id-1).style.color ="white";
  }
  console.log(IndexArray)
  console.log(list)

}

function pauseall(){
  for(let i=0;i<audioArray.length;i++){
      if(audioArray[i].play){
          audioArray[i].pause();
      }
    }
    print_history();
}

function playall(){
    for(let i=0;i<audioArray.length;i++){
      if(IndexArray[i]==1){
          audioArray[i].play();
          audioArray[i].loop=true;
      }
    }
  save_history();

}


function save_history(){
    let newArray = IndexArray.slice();
    list.push(newArray);
    var x = document.getElementById("mySelectHistory");
    var option = document.createElement("option");
    var length=list.length;
    option.text = ""+length;
    x.add(option);
      
}

function print_history(){
  for(let j = 0; j < list.length; j++){
    console.log("array number"+j+"="+list[j])
  }
}

// Play History Choises
function Play_History() {
  var x = document.getElementById("mySelectHistory").value;
  console.log(list)
  for(let i=0;i<list[x-1].length;i++){
    if(list[x-1][i]==1){
      audioArray[i].play();
      audioArray[i].loop=true;
    }
    else{  //stops songs from last record
      audioArray[i].pause();
    }
  }
} 


 