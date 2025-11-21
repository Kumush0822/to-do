const taskInput = document.querySelector("#taskInput")
    addBtn = document.querySelector("#addBtn")
    taskList = document.querySelector(".taskList")
    addBtn.addEventListener('click' , () =>{
        input = taskInput.value
        taskList.innerHTML += `
        <div class = 'task'>
            <p>${input}</p>
            <div class="btns">
                <button>✅</button>
                <button>✏️</button>  
                <button>🗑️</button>
            </div>
        </div> `
        taskInput.value = ''
    })

