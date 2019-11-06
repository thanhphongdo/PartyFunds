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
import { mapState, mapMutations } from "vuex";
// import EtherService from '../services/ether.service';
import Logo from "~/components/Logo.vue";
// const contractConfig = require('../store/contract.config.js');

export default {
  components: {
    Logo
  },
  computed: mapState(["contractConfig"]),
  methods: {
    ...mapMutations(["initContract"])
  },
  mounted() {
    window.test = this;
  }
};
</script>
