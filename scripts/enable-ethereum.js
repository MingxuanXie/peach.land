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