// Toggle between Login and Signup Forms
function toggleForm() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');

    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
}

// Placeholder functions for login and signup actions
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const captchaInput = document.getElementById('captcha-input').value;

    if (captchaInput === generatedCaptcha) {
        console.log("Login successful:", username);
    } else {
        alert("Invalid CAPTCHA. Please try again.");
    }
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const signupCaptchaInput = document.getElementById('signup-captcha-input').value;

    if (signupCaptchaInput === generatedSignupCaptcha) {
        console.log("Signup successful:", username, email);
    } else {
        alert("Invalid CAPTCHA. Please try again.");
    }
}

// Placeholder for "Forgot Password" functionality
function forgotPassword() {
    const username = prompt("Please enter your username for password recovery:");
    if (username) {
        alert(`Password recovery instructions have been sent to the email associated with ${username}.`);
    }
}

// CAPTCHA generation
let generatedCaptcha = generateCaptcha();
let generatedSignupCaptcha = generateCaptcha();

function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

function refreshCaptcha() {
    generatedCaptcha = generateCaptcha();
    document.getElementById('captchaText').innerText = generatedCaptcha;
}

function refreshSignupCaptcha() {
    generatedSignupCaptcha = generateCaptcha();
    document.getElementById('signupCaptchaText').innerText = generatedSignupCaptcha;
}

// Initialize CAPTCHA on page load
document.getElementById('captchaText').innerText = generatedCaptcha;
document.getElementById('signupCaptchaText').innerText = generatedSignupCaptcha;
