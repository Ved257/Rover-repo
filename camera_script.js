if (typeof (document) != "undefined") {
    navigator.mediaDevices
        .getUserMedia({
          video: {},
        })
        .then((stream) => {
          document.getElementById("vid").srcObject = stream;
        });
    const button=document.getElementById("mybtn");
    const vid=document.getElementById("vid");
    button.onclick=function(){
        if(vid.style.display!=="none"){
            // vid.removeAttribute('autoplay');
            vid.style.display="none";
        }
        else{
            vid.style.display="block";
        }
    };

}