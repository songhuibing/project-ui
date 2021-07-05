<template>
  <div>
    <!-- <h5>发布订阅模式</h5> -->
    <div>
      <el-button size="mini"
                 class="none-radius"
                 @click="handleExport">导出</el-button>
      <el-table id="tableWrap"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column label="日期"
                         width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="120">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址"
                         show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
/**发布
 * 中间代理
 * 订阅
 **/
function Events() {
  this.callbacks = []
  this.results = []
}
Events.prototype.on = function (callback) {
  //订阅
  this.callbacks.push(callback)
}
Events.prototype.emit = function (data) {
  //发布
  this.results.push(data)
  this.callbacks.forEach((c) => c(this.results))
}
let e = new Events()
e.on(function (arr) {
  console.log(arr)
})
e.emit(111)
e.emit(222)
e.emit(333)

/*------------------------------------------------------------------------------------*/
/**观察者模式
 * 被观察者 里有  观察者
 **/
class Subject {
  //被观察者
  constructor(name) {
    this.name = name
    this.observers = []
    this.state = '宝宝心情好'
  }
  attach(observes) {
    //存放所有观察者
    this.observers.push(observes)
  }
  changeState(newState) {
    //改变状态通知观察者更新
    this.state = newState
    this.observers.forEach((o) => o.update(newState))
  }
}
class Observer {
  //观察者
  constructor(name) {
    this.name = name
  }
  update(state) {
    console.log('通知' + this.name + state)
  }
}
let baby = new Subject('小宝宝')
let obs1 = new Observer('爸爸')
let obs2 = new Observer('妈妈')
baby.attach(obs1)
baby.attach(obs2)
baby.changeState('心情不好了')
import htmlToExcel from '@/utlis/fileSave.js'
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
      ],
      multipleSelection: [],
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleExport() {
      /*
      如果需求是要导出选中的数据，则需要框显示选中数据导出弹框中的数据 传的选择器则是弹框的容器 htmlToExcel.exportExcel('#tableWrap')
      */
      this.$confirm('该操作将导出所有列表数据，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          htmlToExcel.exportExcel('#tableWrap')
        })
        .catch(() => {})
    },
  },
}
</script>