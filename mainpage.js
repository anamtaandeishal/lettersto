
let selectedChoice = "";
function openChoice(choice) {
    selectedChoice = choice;
    const box = document.getElementById("openedChoice");

    const icon = document.getElementById("choiceIcon");

    const heading = document.getElementById("choiceHeading");

    const text = document.getElementById("choiceText");
    if (choice === "receiver") {
 icon.textContent = "♡";
        heading.textContent =
    "A letter is waiting for you.";
text.textContent =
            "Somewhere out there, words are waiting to find their way to you.";
    }
    else {
icon.textContent = "✎";
     heading.textContent =
            "There are words waiting to be written.";
    text.textContent =
            "Choose who you want to write to, and let your words become someone's story.";

    }
    box.classList.add("show");
 box.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}
function continueChoice() {

 if (selectedChoice === "receiver") {

        window.location.href = "receiver.html";
    }
else if (selectedChoice === "writer") {
        window.location.href = "writer.html";
    }
}