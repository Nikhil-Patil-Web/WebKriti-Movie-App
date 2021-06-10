document.querySelector(".login").addEventListener("click", function(){
    document.querySelector(".popup-login").style.display = "flex";
})

document.querySelector(".close1").addEventListener("click", function() {
    document.querySelector(".popup-login").style.display= "none";
    
})

document.querySelector(".signup").addEventListener("click", function(){
    document.querySelector(".popup-signup").style.display = "flex";
})
document.querySelector(".close2").addEventListener("click", function() {
    document.querySelector(".popup-signup").style.display= "none";
    
})