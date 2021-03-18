// works on safari, not working on Chrome?
document.addEventListener("contextmenu", (event) => {
  document.exitPointerLock();
  // alert("Right clicked");
});
