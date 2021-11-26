if (typeof (document) !== "undefined") {
   var rover_angle=0,robo_angle=0;
   const rover_needle=document.getElementById("rover_needle");
   const robo_needle=document.getElementById("robo_needle");
   const rover_button=document.getElementById("rover_btn").addEventListener("click",function(){rotate(rover_needle,rover_angle)});
   const robo_button=document.getElementById("robo_btn").addEventListener("click",function(){rotate(robo_needle,robo_angle)});


   function rotate(needle,angle){
      needle.style.transform=`rotate(${angle}deg)`;
   }
}
