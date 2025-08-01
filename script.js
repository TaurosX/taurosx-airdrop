let accounts = [];

async function connectWallet() {
  if (window.ethereum) {
    try {
      accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      document.getElementById("status").innerText = "Wallet connected: " + accounts[0];
    } catch (err) {
      document.getElementById("status").innerText = "Connection failed.";
    }
  } else {
    alert("Please install MetaMask!");
  }
}

async function claimAirdrop() {
  if (!accounts.length) {
    alert("Please connect wallet first.");
    return;
  }

  // Demo feedback only
  document.getElementById("status").innerText = "Airdrop claimed! (Demo - no real transaction)";
}

document.getElementById("connectButton").addEventListener("click", connectWallet);
document.getElementById("claimButton").addEventListener("click", claimAirdrop);
