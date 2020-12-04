var addCurrentDate = function() {
    // create variable to hold current date
    var todayDate =  moment();
    
    //display variable in the empty p tag with id of 'currentDay'
    $("#currentDay").append(todayDate.format('MMM. Do, YYYY'));
};

  addCurrentDate();