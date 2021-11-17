if (typeof (document) !== "undefined") {
    const ph_val=document.getElementById("ph");
    const temp=document.getElementById("temp");
    const co2=document.getElementById("co2");
    const thermal_senVal=document.getElementById("thermal");
    const humidity_senVal=document.getElementById("humidity");
    const spectro_senVal=document.getElementById("spectro");

    ph_val.addEventListener("click",function(){getValue(ph)});
    temp.addEventListener("click",function(){getValue(temp)});
    co2.addEventListener("click",function(){getValue(co2)});
    thermal_senVal.addEventListener("click",function(){getValue(thermal_senVal)});
    humidity_senVal.addEventListener("click",function(){getValue(humidity_senVal)});
    spectro_senVal.addEventListener("click",function(){getValue(spectro_senVal)});
    function getValue(button){
        button.value=prompt("Enter a value:");
    }
}