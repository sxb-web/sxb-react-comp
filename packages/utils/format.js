
function formatValueByGapRule(rules, value, gap = ' ') {
  const arr = value ? value.split('') : []
  let showValue = ''
  const rule = []
  rules.split('|').some((n, j) => {
    rule[j] = +n + (rule[j - 1] ? + rule[j - 1] : 0)
  })
  let j = 0
  arr.some((n, i) => {
    if (i > rule[rule.length - 1] - 1) {
      return
    }
    if (i > 0 && i === rule[j]) {
      showValue = showValue + gap + n
      j++
    } else {
      showValue = showValue + '' + n
    }
  })
  return showValue
}

function formatValueByGapStep(step, value, direction = 'left', gap = ' ') {
  if (value.length === 0) {
    return value
  }
  const arr = value && value.split('')
  let showValue = ''
  if (direction === 'left') {
    arr.some((n, i) => {
      showValue = i > 0 && i % step === 0 ? showValue + gap + n : showValue + '' + n
    })
  } else {
    for (let j = arr.length - 1, k = 0; j >= 0; j--, k++) {
      const m = arr[j]
      showValue = k > 0 && k % step === 0 ? m + gap + showValue : m + '' + showValue
    }
  }
  return showValue
}
function trimValue(value, gap = ' ') {
  value = typeof value === 'undefined' ? '' : value
  const reg = new RegExp(gap, 'g')
  value = value.toString().replace(reg, '')
  return value
}

export {
  formatValueByGapRule,
  formatValueByGapStep,
  trimValue
}