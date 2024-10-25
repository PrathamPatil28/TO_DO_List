const inputBox= document.getElementById("input-box");
const listContainer = document.querySelector(".task-container");


function addtask(){
     if(inputBox.value === ''){
        alert("You Must a Write Something !");
     }
     else{
         let li = document.createElement("li");
         li.innerHTML = inputBox.value;
         listContainer.appendChild(li);

         let span = document.createElement("span")
         span.innerHTML = "\u00d7";
         li.appendChild(span)
     }

     inputBox.value = ""
     savedata();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ // Ensure this is uppercase for consistency
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        savedata();
    }
}, false);

// function savedata(){
//     localStorage.setItem("data", listContainer.innerHTML)
// }
//
// function showList(){
//     listContainer.innerHTML =localStorage.getItem("data");
// }
//
// showList();

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function  showList(){
    listContainer.innerHTML= localStorage.getItem("data");
}
