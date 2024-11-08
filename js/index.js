// // Select elements
// const showButton = document.querySelector(".show");
// const alertDialog = document.querySelector(".alert");
// const cancelButton = document.querySelector(".cancel");
// const continuebtn = document.querySelector(".Continue");

// showButton.addEventListener("click", () => {
//   alertDialog.style.display = "block";
//   showButton.style.display = "none";
//   button;
// });

// cancelButton.addEventListener("click", () => {
//   alertDialog.style.display = "none";
//   showButton.style.display = "inline-block";
// });
// continuebtn.addEventListener("click", () => {
//   alert("You deleted successfully.");
//   alertDialog.style.display = "none";
//   showButton.style.display = "inline-block";
// });
const first_continue = document.querySelector(".first_continue");
const seconde_continue = document.querySelector(".seconde_continue");

const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");
const cancel = document.querySelector(".cancel");

first_continue.addEventListener("click", () => {
  container.classList.add("hidden");
  overlay.style.display = "flex";
});
seconde_continue.addEventListener("click", () => {
  alert("You have deleted your account");
  container.classList.remove("hidden");
  overlay.style.display = "none";
});
cancel.addEventListener("click", () => {
  container.classList.remove("hidden");
  overlay.style.display = "none";
});
