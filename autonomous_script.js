if (typeof (document) !== "undefined") {
    const submit_val=document.getElementById("input_submit");
    const lat_val=document.getElementById("lat");
    const long_val=document.getElementById("long");
    submit_val.addEventListener("onclick",function(){
        lat_val.value=0;
        long_val.value=0;
    })
   const rover_needle=document.getElementById("rover_needle");
   const robo_needle=document.getElementById("robo_needle");
   const rover_button=document.getElementById("rover_btn").addEventListener("click",function(){
    var angle=prompt("Enter a value:");
      rover_needle.style.transform=`rotate(${angle}deg)`;
      document.getElementById("yaw_target").innerHTML="Yaw:"+angle+"°";
   })
   const robo_button=document.getElementById("robo_btn").addEventListener("click",function(){
     var angle=prompt("Enter a value:");
      robo_needle.style.transform=`rotate(${angle}deg)`;
      document.getElementById("yaw_current").innerHTML="Yaw:"+angle+"°";
   })
}