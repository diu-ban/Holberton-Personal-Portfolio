document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu toggle
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  function toggleMenu() {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  menu.addEventListener("click", toggleMenu);
  icon.addEventListener("click", toggleMenu);

  // zoom variables
  let modal_img = document.querySelector(".modal-container img");
  let modal = document.querySelector(".modal-container");
  var image = document.querySelectorAll("img.profile-picture");

  // Zoom image 1
  function zoomIn_1() {
    modal_img.setAttribute("src", "./asset/IMG_2541.jpg");
    modal.style.display = "block";
  }
  image[0].addEventListener("click", zoomIn_1);
  // Zoom image 2
  function zoomOut_2() {
    modal_img.setAttribute("src", "./asset/profile-pic-01.png");
    modal.style.display = "block";
  }
  image[1].addEventListener("click", zoomOut_2);
  // Turn off zoom img
  function zoomOut() {
    modal.style.display = "none";
  }
  modal.addEventListener("click", zoomOut);
});
