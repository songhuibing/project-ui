<template >
  <div>
    <div style="display:flex">
      region: <el-select v-model="value"
                 size='mini'
                 @change='changeFilter'
                 placeholder="请选择">
        <el-option v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <button @click="exportToPDF">export</button>
    </div>
    <div id="vizContainer"
         style="width:100%;height:100%">
    </div>

  </div>
</template>
 <script src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
<script>
//http://public.tableau.com/    http://<server name>/trusted
//  1.配置服务端的受信任IP 为本机  post http:// tableserve地址?username= 用户名 &target_site=  访问站点(EmbeddedAnalysis) 获取tick   sso
var viz
export default {
  data() {
    return {
      value: '',
      options: [
        { value: '', label: 'All' },
        { value: 0, label: 'value1' },
        { value: 1, label: 'value2' },
      ],
    }
  },
  mounted() {
    this.initViz()
  },
  methods: {
    exportToPDF() {
      viz.showExportPDFDialog() //导出
      console.log('daochu')
    },
    changeFilter(val) {
      debugger
      var sheet = viz
        .getWorkbook()
        .getActiveSheet()
        .getWorksheets()
        .get('Storm Map Sheet') // .get('sheet-name')
      if (val === '') {
        sheet.clearFilterAsync('filter-name')
      } else {
        //进行过滤操作
        sheet.applyFilterAsync(
          'Storm Map Sheet',
          [val],
          tableau.FilterUpdateType.REPLACE
        )
      }
      console.log(val)
    },
    initViz() {
      let _this = this
      var containerDiv = document.getElementById('vizContainer'),
        url = 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms', //地址 (trusted/tick) /t/站点  views/链接  加tick实现限权
        options = {
          hideTabs: false, //table页
          hideToolbar: false, //工具栏
          toolbarPosition: 'ApiToolbarPosition.Top', //位置
          onFirstInteractive: function () {
            // setInterval(() => {
            //   viz.refreshDataAsync()          5秒实时更新获取
            // }, 5000)
          },
        }
      viz = new tableau.Viz(containerDiv, url, options)
    },
  },
}

// http://mling-lap:8080/api/3.9/auth/signin  站点地址/api/...  动态url的token(下面用)  site站点id
// http://mling-lap:8080/api/3.9/sites/站点id/ views or/workbooks    请求头 X-Tableau-Auth:token   得到工作簿...
</script>
