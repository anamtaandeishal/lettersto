const cafeSound = document.getElementById("cafeSound");
const rainSound = document.getElementById("rainSound");
const coffeeSound = document.getElementById("coffeeSound");
const diaryPage = document.getElementById("diaryPage");
const diaryText = document.getElementById("diaryText");
const diaryDate = document.getElementById("diaryDate");
const soundPanel = document.getElementById("soundPanel");
const startOverlay = document.getElementById("startOverlay");
function startExperience() {


    cafeSound.volume = 0.5;
    rainSound.volume = 0.3;
    coffeeSound.volume = 0.3;
    cafeSound.play().catch(() => {});
    rainSound.play().catch(() => {});
    coffeeSound.play().catch(() => {});
    startOverlay.classList.add("hidden");
}
function toggleSoundPanel() {

    soundPanel.classList.toggle("show");

}
function changeVolume(sound, value) {

    if (sound === "cafe") {
        cafeSound.volume = value;
    }

    if (sound === "rain") {
        rainSound.volume = value;
    }

    if (sound === "coffee") {
        coffeeSound.volume = value;
    }

}
function openDiary() {

    diaryPage.classList.add("open");

    const today = new Date();

    diaryDate.value =
        today.toISOString().split("T")[0];

    loadDiary();
}
function saveDiary() {

    const text = diaryText.value;
    const date = diaryDate.value;

    localStorage.setItem(
        "letterToDiaryText",
        text
    );

    localStorage.setItem(
        "letterToDiaryDate",
        date
    );
    alert("Your diary entry has been saved ♡");
}
function loadDiary() {

    const savedText =
        localStorage.getItem("letterToDiaryText");

    const savedDate =
        localStorage.getItem("letterToDiaryDate");

    if (savedText) {
        diaryText.value = savedText;
    }

    if (savedDate) {
        diaryDate.value = savedDate;
    }

}

function exitDiary() {

    diaryPage.classList.remove("open");

}
document.addEventListener("click", function(event) {

    if (
        !soundPanel.contains(event.target) &&
        !event.target.classList.contains("sound-button")
    ) {

        soundPanel.classList.remove("show");

    }

});