const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

const images = document.querySelectorAll(".gallery img");

images.forEach(image => {
  image.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent = this.alt || "Memory";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});