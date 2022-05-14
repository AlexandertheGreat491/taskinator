// document.querySelector returns the first element within the document that mat hes the spcified selector//
//document.querySelector("#save-task") targets the <button> element from index.html

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

/*document.querySelector("#tasks-to-do") targets the <ul> element in the <ul> under
the <main class="page-content" in the <section class="task-list-wrapper" under the
<h2>
*/

var taskFormHandler = function(event) {
//createTaskHandler is an anonymous function that replicates the code block.

    event.preventDefault();

var taskNameInput = document.querySelector("input[name='task-name']").value;
//console.dir(taskNameInput);
var taskTypeInput = document.querySelector("select[name='task-type']").value;
console.log(taskTypeInput);

/*Doesn't allow the browser to perform it's default when submit buton
is clicked, which is to refresh, instead a task can now be added under Tasks To Do*/  
// create list item
  var listItemEl = document.createElement("li");
listItemEl.className = "task-item";
  //createElement() creates a DOM element object, whic his <li> in this case.
  //create div to hold task info and add to list item

  //assigns the className property to the element with the "task-item"class.

  var taskInfoEl = document.createElement("div");
  //give it a class name
  taskInfoEl.className = "task-info";

  //add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  
  tasksToDoEl.appendChild(listItemEl);
  //appendChild() method appends a node(element) as the last child of an element
  //appends the task item as a child to the task list in the <ul> element
};

formEl.addEventListener("submit", createTaskHandler);

//created a "submit" addEventListener
//syntax would be the same for a different event, such as "click"
//variable.addEventListener("event", function);

/*addEventListener creates the function of the button,
which in this case is "click" and an event to be executed when the 
button is click*/

//buttonEl variable represents the button element.
//createTaskHandler is used as a callback function to trigger the code block within the function.