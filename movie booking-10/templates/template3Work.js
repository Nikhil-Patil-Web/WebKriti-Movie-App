document.getElementById("dateInput").addEventListener("change", function()
{
        var input=this.value;
        console.log(input); 
        var check= input.charAt(9);
        console.log(check);
        var cityIndex=document.getElementById("selection");
        var city=cityIndex.options[cityIndex.selectedIndex].text;
        console.log(city);

        if (check%2==1) {
            if (city=="Ahemdabad") {
                document.querySelector(".multiplexBoxAhemdabad1").style.display = "flex";
            }
            if (city=="Ambala") {
                document.querySelector(".multiplexBoxAmbala1").style.display = "flex";
            }
            if (city=="Agra") {
                document.querySelector(".multiplexBoxAgra1").style.display = "flex";
            }
            if (city=="Bangalore") {
                document.querySelector(".multiplexBoxBangalore1").style.display = "flex";
            }
            if (city=="Chennai") {
                document.querySelector(".multiplexBoxChennai1").style.display = "flex";
            }
            if (city=="Delhi") {
                document.querySelector(".multiplexBoxDelhi1").style.display = "flex";
            }
            if (city=="Guwahati") {
                document.querySelector(".multiplexBoxGuwahati1").style.display = "flex";
            }
            if (city=="Hyderabad") {
                document.querySelector(".multiplexBoxHyderabad1").style.display = "flex";
            }    
            if (city=="Kolkatta") {
                document.querySelector(".multiplexBoxKolkatta1").style.display = "flex";
            }
            if (city=="Mumbai") {
                document.querySelector(".multiplexBoxMumbai1").style.display = "flex";
            }       
            
        }
        else
        {
            if (city=="Ahemdabad") {
                document.querySelector(".multiplexBoxAhemdabad2").style.display = "flex";
            }
            if (city=="Ambala") {
                document.querySelector(".multiplexBoxAmbala2").style.display = "flex";
            }
            if (city=="Agra") {
                document.querySelector(".multiplexBoxAgra2").style.display = "flex";
            }
            if (city=="Bangalore") {
                document.querySelector(".multiplexBoxBangalore2").style.display = "flex";
            }
            if (city=="Chennai") {
                document.querySelector(".multiplexBoxChennai2").style.display = "flex";
            }
            if (city=="Delhi") {
                document.querySelector(".multiplexBoxDelhi2").style.display = "flex";
            }
            if (city=="Guwahati") {
                document.querySelector(".multiplexBoxGuwahati2").style.display = "flex";
            }
            if (city=="Hyderabad") {
                document.querySelector(".multiplexBoxHyderabad2").style.display = "flex";
            }    
            if (city=="Kolkatta") {
                document.querySelector(".multiplexBoxKolkatta2").style.display = "flex";
            }
            if (city=="Mumbai") {
                document.querySelector(".multiplexBoxMumbai2").style.display = "flex";
            }       
        }

})
