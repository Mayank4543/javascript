const openbt = document.getElementById("openModal");
const closebt = document.getElementById("closeModal");
const modal = document.getElementById("model-overlay");
openbt.addEventListener("click", () => {
  modal.style.display = "flex";
});
closebt.addEventListener("click", () => {
  modal.style.display = "none";
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
