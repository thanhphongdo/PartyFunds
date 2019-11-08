<template>
  <div class="container">
    History
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo
  },
  computed: mapState(["contractConfig"]),
  methods: {
    ...mapMutations(["initContract", "setPage"])
  },
  mounted() {
    this.setPage("history");
    console.log('history');
  }
};
</script>