// works on safari, not working on Chrome?
document.addEventListener("contextmenu", () => {
    document.exitPointerLock();
    // alert("Right clicked");
});