module.exports = {
    url: 'http://localhost:8545',
    contractAddress: '0x49C75aC9bc9DdEb8393654b2F9f94C1c729FfdFf',
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
            "name": "addMember",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "creator",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "members",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "money",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "message",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "date",
                            "type": "string"
                        },
                        {
                            "internalType": "bool",
                            "name": "paySuccess",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "isValue",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct BaseFunds.Party",
                    "name": "party",
                    "type": "tuple"
                }
            ],
            "name": "addParty",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
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
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
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
            "name": "getFundHost",
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
                        },
                        {
                            "internalType": "bool",
                            "name": "isValue",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct BaseFunds.Member",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "getMember",
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
                        },
                        {
                            "internalType": "bool",
                            "name": "isValue",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct BaseFunds.Member",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_page",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_perPage",
                    "type": "uint256"
                }
            ],
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
                        },
                        {
                            "internalType": "bool",
                            "name": "isValue",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct BaseFunds.Member[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getPartyList",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "creator",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "members",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "money",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "message",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "date",
                            "type": "string"
                        },
                        {
                            "internalType": "bool",
                            "name": "paySuccess",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "isValue",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct BaseFunds.Party[]",
                    "name": "",
                    "type": "tuple[]"
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
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getTotalFund",
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