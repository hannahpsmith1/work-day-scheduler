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
