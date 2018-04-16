/**
 * The constructor of Task Objects
 *
 * @param {String} Name of the task
 * @param {Date} Date when the task is attached
 * @param {Boolean} True if the task is finished
 */
function Task(name, date, isDone) {
    this.name = name;
    this.date = date;
    this.isDone = isDone;
};

var taskList = [];
var currentTime;
var deleteButtons = [];
var Checkboxes;

var btnTask = document.getElementById("add-task");
var list = document.getElementById("list").getElementsByTagName("ul")[0];
var deleteTask = function () {
    console.log(this.getAttribute("id"));
    taskList.splice(this.getAttribute("id"), 1);
    repaint();
};

var checkit= function(){
    var p=this.getAttribute("id");
    console.log(" "+p);
   !taskList[this.getAttribute("id")].isDone;
    repaint();
};


/*
 * Sets a function that generates a new task each time when is pressed the Add button, and assign it to the tasklist
 */
btnTask.onclick = function () {
    var d = new Date();
    currentTime = d.toString();
    var task = new Task(" " + document.getElementById("input-task").value, currentTime, false);

    taskList.push(task);
    document.getElementById("input-task").value = "";



    repaint();
};




/**
 * Sets a function with the purpose of rebuild the tasklist in the DOM
 */
function repaint() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (var i = 0; i < taskList.length; i++) {
        var newLi = document.createElement("li");

        var newCheckbox = document.createElement("input");
        var date2 = document.createElement("input");
        var newTask = document.createElement("input");
        var deleteButton = document.createElement("button");

        newCheckbox.setAttribute("type", "checkbox");
        newCheckbox.setAttribute("input", true);
        newCheckbox.setAttribute("class", "check");
        newCheckbox.setAttribute("id",i);



        deleteButton.setAttribute("class", "delete");
        deleteButton.setAttribute("id",i);



        date2.setAttribute("class", "date-space");
        date2.setAttribute("type", "text");
        date2.setAttribute("value", taskList[i].date);
        newTask.setAttribute("type", "text");
        newTask.setAttribute("value", taskList[i].name);
        newTask.setAttribute("class", "task-space");

        document.getElementsByClassName("date-space").disabled = true;
        document.getElementsByClassName("task-space").disabled = true;


        newLi.appendChild(newCheckbox);
        newLi.appendChild(date2);
        newLi.appendChild(newTask);
        newLi.appendChild(deleteButton);



        list.appendChild(newLi);



        deleteButtons = document.getElementsByClassName("delete");
        Checkboxes = document.getElementsByClassName("check");

        deleteButtons[i].onclick = deleteTask;
        Checkboxes[i].onclick=checkit;
    }
};





document.getElementsByClassName("date-space").disabled = true;
document.getElementsByClassName("task-space").disabled = true;
