<template>
  <div ref="list"
       class="infinite-list-container"
       @scroll="scrollEvent($event)">
    <div class="infinite-list-phantom"></div>
    <div class="infinite-list"
         :style="{ transform: getTransform, height: listHeight + 'px' }">
      <div ref="items"
           class="infinite-list-item"
           v-for="item in visibleData"
           :key="item.id"
           :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VirtualList',
  data() {
    return {
      //所以列表数据
      listData: [],
      //每项高度
      itemSize: 20,
      //可视区域高度
      screenHeight: 0,
      //偏移量
      startOffset: 0,
      //起始索引
      start: 0,
      //结束索引
      end: null,
    }
  },
  mounted() {
    this.screenHeight = this.$el.clientHeight
    this.start = 0
    this.end = this.start + this.visibleCount
  },
  methods: {
    scrollEvent() {
      //当前滚动位置
      let scrollTop = this.$refs.list.scrollTop
      //此时的开始索引
      this.start = Math.floor(scrollTop / this.itemSize)
      //此时的结束索引
      this.end = this.start + this.visibleCount
      //此时的偏移量
      this.startOffset = scrollTop - (scrollTop % this.itemSize)
    },
  },
  computed: {
    //列表总高度
    listHeight() {
      return this.listData.length * this.itemSize
    },
    //可显示的列表项数
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemSize)
    },
    //偏移量对应的style
    getTransform() {
      return `translate3d(0,${this.startOffset}px,0)`
    },
    //获取真实显示列表数据
    visibleData() {
      return this.listData.slice(
        this.start,
        Math.min(this.end, this.listData.length)
      )
    },
  },

  created() {
    for (var i = 0; i < 1000; i++) {
      this.listData.push(i)
    }
  },
}
</script>