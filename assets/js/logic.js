// showing questions, selecting the answers, timer

var startQuizButton = document.getElementById("start");

var timeRemaining = 75;
startQuizButton.addEventListener("click", function(){
    console.log("clicked")
    var countTime = setInterval(function () {console.log("Hello")
        timeRemaining --
        console.log(timeRemaining)

    
        if (timeRemaining <= 0) {
            clearInterval(countTime);
        }
}, 1000);

} );




// document.addEventListener("keydown", (event) => {
//     console.log(event)
// })