function loadTasks(){
    let tasks =localStorage.getItem('tasks');
    const taskList =document.getElementById("task-list"); 
    if(tasks){
     tasks = JSON.parse(tasks);
    
    tasks.forEach(element => {
        let li= document.createElement("li");
      
        li.textContent =element;
        let removeBtn = document.createElement("button");
        removeBtn.textContent="Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener('click',function(){
            taskList.removeChild(li);
            
            tasks= tasks.filter((task)=>{
                console.log({element})
                return task !== element
                
            })
            localStorage.setItem('tasks',JSON.stringify(tasks))
          })
        li.appendChild(removeBtn)
        taskList.appendChild(li)
       
    });
}}
document.addEventListener("DOMContentLoaded",function(){
  const addButton =document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList =document.getElementById("task-list");  
  let tasks =localStorage.getItem('tasks') ;
 loadTasks()
  
  if (tasks) {
    tasks = JSON.parse(tasks);
    
}else{
   tasks =[];
}
  function addTask(){
    
    const taskText=taskInput.value.trim();
   if( !(taskText == "")){
      const li =document.createElement('li')
      li.textContent = taskText;
      tasks.push(taskText);
     
      localStorage.setItem('tasks',JSON.stringify(tasks))
      let removeBtn = document.createElement("button");
      removeBtn.textContent="Remove";
      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener('click',function(){
        taskList.removeChild(li);
        console.log(tasks)
       tasks= tasks.filter((task)=>{
            console.log({task})
            task !== li.value
            
        })
        localStorage.setItem('tasks',JSON.stringify(tasks))
      })
      li.appendChild(removeBtn);
      taskList.appendChild(li)
      taskInput.value="";
   }else{
    alert("you cannot leave a task empty")
   }
  }
 addButton.addEventListener("click",addTask)
 taskInput.addEventListener("keypress",function(event){
    if(event.key === 'Enter'){
        addTask()
    }
 })
})
