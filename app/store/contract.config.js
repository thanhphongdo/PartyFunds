module.exports = {
    contractAddress: '0x589444E196400e48C1F66aaa1bd83eD62A3B5963',
    contractABI: [
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                }
            ],
            "name": "newMember",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getMemberList",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "id",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "money",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Funds.Member[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_members",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256",
                    "name": "_money",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_message",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_date",
                    "type": "string"
                }
            ],
            "name": "createParty",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getTest",
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
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_member",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_money",
                    "type": "uint256"
                }
            ],
            "name": "payIn",
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
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "payForParty",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "test",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_member",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_money",
                    "type": "uint256"
                }
            ],
            "name": "transferMoney",
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
        }
    ]
}