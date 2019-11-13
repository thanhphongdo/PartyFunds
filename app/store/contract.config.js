module.exports = {
    url: 'http://localhost:8545',
    contractAddress: '0x3403E715Bdc05646f7566bcC51fEA0b8A7ef3d68',
    contractABI: [
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "setBaseFundAddress",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "val",
                    "type": "uint256"
                }
            ],
            "name": "setTestCount",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getBaseFunds",
            "outputs": [
                {
                    "internalType": "contract BaseFunds",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getTestCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
}