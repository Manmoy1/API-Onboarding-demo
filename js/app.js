const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {

event.preventDefault();

const userData = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
mobile: document.getElementById("mobile").value,
organisation: document.getElementById("org").value,
password: document.getElementById("password").value
};

fetch("https://jsonplaceholder.typicode.com/users", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(userData)
})
.then(response => response.json())
.then(data => {

console.log("Success:", data);

alert("Signup Successful!");

window.location.href = "payment.html";

})
.catch(error => {

console.error("Error:", error);

alert("Something went wrong");

});

});