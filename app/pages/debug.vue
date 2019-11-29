<template>
  <div class="container">
    <div class="ui form tw-mb-8">
      <div class="inline field">
        <label>Address:</label>
        <textarea rows="5" v-model="formModel.address"></textarea>
      </div>
      <div class="field">
        <label>Private key:</label>
        <textarea rows="5" v-model="formModel.privateKey"></textarea>
      </div>
      <div class="ui submit button" @click="initAllContract">Init contract</div>
    </div>
    <Accordion
      class="tw-mt-4 tw-p-1 tw-bg-grey-lighter"
      v-for="(item, index) in accounts"
      :key="index"
      ref="accountRow"
    >
      <div class="title" :class="{'tw-bg-green-light': item.active}">
        <div class="tw-flex">
          <div class>
            <i class="dropdown icon"></i>
          </div>
          <div class="tw-flex-1">
            <div class="tw-flex tw-flex-col tw-h-full tw-justify-center">
              <div>({{ index + 1 }}) - {{ hexFilter(item.address) }}</div>
              <div class="tw-text-grey-darker tw-text-xs tw-italic">{{ hexFilter(item.pk) }}</div>
            </div>
          </div>
          <div>
            <div class="tw-flex tw-justify-end">
              <div
                class="mini ui submit button inverted red icon"
                @click="initContractAt(index, $event)"
              >
                <i class="angle double right icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="tw-flex tw-mb-2" v-for="(mItem, mIndex) in item.methods" :key="mIndex">
          <div class="ui mini input tw-w-1/3 tw-mr-1 tw-self-start">
            <input type="text" placeholder="function" v-model="mItem.funcName" />
          </div>
          <div class="ui form tw-flex-1 tw-mr-1">
            <div class="field">
              <textarea
                style="height: auto; min-height: auto; padding: 7px 11px;font-size:.78571429em"
                rows="1"
                placeholder="params"
                v-model="mItem.params"
              ></textarea>
            </div>
          </div>
          <button
            class="mini ui icon inverted blue button tw-self-start"
            @click="executeMethod(mItem, index)"
          >
            <i class="paper plane outline icon"></i>
          </button>
        </div>
        <div>
          <button class="mini ui icon inverted green button tw-mr-1" @click="addMethods(index)">
            <i class="plus icon"></i>
          </button>
        </div>
      </div>
    </Accordion>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Accordion from "~/components/shared/Accordion.vue";

export default {
  components: {
    Accordion
  },
  data() {
    return {
      formModel: {
        address: "",
        privateKey: ""
      },
      accounts: []
    };
  },
  computed: mapState(["contractConfig"]),
  methods: {
    ...mapMutations(["initContract", "callContract"]),
    initAllContract() {
      let self = this;
      self.accounts.splice(0);
      window.localStorage["address"] = self.formModel.address;
      window.localStorage["privateKey"] = self.formModel.privateKey;
      let listAddress = this.formModel.address.split("\n");
      let listPrivateKey = this.formModel.privateKey.split("\n");
      listAddress = listAddress.map(item => {
        return item.split(" ")[1];
      });
      listPrivateKey = listPrivateKey.map(item => {
        return item.split(" ")[1];
      });
      listAddress.forEach((item, index) => {
        self.accounts.push({
          address: item,
          pk: listPrivateKey[index],
          methods: [],
          active: false
        });
      });
      let accountsBK = JSON.parse(localStorage["accounts"] || "[]");
      for (let i = 0; i < self.accounts.length; i++) {
        if (
          accountsBK[i] &&
          accountsBK[i].methods &&
          accountsBK[i].methods.length
        ) {
          accountsBK[i].methods.forEach((item, index) => {
            self.accounts[i].methods.push(item);
          });
        } else {
          self.accounts[i].methods.push({
            funcName: "",
            params: ""
          });
        }
      }
      console.log(self.accounts);
    },
    hexFilter(address) {
      return (
        address.substr(0, 10) + "..." + address.substr(address.length - 10, 10)
      );
    },
    initContractAt(index, event) {
      if (event) {
        event.stopPropagation();
      }
      let self = this;
      this.initContract(this.accounts[index].pk);
      for (let i = 0; i < this.accounts.length; i++) {
        this.accounts[i].active = false;
      }
      this.accounts[index].active = true;
      setTimeout(() => {
        self.$refs.accountRow[index].callFunction("open", 0);
      }, 100);
    },
    executeMethod(methodData, accountIndex) {
      if (!this.accounts[accountIndex].active) {
        this.initContractAt(accountIndex);
      }
      this.saveAccounts();
      let funcName = methodData.funcName;
      let params = methodData.params ? methodData.params.split("|") : null;
      if (!methodData.funcName) return;
      if (params) {
        params = params.map(item => {
          if (item && item[0] == "[" && item[item.length - 1] == "]") {
            return JSON.parse(item);
          }
          return item;
        });
      }
      this.callContract({
        funcName: funcName,
        params: params,
        callback: data => {
          console.log(data);
          window.callbackData = data;
        },
        error: err => {
          console.log(err);
          window.callbackError = err;
        }
      });
      console.log(methodData);
    },
    addMethods(index) {
      this.accounts[index].methods.push({
        funcName: "",
        params: ""
      });
    },
    saveAccounts() {
      window.localStorage["accounts"] = JSON.stringify(this.accounts);
    }
  },
  mounted() {
    this.formModel.address = localStorage["address"] || "";
    this.formModel.privateKey = localStorage["privateKey"] || "";
  }
};
</script>
