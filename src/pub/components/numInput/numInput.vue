<template>
  <div id="numInput">
    <input :value="formatter" @input="limitNum" @blur="blurs" @focus="onFoc" class="numInt">
    <div :class="showHint ? 'db' : 'dn'">
      <blockquote>
        <p>不会出现+</p>
        <p>用户可输入的长度小数点和符号都是算长度的</p>
        <p>不会出现多个0开头，也不会出现0开头的其他数字，但是可以单独输入一个0</p>
      </blockquote>
      <blockquote>
        <div>
          <span style="color: #E36049">参数</span>
        </div>
        <Form :label-width='86' label-suffix="：" label-position="left" style="padding-left: 20px">
          <Form-item label="max">最大值</Form-item>
          <Form-item label="min">最小值</Form-item>
          <Form-item label="numLen">可输入长度</Form-item>
          <Form-item label="precision">可输入几位小数 -- 暂时不会处理1.0/1.010这些情况</Form-item>
        </Form>
      </blockquote>
    </div>
  </div>
</template>
<script>
  export default {
    name: "numInput",
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: -Infinity
      },
      numLen: {
        type: Number,
      },
      precision: {
        type: Number,
      },
      numType: {// 不会出现 + 号
        type: String,
        default: ''
        // {
        //    "无限制": '',
        //    "整数": 'integer',
        //    "正数": 'plus',
        // }
      }
    },
    data() {
      return {
        showHint: true,
        currentValue: '',
        oldValue: '',
      }
    },
    watch: {
      value() {
        this.currentValue = this.value;
      }
    },
    created() {
      this.currentValue = this.value;
    },
    computed: {
      formatter() {
        return this.currentValue;
      },
    },
    methods: {
      // 数字输入框
      limitNum(e) {
        const {min, max, numType, numLen, precision} = this;
        let val = e.target.value;
        if (val.length > numLen) val = val.substring(0, numLen);

        if (val.match(/^0{1}$/)) return;// 首位0

        if (numType !== 'plus' && val.match(/^\-{1}$/)) return;// 正数

        if (precision === 0) val = val.replace(/(\.+)/, '');// 0位小数

        if (numType !== 'integer' && val.match(/^\.{1}$/)) return;// 非整数

        if (!isNaN(val)) {
          if (!val.match(/\.+/)) val = val.replace(/(\b0+)/, '');
          // 小数位处理
          if (precision) {
            let preLen = val.split('.')[1];
            if (preLen && preLen.length && preLen.length > precision)
              val = val.substring(0, val.length - 1);
          }
          // 整数
          if (numType === 'integer') val = val.replace(/(\.+)/, '');
          // 最小值边界
          if (val < min) val = min;
          // 最打值边界
          if (val > max) val = max;
          this.oldValue = val;
          e.target.value = val;
          this.$emit('input', val);
        }
        else {
          e.target.value = this.oldValue;
          this.$emit('input', this.oldValue);
        }
      },
      blurs() {
        this.$emit('blur', this.currentValue);
      },
      onFoc() {
        this.$emit('focus', this.currentValue);
      },
    }
  }
</script>
<style scoped>
  #numInput {
    margin: 10px 0;
    text-align: left;
  }
  .numInt {
    display: inline-block;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    -webkit-appearance: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    line-height: 40px;
    outline: 0;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    background-color: #fff;
    background-image: none;
  }
  .numInt:focus {
    border: 1px solid rgb(66, 159, 255);
  }
  blockquote {
    display: block;
    padding: 20px;
    margin-top: 25px;
    margin-bottom: 25px;
    background-color: #f7f7f7;
    border-left: 3px solid #b4b4b4;
    word-break: break-word !important;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }
  .db {
    display: block;
  }
  .dn {
    display: none;
  }
</style>
