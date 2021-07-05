<template>
  <div>
    <js-mind :values="mind"
             :options="options"
             ref="jsMind"
             :height="mindHeight"></js-mind>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mindHeight: '800px',
      mind: {
        meta: {
          name: 'jsMind remote',
          author: 'hizzgdev@163.com',
          version: '0.2',
        },
        format: 'node_tree',
        data: {
          id: 'root',
          topic: 'jsMind',
          children: [
            {
              id: 'easy',
              topic: 'Easy',
              direction: 'left',
              expanded: false,
              children: [
                { id: 'easy1', topic: 'Easy to show' },
                { id: 'easy2', topic: 'Easy to edit' },
                { id: 'easy3', topic: 'Easy to store' },
                { id: 'easy4', topic: 'Easy to embed' },
              ],
            },
            {
              id: 'open',
              topic: 'Open Source',
              direction: 'right',
              expanded: true,
              children: [
                { id: 'open1', topic: 'on GitHub' },
                { id: 'open2', topic: 'BSD License' },
              ],
            },
            {
              id: 'powerful',
              topic: 'Powerful',
              direction: 'right',
              children: [
                { id: 'powerful1', topic: 'Base on Javascript' },
                { id: 'powerful2', topic: 'Base on HTML5' },
                { id: 'powerful3', topic: 'Depends on you' },
              ],
            },
            {
              id: 'other',
              topic: 'test node',
              direction: 'left',
              children: [
                { id: 'other1', topic: "I'm from local variable" },
                { id: 'other2', topic: 'I can do everything' },
              ],
            },
          ],
        },
      },
      options: {
        container: 'jsmind_container', // [必选] 容器的ID
        editable: false, // [可选] 是否启用编辑
        theme: 'orange', // [可选] 主题
      },
      defaultProps: {
        children: 'children',
        label: 'name',
      },
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577',
      ],
    }
  },
  created() {
    this.mindHeight = document.body.clientHeight - 90 + 'px'
  },
  mounted() {
    this.jm = this.$refs.jsMind.jm
  },
  methods: {
    // 获取选中标签的 ID
    get_selected_nodeid() {
      let selectedNode = this.jm.get_selected_node()
      if (selectedNode) {
        return selectedNode.id
      } else {
        return null
      }
    },
  },
}
</script>

<style>
.header {
  height: 60px;
  background-color: #eee;
  border-bottom: solid 1px #aaa;
  z-index: 100;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  overflow: hidden;
  background-color: #f2f2f2;
  border-top: solid 1px #bbb;
}
</style>