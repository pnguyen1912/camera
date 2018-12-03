// Hide/show play/stop approad
function camera(){
var video = document.getElementById('video');
var btn = document.getElementById('btn');
if (video.style.display == 'none') { 
video.style.display = 'block';
btn.innerHTML = 'Hide camera';
// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}}
 else if (video.style.display =='block'){
    video.style.display = 'none';
    btn.innerHTML = 'Show camera';
    video.pause();
    video.src = "";
}
}


// create element approad
// function camera(){
//     let video=document.getElementById('video');
//     let v1=document.createElement('video');
//     if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//             navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
//                 v1.srcObject = stream;
//                 v1.play();
//             });}
//     video.appendChild(v1);
// }

// function remove(){
//     let elem = document.getElementById('video')
//     elem.parentElement.removeChild(elem);
//     return false
// }