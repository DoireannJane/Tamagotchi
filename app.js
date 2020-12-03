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
    }, 4000);
}
);


const overallDecrease = $("#egg").click(function(){
    const healthMinus = setInterval(function (){
        console.log(`health is declining`);
        health--;
        $("#Health").text(`Health:${health}`);
        if (health === 0){
            clearInterval(healthMinus);
            $("#egg").hide();
            $("#baby").hide();
            $("#child").hide();
            $("#adult").hide();
            $(".button").hide();
        }
    }, 3000);
});

const overallDecreaseE = $("#egg").click(function(){
    const energyMinus = setInterval(function (){
        console.log(`Hydra hungry!`);
        energy--;
        $("#Energy").text(`Energy:${energy}`);
        if (energy === 0) {
            clearInterval(energyMinus);
            $("#egg").hide();
            $("#baby").hide();
            $("#child").hide();
            $("#adult").hide();
            $(".button").hide();
        }
    }, 2500);
});
const overallDecreaseF = $("#egg").click(function(){
    const funMinus = setInterval(function (){
        console.log(`Hydra getting bored!`);
        fun--;
        $("#Health").text(`Health:${fun}`);
        if (fun === 0) {
            clearInterval(funMinus);
            $("#egg").hide();
            $("#baby").hide();
            $("#child").hide();
            $("#adult").hide();
            $(".button").hide();
        }
    }, 4000);
});


$("#feed").click(function(){
    if (age >=0) {
        $("#Energy").text(`Energy:${(energy+1)}`);
        console.log("Yum Yum says the Hydra!");
  };
});

$("#play").click(function(){
    if (age >=0){
    $("#Fun").text(`Fun:${(fun+1)}`);
    console.log("Woohoo says the hydra");
    }
  });

$("#sleep").click(function(){
    if (age >=0){
    $("#Health").text(`Health:${(health+1)}`);
    console.log("ZzZzZ says the Hydra!");
    }
  });




