if (typeof (document) != "undefined") {
    navigator.mediaDevices
        .getUserMedia({
          video: {},
        })
        .then((stream) => {
          document.getElementById("vid0").srcObject = stream;
        });
    const button=document.getElementById("mybtn0");
    const vid=document.getElementById("vid0");
    
    button.onclick=function(){
        if(vid.style.display!=="none"){
            vid.style.display="none";
            button.style.backgroundColor="#c4c9e6";

        }
        else{

            vid.style.display="block";
            button.style.backgroundColor="rgb(80, 228, 80)";
        }
    };

}
if (typeof (document) != "undefined") {
    navigator.mediaDevices
        .getUserMedia({
          video: {},
        })
        .then((stream) => {
          document.getElementById("vid1").srcObject = stream;
        });
    const button=document.getElementById("mybtn1");
    const vid=document.getElementById("vid1");
    button.onclick=function(){
        if(vid.style.display!=="none"){
            // vid.removeAttribute('autoplay');
            vid.style.display="none";
            button.style.backgroundColor="#c4c9e6";

        }
        else{
            vid.style.display="block";
            button.style.backgroundColor="rgb(80, 228, 80)";

        }
    };

}

if (typeof (document) != "undefined") {
    navigator.mediaDevices
        .getUserMedia({
          video: {},
        })
        .then((stream) => {
          document.getElementById("vid2").srcObject = stream;
        });
    const button=document.getElementById("mybtn2");
    const vid=document.getElementById("vid2");
    button.onclick=function(){
        if(vid.style.display!=="none"){
            // vid.removeAttribute('autoplay');
            vid.style.display="none";
            button.style.backgroundColor="#c4c9e6";

        }
        else{

            vid.style.display="block";
            button.style.backgroundColor="rgb(80, 228, 80)";

        }
    };

}

if (typeof (document) != "undefined") {
    navigator.mediaDevices
        .getUserMedia({
          video: {},
        })
        .then((stream) => {
          document.getElementById("vid3").srcObject = stream;
        });
    const button=document.getElementById("mybtn3");
    const vid=document.getElementById("vid3");
    button.onclick=function(){
        if(vid.style.display!=="none"){
            // vid.removeAttribute('autoplay');
            vid.style.display="none";
            button.style.backgroundColor="#c4c9e6";

        }
        else{
            vid.style.display="block";
            button.style.backgroundColor="rgb(80, 228, 80)";

        }
    };

}

if (typeof (document) != "undefined") {
    navigator.mediaDevices
        .getUserMedia({
          video: {},
        })
        .then((stream) => {
          document.getElementById("vid4").srcObject = stream;
        });
    const button=document.getElementById("mybtn4");
    const vid=document.getElementById("vid4");
    button.onclick=function(){
        if(vid.style.display!=="none"){
            // vid.removeAttribute('autoplay');
            vid.style.display="none";
            button.style.backgroundColor="#c4c9e6";

        }
        else{
            vid.style.display="block";
            button.style.backgroundColor="rgb(80, 228, 80)";

        }
    };

}

if (typeof (document) != "undefined") {
    navigator.mediaDevices
        .getUserMedia({
          video: {},
        })
        .then((stream) => {
          document.getElementById("vid5").srcObject = stream;
        });
    const button=document.getElementById("mybtn5");
    const vid=document.getElementById("vid5");
    button.onclick=function(){
        if(vid.style.display!=="none"){
            // vid.removeAttribute('autoplay');
            vid.style.display="none";
            button.style.backgroundColor="#c4c9e6";

        }
        else{
            vid.style.display="block";
            button.style.backgroundColor="rgb(80, 228, 80)";

        }
    };

}
