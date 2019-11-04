import Vuex from 'vuex';
// const contractConfig = require('./contract.config.js');
const contractConfig = {
  contractAddress: '0x9c87Bbb04aE39D1Fc9fA713C1e7cf3d0AA466b96',
  contractABI: [
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
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "newMember2",
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
          "name": "index",
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
          "name": "val",
          "type": "uint256"
        }
      ],
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
            }
          ],
          "internalType": "struct Funds.Member",
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
            }
          ],
          "internalType": "struct Funds.Party[]",
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

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      locales: ['vn', 'fr'],
      locale: 'vn',
      contractConfig: contractConfig
    }),
    mutations: {
      increment(state) {
        // state.counter++
      },
      SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
          state.locale = locale
        }
      }
    },
    modules: {
      cmpStyle: {
        namespaced: true,
        state: () => ({
          style: []
        }),
        mutations: {
          set(state, { cmpName, style }) {
            // console.log(cmpName);
            // state.style[cmpName] = style;
            const currentCmpStyle = state.style.find(item => {
              return item.cmpName === cmpName;
            });
            console.log(cmpName);
            if (currentCmpStyle) {
              currentCmpStyle.style = style;
            } else {
              state.style.push({
                cmpName: cmpName,
                style: style
              });
            }
          }
        },
        getters: {
          toClass(state) {
            return (cmpName) => {
              return state.style.find(item => {
                return item.cmpName === cmpName;
              });
            }
          }
        }
      }
    }
  });
}

export default createStore;