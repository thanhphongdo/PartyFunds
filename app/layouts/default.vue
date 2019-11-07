<template>
  <div class="tw-flex tw-flex-col tw-h-full">
    <ActionBar></ActionBar>
    <div class="tw-flex-1 tw-p-4">
      <nuxt />
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import ActionBar from "~/components/ActionBar.vue";
import Logo from "~/components/Logo.vue";
import TabBar from "~/components/TabBar.vue";

export default {
  components: {
    Logo,
    ActionBar,
    TabBar
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