<template>
  <!--  渲染十万条数据处理 -->
  <div id="wrap">

  </div>
</template>
<script>
const total = 100000
const once = 20
const loopCount = Math.ceil(total / once)
let conuntRounder = 0

export default {
  data() {
    return {
      ulwrap: null,
    }
  },
  mounted() {
    this.ulwrap = document.getElementById('wrap')
    this.loop()
  },
  methods: {
    add() {
      const fragment = document.createDocumentFragment() //创建虚拟节点
      for (let i = 0; i < once; i++) {
        const li = document.createElement('li')
        li.innerHTML = Math.floor(Math.random() * 100000)
        fragment.appendChild(li)
      }

      this.ulwrap.appendChild(fragment)
      conuntRounder++
      this.loop()
    },
    loop() {
      if (conuntRounder < loopCount) {
        window.requestAnimationFrame(this.add) //不用定时器的原因  https://www.jianshu.com/p/fa5512dfb4f5
      }
    },
  },
}
</script>