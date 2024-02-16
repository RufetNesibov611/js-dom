"use strict";

//<li class="list-group-item">An item</li>


let ul = document.querySelector("ul");


document.querySelector(".add").addEventListener("click",function(){
    let input = document.querySelector(".input-text");
    let text = input.value;

    if(text.trim() == ""){
        document.querySelector(".validation").classList.remove("d-none");
        return
    }else{
        document.querySelector(".validation").classList.add("d-none");
    }


    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = text;
    ul.append(li);
    input.value = "";

    let deleteBtn = document.createElement("span");

    deleteBtn.addEventListener("click",function(){
        li.remove();
    })

    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.append(deleteBtn);

})