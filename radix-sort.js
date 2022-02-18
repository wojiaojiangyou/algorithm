/**
 * 基数排序
 * 时间复杂度： O(n * k) 空间复杂度：O(n)
 * 稳定
*/
const arr = [421, 123, 25, 675, 214, 156, 123, 12, 1, 78]

// 计算当前数组最大数字的位数
const maxLen = Math.max(...arr).toString().length

sort(arr, maxLen)

function sort(arr, maxLen) {
  const count = new Array(arr.length)
  const result = new Array(arr.length)
  console.log('maxleng', maxLen)
  // 循环当前最大位数
  for (let i = 0; i < maxLen; i++) {
    const division = Math.pow(10, i)
    console.log('====== pow', division)
    for (let j = 0; j < arr.length; j++) {
      const num = Math.floor(arr[j] / division) % 10
      count[num] = count[num] ? ++count[num] : 1
    }

    console.log('count', count)

    // 计算累加数组 确认每位数最后一位出现的个数
    for (let j = 1; j < count.length; j++) {
      if (!count[j]) count[j] = 0
      if (!count[j -1 ]) count[j - 1] = 0

      count[j] += count[j - 1]
    }
    console.log('count add', count)

    // 根据累加数组 放值数据
    for (let j = arr.length - 1; j >=0; j--) {
      const num = Math.floor( arr[j] / division) % 10
      result[--count[num]] = arr[j]
    }
    
    count.fill(0) // 重制count数组 
    arr = [...result] // 更新数组操作
    console.log('result', arr)
  }
}
