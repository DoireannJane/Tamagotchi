console.log("Welcome proud parent! Click egg to hatch!")
let age = 0;
const gameBegin = $("#egg").click(function(){
    $("#egg").hide();
    $("body").css("background-color","black");
    $(".age").css("color","white");
    const ager = setInterval(function (){
        console.log(`It's my Birthday!`);
        age++;
        $(".age").text(`age: ${age} years old`);
        if (age === 3) {
            $("#baby").hide();
            $("body").css("background-color","white");
            $(".age").css("color","black");
        }
        if (age ===6){
            $("#child").hide();
            $("body").css("background-color","black");
            $(".age").css("color","white");
        }
        if (age === 10){
            clearInterval(ager);
        }
    }, 2000);
});


$("#feed").click(function(){
    if (age > 1) {
    console.log("Yum Yum says the Hydra!")
  };
});
$("#play").click(function(){
    if (age > 1){
    console.log("Woohoo says the hydra")
    }
  });

$("#sleep").click(function(){
    if (age > 1){
    console.log("ZzZzZ says the Hydra!")
    }
  });




