async function showTasks(){
    const {
        data: {
            tasks
        },
    } = await axios.get('/api/v1/tasks');
    //console.log(tasks);

    const allTasks = tasks.map((task)=>{
        const data = task.name;
        const id = task._id;
        //console.log(data)
        return `<div>${data} : ${id}</div>`
    }).join(' ');

    //console.log(allTasks)

const div8 = document.getElementById("div8");
div8.innerHTML=allTasks;

}

async function deleteTaskById(){
    const input = document.getElementById("deleteTaskInput");
    const id = input.value;
    input.value="";
    try {
        await axios.delete(`/api/v1/tasks/${id}`);
        //console.log("delete done ")
        showTasks();
    }catch (e) {
        console.log(e);
    }
}

async function createTask(){
    console.log("create task called")
    const createTaskInput = document.getElementById("createTaskInput");
    const name = createTaskInput.value;
    createTaskInput.value="";
    //const name = "Vishal Mishra";
    console.log(name);
    try{
        await axios.post('/api/v1/tasks', {name});
        showTasks();
    }catch (e) {
        console.log(e);
    }
}

async function updateTask(){
    const name = document.getElementById("updateTaskInputName").value;
    const id = document.getElementById("updateTaskInputId").value;
    const completed = true;
    document.getElementById("updateTaskInputName").value="";
    document.getElementById("updateTaskInputId").value="";
    try{
        await axios.put(`/api/v1/tasks/${id}`,{name});
        showTasks();
    }catch (e) {
        console.log(e);
    }
}
showTasks();
//deleteTaskById();
//createTask();
//updateTask();

function create(){
    console.log("hi")
    createTask();
}
