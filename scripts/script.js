document.getElementById("menu-button").addEventListener("click", function () {
  let dropdown = document.getElementById("dropdown");
  dropdown.classList.remove("hidden");
});

document.getElementById("close").addEventListener("click", function () {
  let dropdown = document.getElementById("dropdown");
  dropdown.classList.add("hidden");
});

// slider scrolling
function goBackSlide() {
  const container = document.querySelector(".carousel");
  container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
}
function goForwardSlide() {
  const container = document.querySelector(".carousel");
  container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
}
