<template>
  <div id="data-view"
       style="height:100%">
    <!-- <dv-full-screen-container> -->
    <dv-border-box-1 class="main-container">
      <dv-border-box-12 class="left-chart-container"
                        ref="boxone"
                        width="100%">

        <Left-Chart-1 />
        <Left-Chart-2 />
        <Left-Chart-3 />

      </dv-border-box-12>

      <div class="right-main-container">
        <div class="rmc-top-container">
          <dv-border-box-12 class="rmctc-left-container"
                            ref="boxtwo">

            <Center-Cmp />

          </dv-border-box-12>

          <div class="rmctc-right-container">
            <dv-border-box-12 class="rmctc-chart-1"
                              ref="boxthree"
                              width="100%">

              <Right-Chart-1 />

            </dv-border-box-12>

            <dv-border-box-4 class="rmctc-chart-2"
                             ref="boxfour"
                             :reverse="true">

              <Right-Chart-2 />

            </dv-border-box-4>
          </div>
        </div>

        <dv-border-box-4 class="rmc-bottom-container"
                         ref="boxfive">

          <Bottom-Charts />

        </dv-border-box-4>
      </div>
    </dv-border-box-1>

    <!-- </dv-full-screen-container> -->
  </div>
</template>

<script>
import LeftChart1 from './LeftChart1'
import LeftChart2 from './LeftChart2'
import LeftChart3 from './LeftChart3'
import CenterCmp from './CenterCmp'
import RightChart1 from './RightChart1'
import RightChart2 from './RightChart2'
import BottomCharts from './BottomCharts'
import { mapState } from 'vuex'
export default {
  name: 'DataView',
  computed: {
    ...mapState(['isCollapse']),
  },
  watch: {
    isCollapse() {
      this.$refs.boxone.initWH()
      this.$refs.boxtwo.initWH()
      this.$refs.boxthree.initWH()
      this.$refs.boxfore.initWH()
      this.$refs.boxfive.initWH()
    },
  },
  components: {
    LeftChart1,
    LeftChart2,
    LeftChart3,
    CenterCmp,
    RightChart1,
    RightChart2,
    BottomCharts,
  },
  data() {
    return {}
  },
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  background-image: url('../../assets/bg.png');
  background-size: 100% 100%;
  box-shadow: 0 0 3px blue;
  //   #dv-full-screen-container {
  //     display: flex;
  //     flex-direction: column;
  //   }
  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .mh-left {
      font-size: 16px;
      color: rgb(1, 134, 187);
      a:visited {
        color: rgb(1, 134, 187);
      }
    }
    .mh-middle {
      font-size: 18px;
    }
    .mh-left,
    .mh-right {
      width: 450px;
    }
  }
  .main-container {
    height: 100%;
    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }
  .left-chart-container {
    width: 22%;
    padding: 10px;
    box-sizing: border-box;
    .border-box-content {
      flex-direction: column;
    }
  }
  .right-main-container {
    width: 78%;
    padding-left: 5px;
    box-sizing: border-box;
  }
  .rmc-top-container {
    height: 65%;
    display: flex;
  }
  .rmctc-left-container {
    width: 65%;
  }
  .rmctc-right-container {
    width: 35%;
  }
  .rmc-bottom-container {
    height: 35%;
  }
  .rmctc-chart-1,
  .rmctc-chart-2 {
    height: 50%;
  }
}
</style>