/**
 * 冒泡排序
 * 时间复杂度： O(n2) 空间复杂度：O(1) 最好时间复杂度 O(n)
 * 稳定
*/
const arr = [3,1,5,6,2,9,8, 4]

for (let i = arr.length - 1; i > 0; i--) {
  // 优化算法 当按照顺序排列的时候 值循环n次
  if (arr[i] >= arr[i - 1]) continue
  
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[j + 1]) swap(arr, j, j + 1) // 对比替换
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}