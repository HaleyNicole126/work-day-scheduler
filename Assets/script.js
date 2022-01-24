var tasks = {};

document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM D");

document.getElementById("nine").innerHTML = moment().hour(9).minute(0).format("h:mm a");
document.getElementById("ten").innerHTML = moment().hour(10).minute(0).format("h:mm a");
document.getElementById("eleven").innerHTML = moment().hour(11).minute(0).format("h:mm a");
document.getElementById("noon").innerHTML = moment().hour(12).minute(0).format("h:mm a");
document.getElementById("one").innerHTML = moment().hour(13).minute(0).format("h:mm a");
document.getElementById("two").innerHTML = moment().hour(14).minute(0).format("h:mm a");
document.getElementById("three").innerHTML = moment().hour(15).minute(0).format("h:mm a");
document.getElementById("four").innerHTML = moment().hour(16).minute(0).format("h:mm a");
document.getElementById("five").innerHTML = moment().hour(17).minute(0).format("h:mm a");

var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
saveTasks();

// enter and edit events
$(".description").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
  });

$(".description").on("blur", "textarea", function() {
    // get the textarea's current value/text
    var text = $(this)
    .val()
    .trim();

    tasks.text = text;
    saveTasks();

    var taskP = $("<p>")
    .addClass("m-1")
    .text(text);

  // replace textarea with new content
  $(this).replaceWith(taskP);
});

// var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));

//     if (!tasks) {
//         tasks = {
//             eventTime: [],
//             eventDescription: []
//         };
//     }

//   $.each(tasks, function(list, arr) {
//       arr.forEach(function(task) {
//           createTask(task.time, task.desc)
//       });
//   });
//   };





// // edit the task descriptions 
// $(".description").on("click", "p", function() {
//     // get current text of p element
//     var text = $(this)
//       .text()
//       .trim();
  
//     // replace p element with a new textarea
//     var textInput = $("<textarea>").addClass("form-control").val(text);
//     $(this).replaceWith(textInput);
  
//     // auto focus new element
//     textInput.trigger("focus");
//   });

//   // editable field was un-focused
// $(".description").on("blur", "textarea", function() {
//     // get current value of textarea
//     var text = $(this).val();
  
//     // get status type and position in the list
//     var status = $(this)
//       .closest(".description")
//       .attr("id")
//       //.replace("list-", "");
//     // var index = $(this)
//     //   .closest(".description")
//     //   .index();
  
//     // update task in array and re-save to localstorage
//     tasks[status].text = text;
//     saveTasks();
  
//     // recreate p element
//     var taskP = $("<p>")
//       .addClass("m-1")
//       .text(text);
  
//     // replace textarea with new content
//     $(this).replaceWith(taskP);
//   });




 //   var timeAudit = function() {
//     // get time from time element
//     var time = $(".hour")
//         .find("span")
//         .text()
//         .trim();

//     // convert to moment object
//     var eventTime = moment(time);
    
//     // remove old classes
//     $(timeEl).removeClass("past present future")

//     // apply new class
//     if (moment().isAfter(eventTime)) {
//         $(timeEl).addClass("past");
//       } else if (moment().isSame(eventTime)) {
//           $(timeEl).addClass("present");
//       } else if (moment().isBefore(eventTime)) {
//           $(timeEl).addClass("future");
//       }
// };