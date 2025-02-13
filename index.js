const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check local storage for saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save theme preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "🌞 Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙 Dark Mode";
    }
});
