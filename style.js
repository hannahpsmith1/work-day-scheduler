// console.log(this)
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


styleUpdate ()


function styleUpdate () {
    var time = parseInt(moment().format("H"));
    // time++
    // time = time%24
    // lines 38 and 39 were used to test the conditional formatting without having to wait for the top of the hour
    $(".col-sm-10").each(function () {
    // 'this' refers to each selection made by the query
    var elTime =$(this).parent().attr("id");
    console.log(time)
    console.log(elTime)
    if (time > elTime) {
// this will remove all classes and then only apply the classes associated with past present or future
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

// This will update the page without a need for refresh every 15 minutes
  }
  setInterval(function(){styleUpdate() }, 900000);


