<template>
  <div class="container">
    <div class="tw-border tw-border-blue-light tw-border-solid tw-rounded-lg tw-p-4">
      <div>
        <form class="ui form" v-validate="{onSuccess: transferMoney}">
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
              name="member"
            ></DropDown>
          </div>
          <div class="field">
            <label>Value</label>
            <input type="number" step="10000" min="1" name="value" placeholder="value" />
          </div>
          <button class="ui submit button" type="button">Send</button>
        </form>
      </div>
    </div>
    <div class="tw-border tw-border-blue-light tw-border-solid tw-rounded-lg tw-p-4 tw-mt-4">
      <div>
        <form class="ui form" v-validate="{onSuccess: transferMoney}">
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
              name="members"
            ></DropDown>
          </div>
          <div class="field">
            <label>Value</label>
            <input type="number" step="10000" min="1" name="value" placeholder="value" />
          </div>
          <button class="ui submit button" type="button">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import DropDown from "~/components/shared/DropDown.vue";
import { ACTION, MUTATION } from "~/store/enums.js";

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
  mounted() {
    // $(".member").dropdown({});
    // $(".members").dropdown({});
    this.setPage("transaction");
    // this.$refs.dropdownMember.callFunction(
    //   "set selected",
    //   this.model.transaction.members
    // );
  },
  methods: {
    ...mapMutations(["initContract", "setPage"]),
    transferMoney(event, fields) {
      console.log(fields);
    }
  }
};
</script>
