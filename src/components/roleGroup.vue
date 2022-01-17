<template>
  <div style="padding:20px">
    <formSearch v-model="formData" :data="searchFormData" />
    <el-table :data="tableData6" :span-method="objectSpanMethod" border>
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import formSearch from '@/comm/formSearch'
export default {
  components: {
    formSearch,
  },
  data() {
    return {
      formData: {},
      /**
       * title:       表单名
       * key:         表单字段
       * type:        表单类型
       * options:     当表单类型为select,raido,checkbox时使用  [label:'',value:'']
       * defaultValue 表单元素的默认值
       * props        接收element原始表单所有属性
       * *******************
       * hasControl   控制表单按钮显示隐藏
       * submitText   提交文本
       * resetText    重置文本
       */
      searchFormData: [
        { type: 'input', title: '用户名', key: 'username', isRequire: true },
        { type: 'inputName', title: '年龄', key: 'age', isRequire: true },
        {
          type: 'radio',
          title: '性别',
          key: 'sex',
          options: [
            { label: '男', value: 1 },
            { label: '女', value: 2 },
          ],
        },
      ],
      spanArr: [], //用于存放每一行记录的合并数
      tableData6: [
        {
          id: '1',
          name: '王小虎',
          amount1: '234',
        },
        {
          id: '1',
          name: '王小虎',
          amount1: '165',
        },
        {
          id: '2',
          name: '王小虎',
          amount1: '324',
        },
        {
          id: '2',
          name: '王小虎',
          amount1: '621',
        },
        {
          id: '2',
          name: '王小虎',
          amount1: '539',
        },
      ],
    }
  },
  mounted: function () {
    this.getSpanArr(this.tableData6)
  },
  methods: {
    getSpanArr(data) {
      // data就是我们从后台拿到的数据
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.spanArr.push(1)
          this.pos = 0
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i].id === data[i - 1].id) {
            this.spanArr[this.pos] += 1
            this.spanArr.push(0)
          } else {
            this.spanArr.push(1)
            this.pos = i
          }
        }
        console.log(this.spanArr)
      }
    },
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1) {
        const _row = this.spanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        console.log(`rowspan:${_row} colspan:${_col}`)
        return {
          // [0,0] 表示这一行不显示， [2,1]表示行的合并数
          rowspan: _row,
          colspan: _col,
        }
      }
    },
  },
}
</script>