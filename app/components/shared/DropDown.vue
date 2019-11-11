<template>
  <!-- <div ref="dropdown" class="ui fluid selection dropdown">
    <input name="tags" type="hidden" />
    <i class="dropdown icon"></i>
    <div class="default text">{{placeholder}}</div>
    <div class="menu">
      <div v-for="(item,index) in data" :key="index" class="item" data-value="angular">{{item.text}}</div>
    </div>
  </div>-->
  <div ref="dropdown" class="ui dropdown">
    <div class="text"></div>
    <i class="dropdown icon"></i>
  </div>
</template>
<script>
export default {
  props: ["classList", "values", "placeholder", "options", "value"],
  data() {
    return {
      ref: null
    };
  },
  methods: {
    callFunction(funcName, params) {
      return $(this.$refs.dropdown).dropdown(funcName, params);
    }
  },
  mounted() {
    let self = this;
    self.dropdownOptions = self.options || {};
    if (self.values) {
      self.dropdownOptions.values = self.values;
    }
    if (self.placeholder) {
      self.dropdownOptions.placeholder = self.placeholder;
    }
    if (self.dropdownOptions.onChange) {
      var onChange = self.dropdownOptions.onChange;
      self.dropdownOptions.onChange = (value, text, $selectedItem) => {
        onChange(value, text, $selectedItem);
        setTimeout(() => {
          self.$emit("input", self.callFunction("get values"));
        }, 100);
      };
    } else {
      self.dropdownOptions.onChange = (value, text, $selectedItem) => {
        setTimeout(() => {
          self.$emit("input", self.callFunction("get values"));
        }, 100);
      };
    }
    $(self.$refs.dropdown).dropdown(self.dropdownOptions);
    self.callFunction("set selected", self.value);
    window.testD = self;
  }
};
</script>