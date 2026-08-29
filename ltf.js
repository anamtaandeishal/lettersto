
const introScreen = document.getElementById("introScreen");
const writingScreen = document.getElementById("writingScreen");
const toyScreen = document.getElementById("toyScreen");
const bearAnimationScreen =
    document.getElementById("bearAnimationScreen");





const fighterLetter =
    document.getElementById("fighterLetter");

const teddyBear =
    document.getElementById("teddyBear");

const movingLetter =
    document.getElementById("movingLetter");

const courierBox =
    document.getElementById("courierBox");

const animationMessage =
    document.getElementById("animationMessage");

const finishedMessage =
    document.getElementById("finishedMessage");


function openWritingScreen() {

    introScreen.style.display = "none";

    writingScreen.classList.add("show");

}

function goToToySelection() {

    const letter = fighterLetter.value.trim();

    if (letter === "") {

        alert("Please write your letter before continuing ♡");

        return;
    }

    localStorage.setItem(
        "fighterLetter",
        letter
    );

    writingScreen.classList.remove("show");

    toyScreen.classList.add("show");

}


function selectBear() {

    toyScreen.classList.remove("show");

    bearAnimationScreen.classList.add("show");

    startBearAndLetterAnimation();

}



function startBearAndLetterAnimation() {

   

    teddyBear.style.animation = "none";
    movingLetter.style.animation = "none";
    courierBox.style.opacity = "0";

    teddyBear.style.left = "32%";
    teddyBear.style.bottom = "25%";

    movingLetter.style.left = "25%";
    movingLetter.style.bottom = "48%";
    movingLetter.style.opacity = "0";


    animationMessage.innerText =
        "Your letter is ready to go... ♡";

    teddyBear.style.animation =
        "bearIdle 2s ease-in-out infinite";


    setTimeout(function () {

        movingLetter.style.opacity = "1";

    }, 1000);

    setTimeout(function () {

        courierBox.style.opacity = "1";

        animationMessage.innerText =
            "Sending your letter with a little friend...";

    }, 2200);

    setTimeout(function () {

        animationMessage.innerText =
            "Packing everything up...";

        movingLetter.style.animation =
            "letterIntoBox 2s ease-in forwards";

    }, 3200);

    setTimeout(function () {

        animationMessage.innerText =
            "Your little friend is coming too! ♡";

        teddyBear.style.animation =
            "bearIntoBox 2.5s ease-in forwards";

    }, 5100);


    
    setTimeout(function () {

        animationMessage.innerText =
            "All packed and ready! ♡";

        const flap =
            courierBox.querySelector(".box-flap");

        if (flap) {

            flap.style.animation =
                "flapClose 0.8s ease forwards";

        }

    }, 7600);
    setTimeout(function () {

        animationMessage.innerText =
            "Your letter is on its way. ♡";

        finishedMessage.classList.add("show");

    }, 8800);
}
function returnToHome() {
    window.location.href = "mainpage.html";
}