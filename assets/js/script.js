// document.querySelector returns the first element within the document that mat hes the spcified selector//
//document.querySelector("#save-task") targets the <button> element from index.html

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

/*document.querySelector("#tasks-to-do") targets the <ul> element in the <ul> under
the <main class="page-content" in the <section class="task-list-wrapper" under the
<h2>
*/

var createTaskHandler = function() {
    //createTaskHandler is an anonymous function that replicates the code block.
  var listItemEl = document.createElement("li");
  //createElement() creates a DOM element object, whic his <li> in this case.
  listItemEl.className = "task-item";
  //assigns the className property to the element with the "task-item"class.

  listItemEl.textContent = "This is a new task.";
  /*textContent property sets or returns the text content of the specified
  node, which is the button.*/
  tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);

/*addEventListener creates the function of the button,
which in this case is "click" and an event to be executed when the 
button is click*/

//buttonEl variable represents the button element.
//createTaskHandler is used as a callback function to trigger the code block within the function.