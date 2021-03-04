function showOrHideDiv() {
  var v = document.getElementById("intro");
  if (v.style.display === "none") {
     v.style.display = "block";
  } else {
     v.style.display = "none";
  }
}