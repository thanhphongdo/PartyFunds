<template>
  <div ref="accordion" class="ui accordion">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["options"],
  data() {
    return {
      ref: null
    };
  },
  methods: {
    callFunction(funcName, params) {
      return $(this.$refs.dropdown).accordion(funcName, params);
    }
  },
  mounted() {
    let self = this;
    self.option = self.options || {};
    $(self.$refs.accordion).accordion(self.options);
  }
};
</script>