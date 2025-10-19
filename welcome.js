import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth,signOut,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPPSJkIk7uM4yuSwGtYbGJiMbj23q2eFA",
  authDomain: "authentication-app-3f05c.firebaseapp.com",
  projectId: "authentication-app-3f05c",
  storageBucket: "authentication-app-3f05c.firebasestorage.app",
  messagingSenderId: "37141128681",
  appId: "1:37141128681:web:e7c9a8f8c5cb084643d778",
  measurementId: "G-W8DMJBCYFW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userEmail").textContent = `Welcome, ${user.email}`;
  } else {
    window.location.href = "index.html";
  }
});

// Logout function
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => alert("Error logging out: " + error.message));
});

// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
// import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAPPSJkIk7uM4yuSwGtYbGJiMbj23q2eFA",
//   authDomain: "authentication-app-3f05c.firebaseapp.com",
//   projectId: "authentication-app-3f05c",
//   storageBucket: "authentication-app-3f05c.firebasestorage.app",
//   messagingSenderId: "37141128681",
//   appId: "1:37141128681:web:e7c9a8f8c5cb084643d778",
//   measurementId: "G-W8DMJBCYFW",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Show message function
// function showMessage(message, type = 'error') {
//   const messageEl = document.getElementById('message');
//   messageEl.textContent = message;
//   messageEl.className = `message ${type}`;
//   messageEl.style.display = 'block';

//   setTimeout(() => {
//     messageEl.style.display = 'none';
//   }, 5000);
// }

// // Check authentication state
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     document.getElementById('userEmail').textContent = `Welcome, ${user.email}`;
//   } else {
//     // Redirect to login if not authenticated
//     window.location.href = "index.html";
//   }
// });

// // Logout function
// function logout() {
//   signOut(auth)
//     .then(() => {
//       showMessage("Logged out successfully!", 'success');
//       setTimeout(() => {
//         window.location.href = "index.html";
//       }, 1500);
//     })
//     .catch((error) => {
//       showMessage("Error logging out: " + error.message);
//     });
// }

// Event Listeners
// document.getElementById('logoutBtn')?.addEventListener('click', logout);
