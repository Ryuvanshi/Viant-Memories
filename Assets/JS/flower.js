document.addEventListener("DOMContentLoaded", () => {
  const flower = document.getElementById("flower");
  const hiddenMessage = document.getElementById("hiddenMessage");

  flower.addEventListener("click", () => {
    hiddenMessage.classList.toggle("show");
  });
});