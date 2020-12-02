console.log("Welcome proud parent! Click egg to hatch!")

const gameBegin = $("#egg").click(function(){
    $("#egg").hide();
    let age = 1;
    const ager = setInterval(function (){
        console.log(`It's my ${age} Birthday!`);
        age++;
        if (age === 11){
            clearInterval(ager);
        }
    }, 1000);
});

// let age = 1;
// const setAger = function setAger() {
//     const ager = setInterval(function (){
//         console.log(`It's my ${age} Birthday!`);
//         age++;
//         if (age === 11){
//             clearInterval(ager);
//         }
//     }, 1000);
// }



//  $("#egg").click(function(){
//     console.log(`It's my ${age} Birthday!`)
//   });
 

//   function becomeChild(){
//     $("#baby").hide();
//   }
//  const timer = setInterval(becomeChild, 1000);
//  clearInterval(timer);

$("#feed").click(function(){
    console.log("Yum Yum says the Hydra!")
  });

$("#play").click(function(){
    console.log("Woohoo says the hydra")
  });
$("#sleep").click(function(){
    console.log("ZzZzZ says the Hydra!")
  });





 
 
