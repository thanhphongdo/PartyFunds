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
      <div class="ui submit button" @click="initAllCantract">Init contract</div>
    </div>
    <div class="ui grid" v-for="(item, index) in accounts" :key="index" :class="{'tw-bg-green-light': item.active}">
      <div class="twelve wide column">
        <div class="tw-flex tw-flex-col tw-h-full tw-justify-center">
          <div>{{hexFilter(item.address)}}</div>
          <div class="tw-text-grey-darker tw-text-xs tw-italic">{{hexFilter(item.pk)}}</div>
        </div>
        <!-- <div class="tw-flex tw-h-full tw-items-center">{{hexFilter(item.pk)}}</div> -->
      </div>
      <div class="four wide column">
        <div class="tw-flex tw-justify-end">
          <div class="ui submit button" @click="initContractAt(index)">init</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  components: {},
  data() {
    return {
      formModel: {
        address: `(0) 0x4C58a7A9F6713dA6f324054A4B71F9E4429Bb1e9 (100 ETH)
(1) 0x42EAC50AEdA8c4dEDf2A0537dc6b43b7B9Bdd5E6 (100 ETH)
(2) 0xEAdED7c391bF0e1036d6f92A198dB3c7DB871AD0 (100 ETH)
(3) 0xcA33a4E0Ab8921a84b8Fb4C80CBa20c85e507430 (100 ETH)
(4) 0xD9041311F83328F697e3276E0A94667a00b93E33 (100 ETH)
(5) 0x04C6b19a963074b9625bee952Ca3B507946014da (100 ETH)
(6) 0x1b3Fa9e7A6d1Baf38f1A6Fa0BCAbFB49429654CC (100 ETH)
(7) 0x768aeC9a1c531E45c2f41eAd08d19fd0db8f94cD (100 ETH)
(8) 0xf5786bc9EAa7CE7a8BF5A0514248caF8cf7B0696 (100 ETH)
(9) 0x1FEC9305d4b84EB51C78e307C02CA6AE38e2b373 (100 ETH)`,
        privateKey: `(0) 0x130a8194bffafdbb75863ce2560e3041b8e89c77e9e45340f21dd343617edf8d
(1) 0xc42f3a5a40d17494e1a693268184bcd1b9eb5b444a0a6409f8a29ab4d87d529e
(2) 0x83eaa3e52c51b0929848cd324de88807d5465b861c2357d689c40287473832ef
(3) 0xa0346c2d004390220e25cbdf8b69095466d2541bb9243282eda7a73384bdf6db
(4) 0x366289afd02691ccc8ed8dfaa69ec6041a9afe6295a852fb0bb6cbf77bd12210
(5) 0x4782ea0a25db6c767e1cdb9872aa8786d6db7e41ec867bcd968f3474877257c5
(6) 0x7616c9ede4b316c4adcdeb55e954e34dc7e75d776c48a77e02a18e0d43a51077
(7) 0xc937e06b9ff95dbad494a8f99a41ac2026c8b5c2f0ade5774be4d5ca3ec12a27
(8) 0x15f3c04b3cbb6b22f1b1750c55c7f391af352f9ae4c978c975ff2fb666abd43f
(9) 0xc63df25a2065f3e42b855e19ab69c45f4b4a0acdbb6e8042d42d3b375c5ba677`
      },
      accounts: []
    };
  },
  computed: mapState(["contractConfig"]),
  methods: {
    ...mapMutations(["initContract", "callContract"]),
    initAllCantract() {
      let self = this;
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
          active: false
        });
      });
      console.log(self.accounts);
    },
    hexFilter(address) {
      return (
        address.substr(0, 10) + "..." + address.substr(address.length - 10, 10)
      );
    },
    initContractAt(index){
        this.initContract(this.accounts[index].pk);
        for(let i = 0; i< this.accounts.length; i++){
            this.accounts[i].active = false;
        }
        this.accounts[index].active = true;
    }
  },
  mounted() {}
};
</script>
