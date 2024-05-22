const flexAuto = document.getElementById("flex-auto");
const flexInitial = document.getElementById("flex-initial");
flexAuto.addEventListener("click", () => {
  flexInitial.style.display =
    flexInitial.style.display === "none" ? "block" : "none";
});
