console.log("document")
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

// $("#threePm").text()
// console.log($("#threePm").text())


ellet time = moment().hour('H');
// grab each of the time blocks
$("<time-block-class-here>").each(function () {
  // 'this' refers to each selection made by the query
  console.log(this);
  // get the current time info from the query (you have to save it in the form of an 'id' or something)
  let elTime = $(this).attr('id');
  // Logic - Add styling depending on the status: past, present, future
  if (time > elTime) {
    // past
  }
  else if (time === elTime) { 
    // present
  }
  else {
    // Future
  }
});
// Your html id for each 'row' should be something like this: (1pm)
<div class="row" id="13">
  ...
</div>
