if (typeof (document) !== "undefined") {
//    var rover_angle=0,robo_angle=0;
   const rover_needle=document.getElementById("rover_needle");
   const robo_needle=document.getElementById("robo_needle");
//    const rover_button=document.getElementById("rover_btn").addEventListener("click",function(){rotate(rover_needle,rover_angle)});
//    const robo_button=document.getElementById("robo_btn").addEventListener("click",function(){rotate(robo_needle,robo_angle)});
//     function rotate(needle,angle){
//       needle.style.transform=`rotate(${angle}deg)`;
//    }
    
    function rot1(btn){
       if(event.key==='Enter'){
           rover_needle.style.transform=`rotate(${btn.value}deg)`;
           btn.value="";
       }
   }
   function rot2(btn){
       if(event.key==='Enter'){
           robo_needle.style.transform=`rotate(${btn.value}deg)`;
           btn.value="";
       }
   }

   var keyval=document.getElementById("x_value");
    
    keyval.value=0;
    keyval.addEventListener('keydown',e=>{
        if(e.keyCode===87){
            keyval.value++;
        }
        if(e.keyCode===83){
            keyval.value--;
        }
    })
    function myfunction(){
        keyval.value=0;
    }
}
