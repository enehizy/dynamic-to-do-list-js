document.addEventListener("DOMContentLoaded",function(){
  const addButton =document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList =document.getElementById("task-list");  

  function addTask(){
    const taskText=taskInput.value.trim();
   if( !(taskText == "")){
      const li =document.createElement('li')
      li.textContent = taskText;
      let removeBtn = document.createElement("button");
      removeBtn.textContent="Remove";
      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener('click',function(){
        taskList.removeChild(li);
      })
      li.appendChild(removeBtn);
      taskList.append(li)
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