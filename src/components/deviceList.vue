<template>
  <div>
    <!--  :components="components" -->
    <a-table bordered :columns="columns" :components="components" :data-source="data">
      <template v-slot:action>
        <a href="javascript:;">Delete</a>
      </template>
    </a-table>
    <span class="text">{{testMix}}</span>
  </div>
</template>

<script>
import { Mymixin } from './mymixin.js'
export default {
  name: 'App',
  mixins: [Mymixin],
  data() {
    return {
      data: [
        {
          key: 0,
          date: '2018-02-11',
          amount: 120,
          type: 'income',
          note: 'transfer',
        },
        {
          key: 1,
          date: '2018-03-11',
          amount: 243,
          type: 'income',
          note: 'transfer',
        },
        {
          key: 2,
          date: '2018-04-11',
          amount: 98,
          type: 'income',
          note: 'transfer',
        },
      ],
      columns: [
        {
          title: 'Date',
          dataIndex: 'date',
          width: 200,
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          width: 100,
        },
        {
          title: 'Type',
          dataIndex: 'type',
          width: 100,
        },
        {
          title: 'Note',
          dataIndex: 'note',
          width: 100,
        },
        {
          title: 'Action',
          key: 'action',
          fixed: 'right',
          scopedSlots: { customRender: 'action' },
        },
      ],
    }
  },
}
</script>
<style>
.resize-table-th {
  position: relative;
}
.table-draggable-handle {
  /* width: 10px !important; */
  height: 100% !important;
  left: auto !important;
  right: -5px;
  cursor: col-resize;
  touch-action: none;
  border: none;
}
.text {
  cursor: col-resize;
}
</style>
