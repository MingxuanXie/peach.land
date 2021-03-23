function introButton() {
  var v = document.getElementById("intro");
  var ui = document.querySelector(".ui")
  if (v.style.display === "none") {
     v.style.display = "block";
  } else {
     v.style.display = "none";
  }
  ui.style.display = "block";
}