var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    $(".crystals").empty();

    var images = [
        'https://ae01.alicdn.com/kf/HTB1qMDtdGQoBKNjSZJnq6yw9VXaS/145g-natural-red-quartz-cluster-beautiful-red-aura-angel-crystal-cluster-reiki-Titanium-coating-cluster-healing.jpg_640x640.jpg',
        'http://www.thecrystalhealer.co.uk/WebRoot/Eclipse/Shops/thecrystalhealer/5470/A117/5364/C383/74EE/0A33/658A/F448/Titanium-quartz-13_ml.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/718V7SFfzpL._SL1200_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81gB58rGmcL._SY355_.jpg',];


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