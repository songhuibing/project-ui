export const Mymixin = {
    data() {
        this.components = {
            header: {
                cell: (h, props, children) => {
                    const { key, ...restProps } = props
                    console.log('ResizeableTitle', key)
                    const col = this.columns.find((col) => {
                        const k = col.dataIndex || col.key
                        return k === key
                    })

                    if (!col || !col.width) {
                        return h('th', { ...restProps }, [...children])
                    }

                    const dragProps = {
                        key: col.dataIndex || col.key,
                        class: 'table-draggable-handle',
                        attrs: {
                            w: 10,
                            x: col.width,
                            z: 1,
                            axis: 'x',
                            draggable: true,
                            resizable: false,
                        },
                        on: {
                            dragging: (x, y) => {
                                console.log('拖拽了' + x)
                                col.width = Math.max(x, 1)
                            },
                        },
                    }
                    const drag = h('vue-draggable-resizable', { ...dragProps })
                    return h('th', { ...restProps, class: 'resize-table-th' }, [
                        ...children,
                        drag,
                    ])
                },
            },
        }
        return {
            testMix: '混入对象的data',
            // components: null
        }
    },
    mounted() {

    },
}