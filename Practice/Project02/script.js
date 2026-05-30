document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById("toggle");
  const navLink = document.querySelector(".nav-list");
  
  console.log('Toggle button:', toggleBtn); // Debug
  console.log('Nav list:', navLink); // Debug
  
  toggleBtn.addEventListener("click", () => {
    console.log('Toggle clicked'); // Debug
    navLink.classList.toggle("active");
  });
});
