<template >
  <div>
    <div id="radarchart" style="width:100%;height:300px"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chart: null,
    }
  },

  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      this.chart = this.$echarts.init(document.getElementById('radarchart'))
      this.chart.setOption({
        title: {
          text: '罗纳尔多 vs 舍普琴科',
          subtext: '完全实况球员数据',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          x: 'center',
          data: ['罗纳尔多', '舍普琴科'],
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        polar: [
          {
            indicator: [
              { text: '进攻', max: 100 },
              { text: '防守', max: 100 },
              { text: '体能', max: 100 },
              { text: '速度', max: 100 },
              { text: '力量', max: 100 },
              { text: '技巧', max: 100 },
            ],
            radius: 130,
          },
        ],
        series: [
          {
            name: '完全实况球员数据',
            type: 'radar',
            symbolSize: 0,
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default',
                },
              },
            },
            data: [
              {
                value: [97, 42, 88, 94, 90, 86],
                name: '舍普琴科',
              },
              {
                value: [97, 32, 74, 95, 88, 92],
                name: '罗纳尔多',
              },
            ],
          },
        ],
      })
    },
  },
}
</script>