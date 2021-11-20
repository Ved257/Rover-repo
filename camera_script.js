if (typeof (document) != "undefined") {
    const start=document.getElementById("start");
    const stop=document.getElementById("stop");
    start.addEventListener("click",start_act);
    stop.addEventListener("click",stop_act);

    function start_act(){
        start.style.display='none';
        stop.style.display='block';

    }
    function stop_act(){
        start.style.display='block';
        stop.style.display='none';
    }
}