<template>
  <div class="tw-h-12 tw-bg-blue-light tw-text-white tw-flex">
    <nuxt-link to="/transaction" class="tw-w-10 tw-h-full tw-flex-1">
      <span :class="page.transaction?'tw-text-yellow':'tw-text-white'" class="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <span>
        <i class="exchange icon"></i>
      </span>
      <span>Giao dich</span>
      </span>
    </nuxt-link>
    <nuxt-link to="/history" class="tw-w-10 tw-h-full tw-flex-1">
      <span :class="page.history?'tw-text-yellow':'tw-text-white'" class="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <span>
          <i class="file alternate outline icon"></i>
        </span>
        <span>Lich su</span>
      </span>
    </nuxt-link>
    <nuxt-link to="/account" class="tw-w-10 tw-h-full tw-flex-1">
      <span :class="page.account?'tw-text-yellow':'tw-text-white'" class="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <span>
          <i class="user outline icon"></i>
        </span>
        <span>Tai khoan</span>
      </span>
    </nuxt-link>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  components: {
  },
  computed: mapState(["contractConfig", "page"]),
  methods: {
    ...mapMutations(["initContract", "setPage"])
  },
  mounted() {
  }
};
</script>