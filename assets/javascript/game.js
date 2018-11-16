var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    $(".crystals").empty();

random_result = Math.floor((Math.random() * 69 )+ 30);

$(".result").html('Random Result: ' + random_result);



for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;
    console.log(random)

    
    
    var crystal = $("<div>");

    crystal.attr({
        "class": 'crystal',

        "data-random": random
    });
    crystal.html(random);

    $(".crystals").append(crystal);
   
}
}

resetAndStart();





$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    console.log(previous);

    if(previous > random_result){
        lost--;
        $("#lost").html(win);
        previous = 0;
        resetAndStart();
        


    }
    else if(previous === random_result) {
        win++;
        $("#win").html(win);
        previous = 0;
        resetAndStart();
    }


});













// Psuedo Coding

// game with 4 crystals
//every crystal needs to have a random number between 1-12
//a new random number should be generated every time u win or lose to the 4 crystals
// clicking a crystal should add with the previous result until it equals the total
//if it is greater than the total, we lose on the loss counter 
//if it is equal we increment a win counter