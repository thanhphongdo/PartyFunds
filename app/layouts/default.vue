<template>
  <div class="tw-h-full">
    <ActionBar class="tw-fixed tw-w-full tw-pin-t tw-z-10"></ActionBar>
    <div class="tw-pt-8 tw-pb-8">
      <div class="tw-pt-2 tw-pb-4">
        <div class="tw-h-full tw-p-4">
          <nuxt />
        </div>
      </div>
    </div>
    <TabBar class="tw-fixed tw-w-full tw-pin-b tw-z-10"></TabBar>
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