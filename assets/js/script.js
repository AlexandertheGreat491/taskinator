// document.querySelector returns the first element within the document that mat hes the spcified selector//
//document.querySelector("#save-task") targets the <button> element from index.html

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

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

//package up data as an object
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
 
// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
taskInfoEl.className = "task-info";
taskInfoEl.innerHTML = "<h3 class 'task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
listItemEl.appendChild(taskInfoEl);
//add entire list item to list
tasksToDoEl.appendChild(listItemEl);
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