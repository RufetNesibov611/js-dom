"use strict";

let mode = document.querySelector(".mode");


mode.addEventListener("click",function(){
    if(document.body.classList.contains("light-mode")){
        document.body.classList.remove("light-mode")
        document.body.classList.add("dark-mode")
    }else{
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode")
    }
})


