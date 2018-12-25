import numInput from './numInput.vue'
// 这里是重点
const NumInput = {
  install: function(Vue){
    Vue.component('numInput', numInput)
  }
};

// 导出组件
export default NumInput
