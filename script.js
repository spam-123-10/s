const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const clickMeBtn = document.getElementById("clickMeBtn");

noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
});

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
});

popup.addEventListener("click", (event) => {
    // Check if the click is on the "Click Me" button
    if (event.target.id === "clickMeBtn") {
        // Redirect to 1.html
        window.location.href = "1.html";
    } else {
        popup.style.display = "none";
    }
});

// Hide the popup initially
popup.style.display = "none";
