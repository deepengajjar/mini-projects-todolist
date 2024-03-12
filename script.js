var tasklist = document.getElementById("tasklist")
var taskNo =0


function addTaskItem(){


    var inputText = document.getElementById('inputText')
    inputTextValue = inputText.value.trim()

    if(inputTextValue.length ==0 || inputTextValue.length>83){
        alert('Enter valid vaue or max 83 characters')
        return pass 
    }
    

    var taskItem = document.createElement("div")
    taskItem.className = `taskItem bg-white min-h-11  
    flex  items-center relative w-full border border-x-transparent border-t-transparent border-b-slate-400`
    taskItem.id='taskItem'



    // To modify the contents of a check box
    var taskCheckBox_main = document.createElement("div")
    taskCheckBox_main.className =`flex items-center w-10 md:w-12 md:pl-1`
    taskCheckBox_main.id ="taskCheckBox_main"

    var taskCheckBox = document.createElement("input")
    taskCheckBox.type="checkbox"
    taskCheckBox.className =`taskCheckBox md:h-6 md:w-6 h-4 w-4`
    taskCheckBox.id ="taskCheckBox"

    taskCheckBox_main = taskCheckBox_main.appendChild(taskCheckBox)


    // to modify the contents of To do notes
    var taskItemText_main = document.createElement("div")
    taskItemText_main.className =`w-5/6 h-20 md:h-11 flex md:truncate  overflow-hidden items-center taskItemText_main`
    taskItemText_main.id='taskItemText_main'

    var taskItemText = document.createElement("p")
    taskItemText.className =`taskItemText text-sm md:text-base md:truncate pl-2`
    taskItemText.id='taskItemText'
    taskItemText.innerHTML=inputTextValue

    taskItemText_main = taskItemText_main.appendChild(taskItemText)


//    To modify the contents of delete button
    var deleteButton_main = document.createElement("div")
    deleteButton_main.className =`w-1/6 flex items-center`
    deleteButton_main.id='deleteButton_main'

    var deleteButton = document.createElement("img")
    deleteButton.src="images/delete.png"
    deleteButton.className =`h-5 w-5 right-1 md:right-2 md:right-5 absolute cursor-pointer deleteButton`
    deleteButton.id='deleteButton'

    deleteButton_main = deleteButton_main.appendChild(deleteButton)

    // functionality to add tasks
    taskCheckBox.addEventListener('change',function () {
        if (this.checked) {
            taskItemText.classList.add("line-through")            
        } else {
            taskItemText.classList.remove("line-through")
        }
        
    })


    // functionality to removs tasks
    deleteButton.addEventListener('click',function () {
        taskItem.remove()
    })

    
    tasklist.appendChild(taskItem).appendChild(taskCheckBox_main)
    tasklist.appendChild(taskItem).appendChild(taskItemText_main)
    tasklist.appendChild(taskItem).appendChild(deleteButton_main)
    
    
    
    
    inputText.value = ""


} // addTaskItem()





     









                


