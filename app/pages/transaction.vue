<template>
  <div class="container">
    <div class="tw-border tw-border-blue-light tw-border-solid tw-rounded-lg tw-p-4">
      <div>
        <form class="ui form">
          <div class="field">
            <label>Transfer money</label>
          </div>
          <div class="field">
            <label>To</label>
            <DropDown
              ref="dropdownMember"
              v-model="model.transaction.member"
              class="fluid selection"
              :values="data.members"
              placeholder="Member"
            ></DropDown>
          </div>
          <div class="field">
            <label>Value</label>
            <input type="number" step="10000" name="value" placeholder="value" />
          </div>
          <button class="ui button" type="button">Send</button>
        </form>
      </div>
    </div>
    <div class="tw-border tw-border-blue-light tw-border-solid tw-rounded-lg tw-p-4 tw-mt-4">
      <div>
        <form class="ui form">
          <div class="field">
            <label>Create party</label>
          </div>
          <div class="field">
            <label>Member</label>
            <DropDown
              ref="dropdownMember"
              v-model="model.transaction.members"
              class="fluid selection multiple"
              :values="data.members"
              placeholder="Member"
            ></DropDown>
          </div>
          <div class="field">
            <label>Value</label>
            <input type="number" step="10000" name="value" placeholder="value" />
          </div>
          <button class="ui button" type="button">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import DropDown from "~/components/shared/DropDown.vue";

export default {
  components: {
    DropDown
  },
  data() {
    return {
      members: null
    };
  },
  computed: mapState(["contractConfig", "data", "model"]),
  methods: {
    ...mapMutations(["initContract", "setPage"])
  },
  mounted() {
    // $(".member").dropdown({});
    // $(".members").dropdown({});
    this.setPage("transaction");
    // this.$refs.dropdownMember.callFunction(
    //   "set selected",
    //   this.model.transaction.members
    // );
  }
};
</script>
