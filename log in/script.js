document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Replace this with your authentication logic
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Example: Check if username and password are correct
        if (username === "user" && password === "password") {
            alert("Login successful!");
            // You can redirect to another page here
        } else {
            alert("Login failed. Please try again.");
        }
    });

    const loginButton = document.getElementById("login-button");

    // Add a hover effect with CSS transitions
    loginButton.addEventListener("mouseenter", function () {
        loginButton.style.backgroundColor = "#0056b3";
    });

    loginButton.addEventListener("mouseleave", function () {
        loginButton.style.backgroundColor = "#007bff";
    });
});
