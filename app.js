// Clickng 'COMPLETED' button removes item from TO-DO list
// And adds it to Things That Are Done list

$(document).on("click","#completed-btn", function () {

    // Select the body of the current div and assign it to $oldDiv
    // 'this' is the button the user has clicked
    // .parent().parent() traverses the DOM to select the entire div text
    
    $oldDiv = $(this).parent().parent();
    
    // Create the new div
    
    $newDoneDiv = $("<div>").text($oldDiv.text()).addClass("done");
    
    // Create a DELETE button
    
    $deleteButton = $("<p>").html('<button type="button" name="button" id="delete-btn">DELETE</button>')
    
    // Append the new div with delete button
    
    $("#completed").append($newDoneDiv.append($deleteButton));
    
    // After we've moved the div to Completed list
    // remove it from To Do List
    
    $oldDiv.remove();
})

$(document).on("click", "#delete-btn", function () {
    $(this).parent().parent().remove();
})

$(document).ready(function () {

    // Action to take when user clicks 'ADD' button
    
    $("#submit").click(function () {

        // assign value of input box to variable
        
        $toDoUserInput = $("#input-box").val();
       
        // create new div with text of input box, give div class of to-do
        
        $newToDoDiv = $("<div>").text($toDoUserInput).addClass("to-do");
        
        // create a 'COMPLETED' button for each new task
        
        $doneButton = $("<p>").html('<button type="button" name="button" id="completed-btn">COMPLETED</button>');
        
        // append the new task and its COMPLETED button to the to-do-list
        
        $("#to-do-list").append($newToDoDiv.append($doneButton));
    })

    

})




