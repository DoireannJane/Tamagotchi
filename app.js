console.log("Welcome proud parent! Click egg to hatch!")
// $('input').keyup(function(event) {
//     if (event.keyCode === 13) {
//         $("#id_of_button").click();
//     }
// });
// $('input').value.on
let age = 0;
let health = 10;
let fun = 10;
let energy = 10;
const gameBegin = $("#egg").click(function(){
    $("#egg").hide();
    $("body").css("background-color","black");
    $(".age").css("color","white");
    $(".overall").css("color","white");
    const ager = setInterval(function (){
        console.log(`It's my Birthday!`);
        age++;
        $(".age").text(`age: ${age} years old`);
        if (age === 3) {
            $("#baby").hide();
            $("body").css("background-color","white");
            $(".age").css("color","black");
            $(".overall").css("color","black");
        }
        if (age ===6){
            $("#child").hide();
            $("body").css("background-color","black");
            $(".age").css("color","white");
            $(".overall").css("color","white");
        }
        if (age === 20){
            clearInterval(ager);
        }
    }, 1000);
}
);
const overallDecrease = $("#egg").click(function(){
    const healthMinus = setInterval(function (){
        console.log(`health is declining`);
        health--;
        $("#Health").text(`health:${health}`);
        if (health === 0) {
            clearInterval(healthMinus);
            $("#egg").hide();
            $("#baby").hide();
            $("#child").hide();
            $("#adult").hide();
            $(".button").hide();
        }
    }, 2000);
});


$("#feed").click(function(){
    if (age >= 0) {
    console.log("Yum Yum says the Hydra!");
  };
});

$("#play").click(function(){
    if (age >=0){
    console.log("Woohoo says the hydra")
    }
  });

$("#sleep").click(function(){
    if (age >=0){
    console.log("ZzZzZ says the Hydra!")
    $("#Health").text(`health:${(health+1)}`);
    }
  });




