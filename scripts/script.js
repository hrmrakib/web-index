document.getElementById("menu-button").addEventListener("click", function () {
  let dropdown = document.getElementById("dropdown");
  dropdown.classList.remove("hidden");
});

document.getElementById("close").addEventListener("click", function () {
  let dropdown = document.getElementById("dropdown");
  dropdown.classList.add("hidden");
});
