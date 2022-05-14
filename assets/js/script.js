var taskIdCounter = 0;
//taskIdCounter variable will be used to assign an id to the current task being created.
// document.querySelector returns the first element within the document that mat hes the spcified selector//
//document.querySelector("#save-task") targets the <button> element from index.html

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var tasksInProgressEl = document.querySelector("#tasks-in-progress");
var tasksCompletedEl = document.querySelector("tasks-completed");
var pageContentEl = document.querySelector("#page-content");
/*document.querySelector("#tasks-to-do") targets the <ul> element in the <ul> under
the <main class="page-content" in the <section class="task-list-wrapper" under the
<h2>
*/

var taskFormHandler = function(event) {
//taskFormHandler is an anonymous function that replicates the code block.

    event.preventDefault();
/*Doesn't allow the browser to perform it's default when submit buton
is clicked, which is to refresh, instead a task can now be added under Tasks To Do*/  
var taskNameInput = document.querySelector("input[name='task-name']").value;
//console.dir(taskNameInput);
var taskTypeInput = document.querySelector("select[name='task-type']").value;
//console.log(taskTypeInput);

// check if input values are empty strings
/* Checking whether the form fields have content. If they do, let the function continue
and create the task item. If either field doesn't, stop the function and let the user know 
that something is missing.*/

if (taskNameInput === "" || taskTypeInput === "") {
    alert("You need to fill out the task form!");
    return false;
}

var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
};

// send it as an argument to createTaskEl
createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {

// create list item

var listItemEl = document.createElement("li");
listItemEl.className = "task-item";
//createElement() creates a DOM element object, whic his <li> in this case.
 //add task id as a custom attribute
 listItemEl.setAttribute("data-task-id", taskIdCounter);
 //setAttribute set data-task-id to the current value of taskIdCounter, which is 0.
// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
taskInfoEl.className = "task-info";
taskInfoEl.innerHTML = "<h3 class 'task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
listItemEl.appendChild(taskInfoEl);
//add entire list item to list
tasksToDoEl.appendChild(listItemEl);

var taskActionsEl = createTaskActions(taskIdCounter);
//console.log(taskActionsEl);
listItemEl.appendChild(taskActionsEl);
tasksToDoEl.appendChild(listItemEl);
// increase task counter for next unique id.
// taskIdCounter will increase in increments of 1 to next unique id.
taskIdCounter++;
};

//passing new id into the function

var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    //creates the div
    actionContainerEl.className = "task-actions";
    //assigns a class name to the div that was created

    // create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // create a delete button

    var deleteButtonEl = document.createElement("button");

    //creates a button element

    deleteButtonEl.textContent = "Delete";

    //makes the text of the button say "Delete"

    deleteButtonEl.className = "btn delete-btn";

    //assigns a class to this button element

    deleteButtonEl.setAttribute("data-task-id", taskId);

    //sets a custom data attribute for the taskId for this element

    // create a status change dropdown
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("data-task-id", taskId);
    //append to select
    actionContainerEl.appendChild(statusSelectEl);
    var statusChoices = ["To-Do", "In Progress", "Completed"];
    // array will facilitate the looping
    for (var i = 0; i < statusChoices.length; i++) {
        // create option element
        var statusOptionsEl = docuemnt.createElement("option");
        statusOptionsEl.textContent = statusChoices[i];
        statusOptionsEl.setAttribute("value", statusChoices[i]);
        //append to select
        statusSelectEl.appendChild(statusOptionEl);
    }
    //loop goes through the status options.
    /*the loop starts at statusChoices[0]. i < statusChoices.length keeps the for loop 
    running by checking against the number of items in the array (length being the property that returns the number of items)
    i++ increments the counter by one after each loop iteration.
    statusChoices[i] returns the value of the array at the given index*/

    return actionContainerEl;
};


    


formEl.addEventListener("submit", taskFormHandler);

//created a "submit" addEventListener
//syntax would be the same for a different event, such as "click"
//variable.addEventListener("event", function);

/*addEventListener creates the function of the button,
which in this case is "click" and an event to be executed when the 
button is click*/

//buttonEl variable represents the button element.
//createTaskHandler is used as a callback function to trigger the code block within the function.
var taskButtonHandler = function(event){
    console.log(event.target);
    if (event.target.matches(".delete-btn")) {
        //get the element's task id
        var taskId = event.target.getAttribute("data-task-id");
        console.log(taskId);
    }
};
pageContentEl.addEventListener("click", taskButtonHandler);