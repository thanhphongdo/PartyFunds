<template>
  <div class="container">
    <div>
      <logo />
      <h3 class="title">partyfunds {{ $t('home.title') }}</h3>
      <h4 class="subtitle">My spectacular Nuxt.js project</h4>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  computed: mapState(["contractConfig"]),
  mounted() {
    console.log(this.contractConfig);
    console.log("mounted.........");
    let abi = this.contractConfig.contractABI;
    let contractAddress = this.contractConfig.contractAddress;
    let accAddress = "0x954Bb2030D74cc5846C6E742A7b61377B7bBA2a1";
    let web3 = new Web3("http://localhost:8545");
    let contract = new web3.eth.Contract(abi, contractAddress);
    window.contract = contract;
  }
};
</script>
