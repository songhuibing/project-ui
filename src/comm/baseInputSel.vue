<template>
  <div style="display:flex">
    <el-tag
      v-for="tag in currentVal"
      :key="tag.key"
      closable
      @close="Tagdel(tag.key)"
    >{{`${tag.key}:${tag.name}`}}</el-tag>
    <div v-if="!selectVal">
      <el-select v-model="selectVal" clearable>
        <el-option
          v-for="item in currOptions"
          v-show="!item.selected"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div v-else>
      <el-input
        v-model.trim="inputVal"
        class="input_with"
        @blur="addTagsArray"
        @keydown.native.enter="addTagsArray"
      >
        <template slot="prepend">{{selectVal}}</template>
      </el-input>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      inputVal: '',
      selectVal: '',
    }
  },
  computed: {
    currentVal: {
      get() {
        return this.value
      },
      set(val) {
        debugger
        this.$emit('input', val)
      },
    },
    currOptions() {
      if (Object.prototype.toString.call == '[object Object]') {
        return Object.keys(this.options).map((key) => ({
          key,
          value: this.options[key],
          selected: false,
        }))
      } else if (
        Array.isArray(this.options) &&
        this.options.every((i) => typeof i === 'string')
      ) {
        return this.options.map((item) => ({
          key: item,
          value: item,
          selected: false,
        }))
      } else {
        return this.options.map((item) => ({ ...item, selected: false }))
      }
    },
  },
  methods: {
    Tagdel(key) {
      const index = this.currentVal.findIndex((i) => i.key === key)
      this.currOptions.find((i) => i.key === key).selected = false
      this.currentVal.splice(index, 1) //触发computed中的set方法   但为什么debugger不走set
    },
    addTagsArray() {
      if (this.inputVal) {
        this.$emit('input', [
          ...this.currentVal,
          { key: this.selectVal, name: this.inputVal },
        ])
        this.currOptions.find((i) => i.key === this.selectVal).selected = true
      }
      this.inputVal = ''
      this.selectVal = ''
    },
  },
}
</script>
<style scoped>
.input_with {
  width: 200px;
}
</style>