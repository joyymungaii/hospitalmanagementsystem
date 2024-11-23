// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBw-LBdjMgvxWFQScTqSEEMcHXNmdQh91g",
  authDomain: "hospital-system-b6a60.firebaseapp.com",
  databaseURL: "https://hospital-system-b6a60-default-rtdb.firebaseio.com",
  projectId: "hospital-system-b6a60",
  storageBucket: "hospital-system-b6a60.appspot.com",
  messagingSenderId: "626119506670",
  appId: "1:626119506670:web:22d462a6686f1de6e491ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(function() {
    messageDiv.style.opacity = 0;
  }, 5000);
}

const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === "doc@gmail.com" && password === "123456") {
    window.location.href = 'nana.html';
  } else if (email === "pat@gmail.com" && password === "654321") {
    window.location.href = 'p-dash.html';
  } else {
    showMessage('Incorrect Email or Password', 'signInMessage');
  }
});