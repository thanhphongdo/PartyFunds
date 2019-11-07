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
            <select class="ui dropdown member">
              <option value>Member</option>
              <option value="1">Nguyen Van A</option>
              <option value="0">Tran Van B</option>
            </select>
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
            <div class="ui fluid multiple search selection dropdown members">
              <input name="tags" type="hidden" />
              <i class="dropdown icon"></i>
              <div class="default text">Skills</div>
              <div class="menu">
                <div class="item" data-value="angular">Angular</div>
                <div class="item" data-value="css">CSS</div>
                <div class="item" data-value="design">Graphic Design</div>
                <div class="item" data-value="ember">Ember</div>
                <div class="item" data-value="html">HTML</div>
                <div class="item" data-value="ia">Information Architecture</div>
                <div class="item" data-value="javascript">Javascript</div>
                <div class="item" data-value="mech">Mechanical Engineering</div>
                <div class="item" data-value="meteor">Meteor</div>
                <div class="item" data-value="node">NodeJS</div>
                <div class="item" data-value="plumbing">Plumbing</div>
                <div class="item" data-value="python">Python</div>
                <div class="item" data-value="rails">Rails</div>
                <div class="item" data-value="react">React</div>
                <div class="item" data-value="repair">Kitchen Repair</div>
                <div class="item" data-value="ruby">Ruby</div>
                <div class="item" data-value="ui">UI Design</div>
                <div class="item" data-value="ux">User Experience</div>
              </div>
            </div>
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
    $(".member").dropdown({});
    $(".members").dropdown({});
  }
};
</script>
