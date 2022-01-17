import elementMap from './elementMap.js'
export function computeFormItem(config, form) {
  const item = { ...config }
  const res = elementMap[item.type || 'input']
  item.type = res.component
  item.props = Object.assign({}, res.props, item.props)
  if (isFunction(item)) {
    Object.assign(item.props, item)
  }
  item.isShow = isFunction(item ? !!item.isShow : true)
  item.rule = getRule(item)
  if (item.props) {
    item.props.style = { width: item.props }
  }
  if (!item.isShow) {
    delete form[item.key]
  }
  return item
}