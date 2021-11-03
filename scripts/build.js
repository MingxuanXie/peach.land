// Intro control
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

// Pointer unlock
document.addEventListener("contextmenu", () => {
   document.exitPointerLock();
});

// Enable ethereum
const ethereumButton = document.querySelector(".enableEthereumButton");
const showAccount = document.querySelector(".showAccount");

ethereumButton.addEventListener("click", () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  showAccount.innerHTML = "Your account " + account + " is successfully recognized. <br> Please wait for more onchain features to be implemented in the near future :)";
}

// Aframe hover to show nft
AFRAME.registerComponent('show-nft', {
   schema: {type: 'string', default: ''},

   init: function(){
     var data = this.data;
     var foo = document.getElementById(data);
     var el = this.el;
     el.addEventListener('raycaster-intersected',function(){
       foo.style.display = "block";
     });
     el.addEventListener('raycaster-intersected-cleared',function(){
       foo.style.display = "none";
     });
    }
});  

// Aframe click to open url
AFRAME.registerComponent('click-url', {
   schema: {default: ''},
 
   init: function () {
     var url = this.data;
     this.el.addEventListener('click', function () {
     window.open(url,"_self")
     });
   }
 });  