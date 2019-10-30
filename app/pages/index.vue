<template>
  <div class="container">
    <div>
      <logo />
      <h3 class="title">
        partyfunds {{ $t('home.title') }}
      </h3>
      <h4 class="subtitle">
        My spectacular Nuxt.js project
      </h4>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  mounted() {
    console.log('mounted.........');
    let abi = [{constant:!1,inputs:[{internalType:"string",name:"_name",type:"string"}],name:"newMember",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getMemberList",outputs:[{components:[{internalType:"address",name:"id",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"money",type:"uint256"}],internalType:"struct Funds.Member[]",name:"",type:"tuple[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"_value",type:"uint256"}],name:"set",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"get",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"_members",type:"address[]"},{internalType:"uint256",name:"_money",type:"uint256"},{internalType:"string",name:"_message",type:"string"},{internalType:"string",name:"_date",type:"string"}],name:"createParty",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_member",type:"address"},{internalType:"uint256",name:"_money",type:"uint256"}],name:"payIn",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"payForParty",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_member",type:"address"},{internalType:"uint256",name:"_money",type:"uint256"}],name:"transferMoney",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"}];
    let contractAddress = '0xaDa334ebe60A32CC06EA86388d87B7351fD5530e';
    let accAddress = '0x954Bb2030D74cc5846C6E742A7b61377B7bBA2a1';
    let web3 = new Web3('http://localhost:8545');
    let contract = new web3.eth.Contract(abi, contractAddress);
    window.contract = contract;
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
