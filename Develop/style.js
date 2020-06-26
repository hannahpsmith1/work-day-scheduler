console.log(this)
// change name of key, textboxID, name of button
function storage(key, boxId, buttonId){
    var nineBox = $(boxId).val()
    localStorage.getItem("timeNine")
    $(boxId).text(localStorage.getItem(key))

    var button = $(buttonId)
    console.log(button)

    button.on("click", function(){
        var nineBox = $(boxId).val()
        localStorage.setItem (key, nineBox);
    console.log(nineBox)

    });
}


storage ("timeNine", "#nineBox", "#nineButton");
storage ("timeTen", "#tenBox", "#tenButton");
storage ("timeEleven", "#elevenBox", "#elevenButton");
storage ("timeTwelve", "#twelveBox", "#twelveButton");
storage ("timeOne", "#oneBox", "#oneButton");
storage ("timeTwo", "#twoBox", "#twoButton");
storage ("timeThree", "#threeBox", "#threeButton");
storage ("timeFour", "#FourBox", "#FourButton");
storage ("timeFive", "#FiveBox", "#FiveButton");

console.log((moment().format("h A")))
console.log(this)


// var time = moment().format("H")-3;
// var time = Date.now().getHours();
// console.log(time)
styleUpdate ()
// // grab each of the time blocks
// $("#col-sm-10").each(function () {
//   // 'this' refers to each selection made by the query
//   console.log(this);
//   // get the current time info from the query (you have to save it in the form of an 'id' or something)
//   var elTime = $(this).attr('id');
//   // Logic - Add styling depending on the status: past, present, future
//   if (time > elTime) {
//     // past
//   }
//   else if (time === elTime) { 
//     // present
//   }
//   else {
//     // Future
//   }
// });

function styleUpdate () {
    var time = parseInt(moment().format("H"));
    // time++
    // time = time%24
    console.log("hello")
    // grab each of the time blocks
    $(".col-sm-10").each(function () {
    // 'this' refers to each selection made by the query
    var elTime =$(this).parent().attr("id");
    // $(".col-sm-10").css("background-color","red");
    // $(this).css("background-color","red");
    // get the current time info from the query (you have to save it in the form of an 'id' or something)
    // var elTime = $(this).attr('id');
    // Logic - Add styling depending on the status: past, present, future
    console.log(time)
    console.log(elTime)
    if (time > elTime) {
        // console.log(time)
        // console.log(elTime)
        $(this).removeClass();
        $(this).addClass("col-sm-10 past");
    }
    else if (time === elTime) { 
        $(this).removeClass();
        $(this).addClass("col-sm-10 present");
    }
    else {
        $(this).removeClass();
        $(this).addClass("col-sm-10 future");
    }
  });



// console.log("heloo")
// $(".col-sm-10").css("background-color","red");
  }
  setInterval(function(){styleUpdate() }, 3000);


