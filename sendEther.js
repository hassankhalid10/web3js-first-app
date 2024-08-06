const { Web3 } = require("web3")  // Import the Web3 object from the "web3" package
// Define an asynchronous function named sendEther to handle sending ether
async function sendEther() {
    // Create an instance of HTTP provider with the specified URL
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
    // Create a Web3 instance using the HTTP provider
    const web3 = new Web3(provider);
    // Output the Web3 object to the console
    console.log(web3);
    try {
        // Retrieve the accounts available on the connected node
        const accounts = await web3.eth.getAccounts();
        // Output the first account retrieved
        console.log("Account:", accounts[0]);
        // Define the sender's address as the first account retrieved
        const sender = accounts[0];
        // Define the recipient's address (Replace with the actual recipient's address)
        const recipient = accounts[1]; // Replace with recipient's address
        // Send a transaction from the sender to the recipient with a value of 10 ether
        const transaction = await web3.eth.sendTransaction({
            from: sender,
            to: recipient,
            value: web3.utils.toWei("10", "ether"),
        });
        // Output the transaction hash of the sent transaction
        console.log("Transaction Hash:", transaction.transactionHash);
    } catch (error) {
        // Output any errors that occur during the execution of the try block
        console.error("Error:", error);
    }
}
// Call the sendEther function to initiate the process of sending ether
sendEther();
