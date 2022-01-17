<template >
  <div>
    <div>
      <el-button type="primary" size="small" @click="btn">Tree数据与普通数据转换</el-button>
    </div>
    <div class="TreeWrpa">
      <el-tree :data="list" :props="defaultProps" show-checkbox @node-click="handleNodeClick"></el-tree>
    </div>
    <div class="TreeWrpa">
      <el-tree
        :data="treeData"
        :props="defaultPropsTree"
        show-checkbox
        @node-click="handleNodeClickTree"
      ></el-tree>
    </div>
    <el-divider></el-divider>
    <baseInputSel :options="options" v-model="tagsArray" />
    <button @click="submit">提交</button>
  </div>
</template>
<script>
import baseInputSel from '@/comm/baseInputSel.vue'
function treeListToList(treeList) {
  // 将树结构的列表转换为普通列表
  let list = []
  handleTreeList(treeList, list)
  return list
}
function handleTreeList(treeList, list) {
  if (!treeList || !treeList.length) {
    return
  }
  for (let i = 0; i < treeList.length; i++) {
    let currentRow = treeList[i]
    let newRow = JSON.parse(JSON.stringify(currentRow))
    newRow.children = undefined
    list.push(newRow)
    handleTreeList(currentRow.children, list)
  }
}
function toTree(data) {
  // 删除 所有 children,以防止多次调用
  data.forEach(function (item) {
    delete item.children
  })
  // 将数据存储为 以 id 为 KEY 的 map 索引数据列
  var map = {}
  data.forEach(function (item) {
    map[item.id] = item
  })
  //        console.log(map);
  var val = []
  data.forEach(function (item) {
    // 以当前遍历项，的pid,去map对象中找到索引的id
    var parent = map[item.pid]
    // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      parent.children || (parent.children = []).push(item)
    } else {
      //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item)
    }
  })
  return val
}
export default {
  components: {
    baseInputSel,
  },
  data() {
    return {
      tagsArray: [],
      options: [
        'a',
        'b',
        'c',
        // { label: 'a', value: 'a' },
        // { label: 'b', value: 'b' },
        // { label: 'c', value: 'c' },
      ],
      message: 'zh_CN=中国,en_US=china',
      textareaTreeData: '',
      defaultProps: {
        children: 'children',
        label: 'label',
      },
      treeData: [],
      defaultPropsTree: {
        children: 'children',
        label: 'name',
      },
      initialData: [
        { id: 1, name: '办公管理', pid: 12 },
        { id: 2, name: '请假申请', pid: 1 },
        { id: 3, name: '出差申请', pid: 1 },
        { id: 4, name: '请假记录', pid: 2 },
        { id: 5, name: '系统设置', pid: 111 },
        { id: 6, name: '权限管理', pid: 5 },
        { id: 7, name: '用户角色', pid: 222 },
        { id: 8, name: '菜单设置', pid: 6 },
      ],
      list: [
        {
          value: 192,
          label: '技术部',
          children: [
            {
              value: 193,
              label: '软件组',
              children: [
                {
                  value: 195,
                  label: '软件一组',
                },
                {
                  value: 196,
                  label: '软件二组',
                },
              ],
            },
            {
              value: 198,
              label: '运维组',
            },
          ],
        },
        {
          value: 200,
          label: '财务部',
          children: [
            {
              value: 201,
              label: '会计',
            },
            {
              value: 203,
              label: '出纳',
            },
          ],
        },
        {
          value: 300,
          label: '人资部',
          children: [
            {
              value: 301,
              label: '行政',
            },
            {
              value: 302,
              label: '人资',
            },
          ],
        },
      ],
    }
  },
  created() {
    this.treeData = toTree(this.initialData)
    console.log('创建了')
  },
  methods: {
    submit() {
      console.log(this.tagsArray)
    },
    btn() {
      this.$message({
        message: '控制台打印了Tree数据和转换的普通数据',
        type: 'success',
      })
      let newList = treeListToList(this.list)
      console.log(this.list)
      console.log(newList)
    },
    handleNodeClick() {
      console.log(111)
    },
    handleNodeClickTree() {
      console.log(222)
    },
  },
}
</script>
<style lang="less" scoped>
.TreeWrpa {
  width: 50%;
  display: inline-block;
  vertical-align: top;
}
</style>