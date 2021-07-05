<template>
  <div class="home">
    <pageHeader />
    <sideBar />
    <div class="content-box" :class="isCollapse?'min':'max'">
      <tags></tags>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import pageHeader from './Header.vue'
import sideBar from './sideBar.vue'
import tags from './tags.vue'

export default {
  name: 'Home',
  components: {
    pageHeader,
    sideBar,
    tags,
  },
  computed: {
    ...mapState(['isCollapse']),
  },
}
</script>
<style lang="less">
.home {
  height: 100%;
  .content-box {
    position: absolute;
    top: 50px;
    right: 0px;
    bottom: 0px;
    transition: left 0.3s ease-in-out; /**内容去根据折叠动态效果**/
    .content {
      position: absolute;
      right: 10px;
      padding: 20px;
      left: 0;
      top: 30px;
      bottom: 0;
      overflow: scroll;
    }
  }
  .min {
    left: 65px;
  }
  .max {
    left: 201px;
  }
}
</style>