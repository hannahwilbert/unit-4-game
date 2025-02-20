var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    $(".crystals").empty();

    var images = [
        'https://rockswithsass.com/cdn/shop/files/Green_Aventurine_52f83578-9603-41d7-81b1-8fbb6ec56026_1600x.png?v=1657055971',
        'https://www.pngall.com/wp-content/uploads/14/Crystal-PNG-Pic.png',
        'https://www.pikpng.com/pngl/b/233-2336809_crystals-tumblr-png-clipart.png',
        'https://atlas-content-cdn.pixelsquid.com/stock-images/clear-quartz-crystals-crystal-D5QkYm9-600.jpg',];


    random_result = Math.floor((Math.random() * 69) + 30);

    $(".result").html('Match This Number: ' + random_result);



    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");

        crystal.attr({
            "class": 'crystal',

            "data-random": random,
            
             
        });
        crystal.css({
            "background-image":"url('" + (images[i]) + "')",
            "background-size":"cover"
        });
        $(".crystals").append(crystal);

    }
    $("#previous").html("Total Score: " + previous);
}

resetAndStart();





$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if (previous > random_result) {
        lost++;
        $("#lost").html("Losses: " + lost);
        previous = 0;

        resetAndStart();



    }
    else if (previous === random_result) {
        win++;
        $("#win").html("Wins: " + win);

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
