
const letterInput =
    document.getElementById("loveLetter");

const letterDate =
    document.getElementById("letterDate");

const writingScreen =
    document.getElementById("writingScreen");

const animationScreen =
    document.getElementById("oceanAnimation");

const animationLetter =
    document.getElementById("animationLetter");

const bottle =
    document.getElementById("bottle");

const animationText =
    document.getElementById("animationText");

const insideLetter =
    document.getElementById("letterInside");

const today = new Date();

letterDate.value =
    today.toISOString().split("T")[0];



document
    .querySelectorAll(".color-circle")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                button.style.transform =
                    "scale(1.15)";

                setTimeout(function() {

                    button.style.transform =
                        "";

                }, 200);

            }
        );

    });



function finishLetter() {

    const text =
        letterInput.value.trim();


    if (text === "") {

        alert(
            "Please write your letter before continuing ♡"
        );

        return;
    }


   

    localStorage.setItem(
        "lovedOneLetter",
        text
    );

    localStorage.setItem(
        "lovedOneLetterDate",
        letterDate.value
    );


   
    writingScreen.style.display =
        "none";


   

    animationScreen.classList.add(
        "show"
    );


    startAnimation();
}



function startAnimation() {


 

    animationLetter.className =
        "animation-letter";

    bottle.className =
        "bottle";

    insideLetter.style.opacity =
        "0";


   
    animationText.innerText =
        "Your letter is ready... ♡";

    setTimeout(function() {

        bottle.classList.add(
            "bottle-visible"
        );

        animationText.innerText =
            "Putting your letter inside...";

    }, 1200);


    setTimeout(function() {

        animationLetter.classList.add(
            "letter-into-bottle"
        );

    }, 2200);

    setTimeout(function() {

        insideLetter.style.opacity =
            "1";

        animationText.innerText =
            "Your message is safely sealed. ♡";

    }, 4700);


    setTimeout(function() {

        bottle.classList.remove(
            "bottle-visible"
        );

        void bottle.offsetWidth;

        bottle.classList.add(
            "bottle-to-shore"
        );

        animationText.innerText =
            "Taking your message to the sea...";

    }, 5800);

    setTimeout(function() {

        bottle.classList.remove(
            "bottle-to-shore"
        );

        void bottle.offsetWidth;

        bottle.classList.add(
            "bottle-into-water"
        );

        animationText.innerText =
            "And now, into the ocean.";

    }, 8400);


    

    setTimeout(function() {

        bottle.classList.remove(
            "bottle-into-water"
        );

        void bottle.offsetWidth;

        bottle.classList.add(
            "bottle-floats-away"
        );

        animationText.innerText =
            "May your words find their way. ♡";

    }, 10500);

}