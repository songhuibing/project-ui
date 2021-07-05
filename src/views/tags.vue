<template>
  <div class="tags">
    <div class="tagsBox">
      <ul>
        <li v-for="(item,index) in tagsList"
            :class="{'active':isActive(item.path)}"
            :key="item.title">
          <router-link :to="item.path">
            {{item.title}}
          </router-link>
          <span class="tags-li-icon"
                @click="delFun(index)"><i class="el-icon-close"></i></span>
        </li>
      </ul>
    </div>
    <div class="tagsSet">
      <el-dropdown trigger="click"
                   @command="handleCommand">
        <el-button type="primary"
                   size="mini">
          标签选项<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.setTags(this.$route)
  },
  data() {
    return {
      tagsList: [],
    }
  },
  methods: {
    isActive(path) {
      //拿每个li的路径跟当前路径匹配
      return path === this.$route.fullPath
    },
    delFun(index) {
      if (this.tagsList.length > 1) {
        const delItem = this.tagsList.splice(index, 1)[0] //删除了index位置数据并取得该值
        const item = this.tagsList[index]
          ? this.tagsList[index]
          : this.tagsList[index - 1]
        if (item) {
          delItem.path === this.$route.fullPath && this.$router.push(item.path)
        }
      } else {
        this.$message({
          message: '已经最后一个，不能再删了',
          type: 'warning',
        })
      }
    },
    handleCommand(command) {
      command === 'other' ? this.closeOther() : this.closeAll()
    },
    closeOther() {
      const currentItem = this.tagsList.filter((item) => {
        return item.path === this.$route.fullPath
      })
      this.tagsList = currentItem
    },
    closeAll() {
      this.tagsList = []
      this.$router.push('/')
    },
    setTags(route) {
      const curItem = this.tagsList.some((item) => {
        return item.path === this.$route.fullPath
      })
      if (!curItem) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift()
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
        })
      }
    },
  },
  watch: {
    $route(newVal) {
      console.log(newVal)
      this.setTags(newVal)
    },
  },
}
</script>
<style lang="less">
.tags {
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 5px 10px #ddd;
  .tagsBox {
    ul {
      height: 30px;
      display: flex;
      align-items: center;
      li {
        cursor: pointer;
        background: #fff;
        padding: 0 5px 0 12px;
        margin: 3px 5px 2px 3px;
        height: 23px;
        line-height: 23px;
        border-radius: 4px;
        border: 1px solid #e9eaec;
        text-align: center;
        //   width: ;
        a {
          color: #666;
        }
      }
      .active {
        background: #409eff;
        border: 1px solid #409eff;
        color: #fff;
        a {
          color: #fff;
        }
      }
    }
  }
  .tagsSet {
    width: 110px;
    text-align: center;
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
}
</style>