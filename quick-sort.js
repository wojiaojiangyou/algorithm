/**
 * 快速排序
 * 时间复杂度： O(n * logN) 空间复杂度：O(log2n)
 * 稳定
*/
const arr = [3,1,5,6,2,9,8,4]

quickSort(arr, 0, arr.length - 1)

function quickSort(arr, left, right) {
  // 当起始大于边界位置 返回
  if (left >= right) return
  // 返回对比的中间值位置
  const mid = partition(arr, left, right)
  // 左边排序
  quickSort(arr, left, mid - 1)
  // 右边排序
  quickSort(arr, mid + 1, right)
}

/**
 * 排序方法
 * @param {Array} arr 排序数组
 * @param {Number} leftBound 左指针
 * @param {Number} rightBound 右指针
 */
function partition(arr, leftBound, rightBound) {
  const markNum = arr[rightBound] // 定义一个对比值
  let left = leftBound
  let right = rightBound - 1
  // 处理对比值
  while(left <= right) {
    while(left <= right && arr[left] <= markNum) left++
    while(left <= right && arr[right] > markNum) right--
    // 如果当前对比小于markNum进行交换
    if (left < right) swap(arr, left, right)
  }
  // 交换当前对比的值位置
  swap(arr, left, rightBound)
  // 返回当前对比中间值索引
  return left
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}