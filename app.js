console.log("Welcome proud parent! Click egg to hatch!")
let age = 1;
const gameBegin = $("#egg").click(function(){
    $("#egg").hide();
    const ager = setInterval(function (){
        console.log(`It's my ${age} Birthday!`);
        age++;
        if (age === 11){
            clearInterval(ager);
        }
    }, 3000);
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




