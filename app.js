console.log("Welcome proud parent! Click egg to hatch!")

$("#egg").click(function(){
    $("#egg").hide();

  });

  function becomeChild(){
    $("#baby").hide();
  }
 const timer = setInterval(becomeChild, 1000);
 clearInterval(timer);
 

 
 
