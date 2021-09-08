document.querySelector(".btn-load").addEventListener("click", loadTasks);
let taskList = document.querySelector(".ul-tasks");
let labelNotFound = document.querySelector(".label-notFound");
function loadTasks()
{
    if(userID.value)
    {
        fetch(`https://jsonplaceholder.typicode.com/users/${userID.value}/todos`)
        .then((response)=>
        {
            return response.json();
        })
        .then((json)=>
        {
            processResult(json);
        }
        )
        .catch(()=>{console.log("error")});
    }
}

function processResult(result)
{
    taskList.innerHTML="";
    labelNotFound.innerText="";
    if (Array.isArray(result) && result.length>0)
    {
        for (let task of result)
        {
            let card = createTaskCard(task);
            taskList.insertAdjacentElement("beforeend", card);
        }
        
    }
    else
    {
        labelNotFound.innerText="Пользователь с указанным ИД не найден";
    }
}

function createTaskCard(task)
{
    let li = document.createElement('li');
    li.classList.add(task.completed ? "tsk-complete" : "tsk-incomplete");
    li.innerText=task.title;
    return li;
}