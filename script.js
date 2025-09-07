// ====================
// Part 1: Event Handling
// ====================

// Show message on button click
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "🎉 You clicked the button!";
});

// React to typing in input box
document.getElementById("typingBox").addEventListener("input", function(event) {
  document.getElementById("message").textContent = `You typed: ${event.target.value}`;
});

// ====================
// Part 2: Interactive Elements
// ====================

// Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Dropdown Menu
document.getElementById("menuToggle").addEventListener("click", function() {
  document.getElementById("dropdownMenu").classList.toggle("hidden");
});

// Counter
let count = 0;
document.getElementById("increase").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  document.getElementById("counter").textContent = count;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    question.parentElement.classList.toggle("active");
  });
});

// ====================
// Part 3: Form Validation
// ====================
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let message = "";

  // Validate name
  if (name.length < 3) {
    message = "❌ Name must be at least 3 characters long.";
  }
  // Validate email using regex
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message = "❌ Please enter a valid email address.";
  }
  // Validate password length
  else if (password.length < 6) {
    message = "❌ Password must be at least 6 characters.";
  }
  else {
    message = "✅ Form submitted successfully!";
    // In real-world apps, you’d now send the data to a server
  }

  document.getElementById("formMessage").textContent = message;
});
