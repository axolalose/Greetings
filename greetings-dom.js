var textBoxElem = document.querySelector(".name");
var languageBtnElem = document.querySelector(".language");
var greetBtnElem = document.querySelector(".content");
var displayBox = document.querySelector(".box");
var showNumber = document.querySelector('.count');
var resetBtnElem = document.querySelector(".reset");
var countElem = document.querySelector("#count")
var msgId = document.getElementById('Text');

var nameStore = JSON.parse(localStorage.getItem(["Name"]));
console.log(nameStore)
var greetMe = Greetings(nameStore);

var counting = greetMe.count()
showNumber.innerHTML = counting;


function GreetingsDom() {
    var input = textBoxElem.value
    console.log(input)
    var radioBtnChecked = document.querySelector("input[name='check']:checked");
    if (radioBtnChecked) {
        var check = radioBtnChecked.value

    }
    if (input === undefined || input === "") {
        displayBox.innerHTML = "Invalid";
    }
    console.log(check)
    console.log(displayBox)

    displayBox.innerHTML = greetMe.greet(input, check)
    showNumber.innerHTML = greetMe.count()
    console.log(greetMe.getName());
    localStorage.setItem("Name", JSON.stringify(greetMe.getName()));
}

function resetBtn() {
    window.location.reload();``
    localStorage.clear();
    displayBox.innerHTML = "";
    //showNumber.innerHTML = "";
    //msgId.innerHTML = "";
    // message.innerHTML="";
   // counterElem.innerHTML = "";
}

resetBtnElem.addEventListener('click', resetBtn)
greetBtnElem.addEventListener('click', GreetingsDom)