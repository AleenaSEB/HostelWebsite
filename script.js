/************* LOGIN FUNCTION *************/
function login() {
  let role = document.getElementById("role").value;

  if (role === "student") {
    window.location.href = "student.html";
  } else if (role === "warden") {
    window.location.href = "warden.html";
  } else if (role === "matron") {
    window.location.href = "matron.html";
  } else {
    alert("Please select a role");
  }
}

/************* STUDENT FUNCTIONS *************/
function saveComplaint() {
  let type = document.getElementById("type").value;
  let text = document.getElementById("complaint").value;

  if (text === "") {
    alert("Please write your complaint");
    return;
  }

  let complaintData = type + " issue: " + text;
  localStorage.setItem("complaint", complaintData);

  alert("Thank you! Complaint submitted 📩");
  document.getElementById("complaint").value = "";
}

function saveRating() {
  let rate = Number(document.getElementById("rating").value);

  if (!rate) {
    alert("Please select a rating");
    return;
  }

  let ratings = JSON.parse(localStorage.getItem("ratings")) || [];
  ratings.push(rate);
  localStorage.setItem("ratings", JSON.stringify(ratings));

  alert("Thanks for rating today’s food ⭐");
}

/************* LOAD MENU FOR STUDENT *************/
document.addEventListener("DOMContentLoaded", function () {
  let menu = localStorage.getItem("menu");
  let menuElement = document.getElementById("menu");

  if (menuElement) {
    menuElement.innerText = menu ? menu : "Menu not updated";
  }
});

/************* LOGOUT *************/
function logout() {
  window.location.href = "login.html";
}