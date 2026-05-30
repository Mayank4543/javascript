const form= document.getElementById("loginform");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    error.textcontet="";
     if (!email.value.includes("@") || !email.value.includes(".")) {
    error.textContent = "Please enter a valid email address.";
    return;
  }

  // ✅ Length check
  if (password.value.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return;
  }
  alert("Login successful 🎉 (functionality part)");
}
)
