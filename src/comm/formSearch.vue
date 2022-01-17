<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item
      v-for="item in data"
      :key="item.name"
      :rules="item.rule"
      :prop="item.key"
      :label="item.label"
    >
      <component
        :is="item.type"
        v-model="form[item.key]"
        :option="item.option"
        v-bind="item.props"
      />
    </el-form-item>
  </el-form>
</template>
<script>
import component from '@/comm/component.vue'
export default {
  components: {
    component,
  },
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>