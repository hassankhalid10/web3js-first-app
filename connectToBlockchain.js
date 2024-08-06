const { Web3 } = require('web3');  // Import the Web3 module from the 'web3' package
// Define an asynchronous function named 'connect'
async function connect() {
    // Create a new instance of HTTP provider with the specified URL
    const provider= new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
    // Create a new Web3 instance using the HTTP provider
    const web3 = new Web3(provider);
    // Output the Web3 instance to the console
    console.log(web3);
    try {
        // Fetch the list of accounts associated with the connected node
        const accounts = await web3.eth.getAccounts();
        // Output the first account address to the console
        console.log("Account:", accounts[0]);

        // Fetch the balance of the first account in Wei
        const balanceWei = await web3.eth.getBalance(accounts[0]);
        // Output the balance in Wei to the console
        console.log("Balance (Wei):", balanceWei.toString());

        // Convert the balance from Wei to Ether
        const balanceEther = web3.utils.fromWei(balanceWei, "ether");
        // Output the balance in Ether to the console
        console.log("Balance (Ether):", balanceEther);

        // Convert the balance from Ether back to Wei
        const balanceWei2 = web3.utils.toWei(balanceEther, "ether");
        // Output the balance in Wei (after conversion) to the console
        console.log("Balance (Wei, converted back):", balanceWei2.toString());
    } catch (error) {
        // Output any errors that occur during execution to the console
        console.error("Error:", error);
    }
}
// Invoke the 'connect' function to establish connection and perform operations
connect();

