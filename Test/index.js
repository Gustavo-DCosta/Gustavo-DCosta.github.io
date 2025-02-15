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

// manual dark mode toggle
const darkModeToggle = document.querySelector('#darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme', 
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  );
  alert("You have switched themes");
});

document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".skillsframe");

  if (!container) {
      console.error("No .skillsframe element found!");
      return;
  }
  
  let paragraphs = container.querySelectorAll("p");

  if (paragraphs.length >= 3) {
      container.insertBefore(paragraphs[2], paragraphs[1]);
      console.log("Swapped paragraph 2 and 3 successfully!");
  } else {
      console.error("Not enough <p> elements found inside .skillsframe");
  }
});

