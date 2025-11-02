// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} 
from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPPSJkIk7uM4yuSwGtYbGJiMbj23q2eFA",
  authDomain: "authentication-app-3f05c.firebaseapp.com",
  projectId: "authentication-app-3f05c",
  storageBucket: "authentication-app-3f05c.firebasestorage.app",
  messagingSenderId: "37141128681",
  appId: "1:37141128681:web:e7c9a8f8c5cb084643d778",
  measurementId: "G-W8DMJBCYFW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Switch between login and signup forms
function switchForm(showLogin) {
  document.getElementById("signup-form").classList.toggle("hidden", showLogin);
  document.getElementById("login-form").classList.toggle("hidden", !showLogin);
  document.getElementById("welcome-login").classList.toggle("hidden", showLogin);
  document.getElementById("welcome-signup").classList.toggle("hidden", !showLogin);
}

// Add event listeners for form switching
document.getElementById("switch-to-login")?.addEventListener("click", (e) => {
  e.preventDefault();
  switchForm(true);
});

document.getElementById("switch-to-signup")?.addEventListener("click", (e) => {
  e.preventDefault();
  switchForm(false);
});

// Handle form submissions
function handleAuth(formType, email, password, confirmPassword = "") {
  if (formType === "signup") {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (password.length < 6) {
      alert("Password should be at least 6 characters!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Signup Successful!");
        window.location.href = "welcome.html";
      })
      .catch((error) => alert(error.message));
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login Successful!");
        window.location.href = "welcome.html";
      })
      .catch((error) => alert(error.message));
  }
}

// Add form submit listeners
document.getElementById("signupForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  handleAuth("signup", email, password, confirmPassword);
});

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  handleAuth("login", email, password);
});

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user.email);
  }
});

