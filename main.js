const toggle = document.getElementById("toggle");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const navbar = document.getElementById("navbar");

//Event Listeners..
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
  console.log("toggled");
});

// show modal
openModal.addEventListener("click", () => modal.classList.add("show-modal"));
//Hide modal
closeModal.addEventListener("click", () =>
  modal.classList.remove("show-modal")
);

//Hide modal: when clicking on screen.
window.addEventListener('click', e => e.target == modal ? 
modal.classList.remove('show-modal'):false
);