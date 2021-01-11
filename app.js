var AddTask = document.querySelector("input");
var TaskSubmit = document.querySelector("#submit")
var tasks = document.querySelector("#tasks");

function TaskAdded(){
    var node = document.createElement("li");
    node.innerText = AddTask.value;
    var btnDone = document.createElement("button");
    btnDone.innerHTML = '<i class="fas fa-check"></i>';
    var btnTrash = document.createElement("button");
    btnTrash.innerHTML = '<i class="fas fa-trash"></i>';
    btnTrash.classList.add("btn-Trash");
    //apending the buttonn and task
    document.getElementById("tasks").appendChild(node).appendChild(btnDone);
    document.getElementById("tasks").appendChild(node).appendChild(btnTrash);

    AddTask.value = "";
    btnDone.addEventListener("click", (event)=>{
        document.getElementById("tasks").removeChild(node);
    })
    btnTrash.addEventListener("click",()=>{
        document.getElementById("tasks").removeChild(node);
    })
}

TaskSubmit.addEventListener("click", TaskAdded)

