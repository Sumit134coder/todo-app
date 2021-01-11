var AddTask = document.querySelector("input");
var TaskSubmit = document.querySelector("#submit")
var tasks = document.querySelector("#tasks");

function TaskAdded(){
    var node = document.createElement("li");
    var btnDone = document.createElement("button");
    btnDone.innerHTML = '<i class="fas fa-check"></i>';
    var textNode = document.createTextNode(AddTask.value);
    node.appendChild(textNode);
    var btnTrash = document.createElement("button");
    btnTrash.innerHTML = '<i class="fas fa-trash"></i>';
    btnTrash.classList.add("btn-Trash");
    //apending the buttonn and task
    document.getElementById("tasks").appendChild(node).appendChild(btnDone);
    document.getElementById("tasks").appendChild(node).appendChild(btnTrash);

    AddTask.value = "";
    btnDone.addEventListener("click", (node)=>{
        var item =document.getElementById("tasks").node;
        item.classList.add("completed")

    })
    btnTrash.addEventListener("click",()=>{
        document.getElementById("tasks").removeChild(node);
    })
}

TaskSubmit.addEventListener("click", TaskAdded)

