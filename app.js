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
let energyInterval = null;

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
        if (health ===0 || fun ===0 || health ===0){
            clearInterval(ager);
        }
    }, 2000);
}
);

const setDecreaseHealth = function(){
    const healthInterval = setInterval(function (){
        console.log(`health is declining`);
        health--;
        $("#Health").text(`Health:${health}`);
        if (health === 0){
            clearInterval(healthInterval);
            $("#egg").hide();
            $("#baby").hide();
            $("#child").hide();
            $("#adult").hide();
            $(".button").hide();
        }
    }, 3000);
};

const overallDecreaseH = $("#egg").click(setDecreaseHealth);

const setDecreaseEnergy = function(){
   const energyInterval = setInterval(function (){
        console.log(`Hydra hungry!`);
        energy--;
        $("#Energy").text(`Energy:${energy}`);
        if (energy === 0) {
            clearInterval(energyInterval);
            $("#egg").hide();
            $("#baby").hide();
            $("#child").hide();
            $("#adult").hide();
            $(".button").hide();
        }
    }, 3500);
};
const overallDecreaseE = $("#egg").click(setDecreaseEnergy);

const setDecreaseFun = function(){
    const funMinus = setInterval(function (){
        console.log(`Hydra getting bored!`);
        fun--;
        $("#Fun").text(`Fun:${fun}`);
        if (fun === 0) {
            clearInterval(funMinus);
            $("#egg").hide();
            $("#baby").hide();
            $("#child").hide();
            $("#adult").hide();
            $(".button").hide();
        }
    }, 4000);
};
const overallDecreaseF = $("#egg").click(setDecreaseFun);
// const energyIncrease = function energyIncrease() {
//     if (age <= 10){
//         $("#Energy").text(`Energy:${(energy+1)}`);
//     }
    
// }
const dblClickE = $("#feed").dblclick(function(){
    clearInterval(energyInterval);
    if (age >=0 && energy <= 6) {
        energy+=4;
        $("#Energy").text(`Energy:${(energy)}`);
        console.log("Yum Yum says the Hydra!");}
        if (energy<=10) setDecreaseEnergy();
});

const clickE = $("#feed").click(function(){
    clearInterval(energyInterval);
    if (age >=0 && energy <= 9) {
        energy+=1;
        $("#Energy").text(`Energy:${(energy)}`);
        console.log("Yum Yum says the Hydra!");
    }
    if (energy<=10) setDecreaseEnergy();

});

const clickP = $("#play").click(function(){
    clearInterval(funInterval);
    if (age >=0 && fun <= 9) {
        energy+=1;
    $("#Fun").text(`Fun:${(fun)}`);
    console.log("Woohoo says the hydra");
    }
  });

const dblclickP = $("#play").dblclick(function(){
    clearInterval(funInterval);
    if (age >=0 && fun <= 6){
    $("#Fun").text(`Fun:${(fun)}`);
    console.log("Woohoo says the hydra");
    }
  });

const clickS = $("#sleep").click(function(){
    clearInterval(healthInterval);
    if (age >=0 && fun <= 9){
    $("#Health").text(`Fun:${(health)}`);
    console.log("ZzZzZ says the Hydra!");
    }
  });

const dblclickS = $("#sleep").dblclick(function(){
    clearInterval(healthInterval);
    if (age >=0 && fun <= 6){
    $("#Health").text(`Fun:${(health)}`);
    console.log("ZzZzZ says the Hydra!");
    }
  });






