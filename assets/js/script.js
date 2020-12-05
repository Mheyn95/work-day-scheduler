//load tasks from local storage and input them in their correct time blocks
var loadTasks = function() {
  // get tasks from local storage
  var taskArray = localStorage.getItem('tasks');
  taskArray = JSON.parse(taskArray);

  // push tasks onto page
  for (i = 0; i < taskArray.length; i++) {
    var text = taskArray[i].text;
    $('.' + (i + 9)).val(text);
  }

  // run function to popuklat page
  addCurrentDate();
}

//push current date into jumbotron
var addCurrentDate = function() {
    // clear out current date
    $("#currentDay").empty();
  
    // create variable to hold current date
    var todayDate =  moment();
    
    //display variable in the empty p tag with id of 'currentDay'
    $("#currentDay").append(todayDate.format('MMMM Do, YYYY'));

    //run function to show colored times
    timeCheck();
};

//get colors for time blocks depending on current time
var timeCheck = function() {
  // get current time
  var timeNow = parseInt(moment().format('H'));
  
  // create new array to store id numbers
  var childArray = [];
  
  // get array of all ids in child elements of container div
  $('div','.container').each(function(){
    childArray.push($(this).attr('id')); 
  });

  // Remove item 'undefined' from array
  childArray = childArray.filter(function(e) { return e !== undefined })

  // compare to times in grid and add background colors to task text area
  for (i = 0; i < childArray.length; i++) {
    var timeId = parseInt(childArray[i]);

    if(timeId === timeNow) {
      $('.' + timeId).addClass("present");
    }
    else if (timeId < timeNow) {
      $('.' + timeId).addClass("past");
    }
    else if (timeId > timeNow) {
      $('.' + timeId).addClass("future");
    }

  }
};

// update time blocks and date every top of the hour
setInterval(function(){
  if((moment().format('mm.ss')) === '00.00') {
    addCurrentDate;
  }
}, 500);

// on click of any save button get all tasks in time blocks and save them to local storage
$(".saveBtn").on("click", function() {

  // initiate an array to hold the current tasks
  var taskArray = [];
  
  // push all task objects into taskArray
  for (i = 9; i < 18; i++) {
    var text = $('.' + i).val();
    taskArray.push({
      id: parseInt(i),
      text: text
    });
  }

  // set taskArray in local storage
  localStorage.setItem('tasks', JSON.stringify(taskArray));

});

loadTasks();
  