
const letterScreen =
    document.getElementById("letterScreen");

const calendarScreen =
    document.getElementById("calendarScreen");


const burialScreen =
    document.getElementById("burialScreen");

const futureLetter =
    document.getElementById("futureLetter");

const futureDate =
    document.getElementById("futureDate");

const person =
    document.getElementById("person");

const littleLetter =
    document.getElementById("littleLetter");

const woodenBox =
    document.getElementById("woodenBox");

const shovel =
    document.getElementById("shovel");

const hole =
    document.getElementById("hole");

const buriedMarker =
    document.getElementById("buriedMarker");

const animationText =
    document.getElementById("animationText");

const finalMessage =
    document.getElementById("finalMessage");

const chosenDate =
    document.getElementById("chosenDate");

const today = new Date();

const year = today.getFullYear();

const month =
    String(today.getMonth() + 1).padStart(2, "0");

const day =
    String(today.getDate()).padStart(2, "0");

futureDate.min =
    `${year}-${month}-${day}`;
function finishLetter() {

    const letter =
        futureLetter.value.trim();

    if (letter === "") {

        alert(
            "Write your letter before continuing ♡"
        );

        return;
    }

    localStorage.setItem(
        "futureMeLetter",
        letter
    );

    letterScreen.style.display = "none";
    calendarScreen.classList.add("show");

}

function startBurial() {

    const selectedDate =
        futureDate.value;


    if (!selectedDate) {

        alert(
            "Please choose a date first ♡"
        );

        return;
    }


    const chosen =
        new Date(selectedDate + "T00:00:00");


    if (chosen < today) {

        alert(
            "Please choose a future date ♡"
        );

        return;
    }

    localStorage.setItem(
        "futureMeDate",
        selectedDate
    );

    calendarScreen.classList.remove("show");
    burialScreen.classList.add("show");
    runBurialAnimation(selectedDate);

}
function runBurialAnimation(selectedDate) {

    animationText.innerText =
        "Your letter is being kept safe...";

    animationText.style.opacity = "1";

    setTimeout(function() {

        animationText.innerText =
            "Putting your letter into a little box...";

        littleLetter.classList.add("show");

    }, 3000);

    setTimeout(function() {

        animationText.innerText =
            "Closing it safely...";

        woodenBox.classList.add("show");

    }, 5000);

    setTimeout(function() {

        woodenBox.classList.add("close-box");

    }, 5800);

    setTimeout(function() {

        animationText.innerText =
            "Finding a safe place in the garden...";

        shovel.classList.add("show");

        hole.classList.add("show");

    }, 6800);

    setTimeout(function() {

        animationText.innerText =
            "Burying your letter...";

        shovel.classList.remove("show");

        woodenBox.classList.add("bury");

    }, 9500);
    setTimeout(function() {

        animationText.innerText =
            "Your letter is safe now. ♡";

        buriedMarker.classList.add("show");

    }, 12500);
    setTimeout(function() {

        const readableDate =
            new Date(
                selectedDate + "T00:00:00"
            ).toLocaleDateString(
                undefined,
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            );




        finalMessage.classList.add("show");

    }, 14500);

}
function goBack() {

    window.location.href =
        "mainpage.html";

}
window.addEventListener(
    "load",
    function() {

        const savedLetter =
            localStorage.getItem(
                "futureMeLetter"
            );

        const savedDate =
            localStorage.getItem(
                "futureMeDate"
            );


        if (savedLetter) {

            futureLetter.value =
                savedLetter;

        }


        if (savedDate) {

            futureDate.value =
                savedDate;

        }

    }
);