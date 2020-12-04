

var addCurrentDate = function() {
    // create variable to hold current date
    var todayDate =  moment();
    
    //display variable in the empty p tag with id of 'currentDay'
    $("#currentDay").append(todayDate.format('MMM. Do, YYYY'));

    timeCheck();
};

var timeCheck = function() {
  // get current time
  var timeNow = parseInt(moment().format('H'));
  
  var childArray = [];
  
  // get array of all ids in child elements of container div
  $('div','.container').each(function(){
    childArray.push($(this).attr('id')); 
  });

  // Remove item 'undefined' from array
  childArray = childArray.filter(function(e) { return e !== undefined })

  // compare to times in grid
  for (i = 0; i < childArray.length; i++) {
    var timeId = parseInt(childArray[i]);

    if(timeId === timeNow) {
      $('.' + timeId).addClass("bg-danger");
    }
    else if (timeId < timeNow) {
      $('.' + timeId).addClass("bg-secondary");
    }
    else {
      $('.' + timeId).addClass("bg-success");
    }

  }
}



$(".task-input").on("click", function() {

  var text = $(this).find("p")
    .text()
    .trim();

  var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);
  
  $(this).replaceWith(textInput);
});

addCurrentDate();
  