var addCurrentDate = function() {
    // create variable to hold current date
    var todayDate =  moment();
    
    //display variable in the empty p tag with id of 'currentDay'
    $("#currentDay").append(todayDate.format('MMM. Do, YYYY'));

    //run function to show colored times
    timeCheck();
};

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

setInterval(timeCheck, (1000*60) * 15);




$(".task-input").on("click", function() {

  // open text box for user to input task text


});

addCurrentDate();
  