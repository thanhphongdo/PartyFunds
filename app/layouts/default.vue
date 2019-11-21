<template>
  <div class="tw-flex tw-flex-col tw-h-full">
    <div v-if="!initLoad" class="ui segment app-loading">
      <div class="ui active dimmer">
        <div class="ui loader"></div>
      </div>
    </div>
    <div class="tw-flex tw-flex-col tw-h-full tw-bg-white">
      <ActionBar></ActionBar>
      <div class="tw-flex-1 tw-p-4 tw-overflow-auto">
        <nuxt v-if="initLoad" />
      </div>
      <TabBar></TabBar>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import ActionBar from "~/components/ActionBar.vue";
import Logo from "~/components/Logo.vue";
import TabBar from "~/components/TabBar.vue";
import { ACTION, MUTATION } from "~/store/enums.js";

export default {
  components: {
    Logo,
    ActionBar,
    TabBar
  },
  data() {
    return {
      initLoad: false
    };
  },
  computed: mapState(["contractConfig"]),
  methods: {
    ...mapMutations([MUTATION.initContract]),
    ...mapActions([ACTION.fetchMemberList])
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next();
  },
  mounted() {
    window.test = this;
    let self = this;
    this.initContract(
      "0xe0024f129a1958b5bc4ca2b3974b2af278563510f49c46d841e3fbef81a36a9e"
    );
    this.fetchMemberList({
      callback: data => {
        console.log(data);
        self.initLoad = true;
      },
      error: err => {
        self.initLoad = true;
        console.log(err);
      }
    });
  }
};
</script>