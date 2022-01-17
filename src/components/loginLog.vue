<template>
  <div>
    <!--  Domain="http://puo3hd5oc.bkt.clouddn.com" 
     @exportData="exportData"
    -->
    <minder
      ref="minder"
      accesskey="cTVaSHuahYgy-4Qvbo5LewAd5Add5625w2LSuF_5"
      SecretKey="ZEJvO2-zNNE07p8DpPIBtyejt_BYf2SxZ7pbsMR7"
      scope="jm"
      :importData="importData"
      @saveData="saveData"
    ></minder>
  </div>
</template>
<script>
export default {
  data() {
    return {
      importData: {
        //数据结构
        data: { text: 'Design project', id: 2 },
        children: [
          {
            data: { text: 'Designsy', id: 3 },
            children: [
              {
                data: { text: 'Designsy', id: 4 },
                children: [
                  { data: { text: 'Designsy', id: 5 } },
                  { data: { text: 'Designsy', id: 5 } },
                  { data: { text: 'Designsy', id: 5 } },
                ],
              },
              { data: { text: 'Designsy', id: 5 } },
              { data: { text: 'Designsy', id: 62 } },
              { data: { text: 'Designsy', id: 73 } },
              { data: { text: 'Designsy', id: 84 } },
            ],
          },
          { data: { text: 'Designsy', id: 9 } },
          { data: { text: 'Designsy', id: 102 } },
          { data: { text: 'Designsy', id: 113 } },
          { data: { text: 'Designsy', id: 124 } },
        ],
      },
    }
  },
  methods: {
    exportData(data) {
      //变化时返回数据
      console.log(data)
    },
    saveData(data) {
      //
      console.log(data)
    },
  },
}
</script>