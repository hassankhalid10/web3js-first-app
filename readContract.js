const { Web3 } = require("web3")

async function read(){
    const provider= new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
    const web3 = new Web3(provider);
    const ABI = [
        {
            "inputs": [],
            "name": "getter",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_a",
                    "type": "uint256"
                }
            ],
            "name": "setter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
    try {
        const accounts = await web3.eth.getAccounts();
        console.log("Account:", accounts[0]);

        // Replace this with the actual address of your deployed smart contract
        const contractAddress = "0x0000000000000000000000000000000000000000";
        
        const contract = new web3.eth.Contract(ABI, contractAddress);
        console.log(contract);

        const data = await contract.methods.getter().call(); //for reading data from SC
        console.log("Data:", data);

        // const data1 = await contract.methods.setter(20).send({ from: accounts[0] }); //for writing data in SC
        // console.log("Transaction Hash:", data1.transactionHash);
    } catch (error) {
        console.error("Error:", error);
    }
}

read()