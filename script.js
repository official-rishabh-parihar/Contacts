const pinInput = document.getElementById("pinInput");
const submitButton = document.getElementById("submitButton");
const validPIN = "612828"; // Change this to your desired PIN

submitButton.addEventListener("click", () => {
    const enteredPIN = pinInput.value;
    if (enteredPIN === validPIN) {
        window.location.href = "contact.html"; // Redirect to the protected page
        window.sessionStorage.setItem("validPin", true)
    } else {
        alert("Invalid PIN. Please try again.");
        pinInput.value = ""; // Clear the input field
    }
});

pinInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        submitButton.click(); // Simulate a click on the submit button when Enter is pressed
    }
});