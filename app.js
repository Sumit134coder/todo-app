var AddTask = document.querySelector("input");
var TaskSubmit = document.querySelector("#submit")
var tasks = document.querySelector("#tasks");

function TaskAdded(){
    var node = document.createElement("li");
    var btnDone = document.createElement("button");
    btnDone.innerHTML = "DONE";
    var textNode = document.createTextNode(AddTask.value);
    node.appendChild(textNode);
    document.getElementById("tasks").appendChild(node).appendChild(btnDone);
    AddTask.value = "";
    btnDone.addEventListener("click", ()=>{
        document.getElementById("tasks").removeChild(node);
    })
}

TaskSubmit.addEventListener("click", TaskAdded)

