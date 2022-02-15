/**
 * 归并排序
 * 时间复杂度： O(n * log2n) 空间复杂度：O(n)
 * 稳定
*/
// const arr = [1, 4, 7, 8, 3, 6, 9]
const arr = [1, 4, 3, 5, 2, 7, 6]
sort(arr, 0, arr.length - 1)
/**
 * 排序数组
 * @param {*} arr 排序的数组
 * @param {*} left 左边起始位置
 * @param {*} right 右边边界位置
 */
function sort(arr, left, right) {
  // 当起始与边界相同 直接返回
  if (left === right) return
  // 数组要分隔两半
  const mid = Math.floor(left + (right - left) / 2)
  // 左边排序
  sort(arr, left, mid)
  // 右边排序
  sort(arr, mid + 1, right)
  // 合并排序内容
  merge(arr, left, mid + 1, right)
}

/**
 * 合并方法
 * @param {*} arr 排序的数组
 * @param {*} leftPtr 左指针
 * @param {*} rightPtr 右指针
 * @param {*} rightBound 数组边界
 */
function merge(arr, leftPtr, rightPtr, rightBound) {
  const mid = rightPtr - 1
  const temp = new Array(rightBound - leftPtr + 1) // 用右边界减去左指针位置换算当前临时存储数组大小加1
  let i = leftPtr
  let j = rightPtr
  let k = 0

  while (i <= mid && j <= rightBound) {
    temp[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++]
  }
  // 当循环完毕还剩下 左数组或者右数组的时候 直接合并剩余数据
  while (i <= mid) temp[k++] = arr[i++]
  while (j <= rightBound) temp[k++] = arr[j++]
  // 更改原数组赋值
  for (let m = 0; m < temp.length; m++) {
    arr[leftPtr + m] = temp[m]
  }
}
