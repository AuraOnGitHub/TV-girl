const storyText = document.getElementById("story-text");
const nextButton = document.getElementById("next-button");
const storySection = document.getElementById("story-section");
const questionSection = document.getElementById("question-section");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const floatingContainer = document.getElementById("floating-container");

const storyParts = [
    "Once upon a time, a boy met a girl...",
    "I remember he had the mentality that he would not go for any girl in his first year at all",
    "The mentality lasted until he met her in front of tasty vines and something sparked in him, he knew he couldn't let her go just like that",
    "He took the chance of her being in the same faculty as him and copped her digits",
    "But there comes the problem... he didn't know how to start a conversation with her and he couldn't ask his friends for help because he didn't want them to know about it yet",
    "He got so immensely jealous when he saw her talking to other guys and he didn't know what to do",
    "He also had the idea that you didn't fuck with him at all cause you basically gave him no face",
    "It all changed that night when he blindly if not stupidly asked you for a kiss without even getting to know you at all ",
    "YOU NODDED YES",

    "And now, he has one important question to ask..."
];

let currentPart = 0;
let sadInterval;

// Story progression
nextButton.addEventListener("click", () => {
    if (currentPart < storyParts.length - 1) {
        currentPart++;
        storyText.innerText = storyParts[currentPart];
    } else {
        storySection.style.display = "none"; // Hide story
        questionSection.style.display = "block"; // Show question
    }
});

// Function to create floating elements (hearts/sad emojis)
function createFloatingElement(type) {
    const element = document.createElement("div");
    element.classList.add("floating");

    if (type === "heart") {
        element.innerHTML = "❤️";
        element.style.color = "red";
    } else {
        element.innerHTML = "😢";
        element.style.color = "gray";
    }

    element.style.left = Math.random() * 100 + "vw"; 
    element.style.animationDuration = (Math.random() * 2 + 6) + "s";

    floatingContainer.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 8000);
}

// When "Yes" is clicked, floating hearts appear and stop sad emojis
yesButton.addEventListener("click", () => {
    if (sadInterval) {
        clearInterval(sadInterval);
    }
    setInterval(() => createFloatingElement("heart"), 800);
});

// When "No" is clicked, floating sad emojis appear
noButton.addEventListener("click", () => {
    sadInterval = setInterval(() => createFloatingElement("sad"), 800);
});
