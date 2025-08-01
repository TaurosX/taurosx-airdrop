async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      document.getElementById("status").innerText = `Wallet connected: ${accounts[0]}`;
    } catch (err) {
      console.error("Wallet connection failed:", err);
    }
  } else {
    alert("MetaMask not found. Please install it.");
  }
}

function claimAirdrop() {
  document.getElementById("status").innerText = "Airdrop claimed successfully! (Simulated)";
}
