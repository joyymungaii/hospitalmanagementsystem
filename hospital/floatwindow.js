import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgJCHqDJDJ2iXN_PTX4iNtkXFeg4Slaxg",
  authDomain: "login-form-d7944.firebaseapp.com",
  projectId: "login-form-d7944",
  storageBucket: "login-form-d7944.appspot.com",
  messagingSenderId: "892546691212",
  appId: "1:892546691212:web:41d647744a52e940b04ba9",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//Get the cornfirm button
var Btn = document.getElementById("btn-confirm");
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
Btn.onclick = function () {
  modal.style.display = "none";
  alert("Appointment Made Successfully");
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};