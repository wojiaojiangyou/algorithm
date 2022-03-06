/**
 * 快速排序
 * 时间复杂度： O(n * logN) 空间复杂度：O(log2n)
 * 稳定
*/
const arr = [3,1,5,6,4,2,9,8,4]

quickSort(arr, 0, arr.length - 1)

function quickSort(arr, left, right) {
  if (left < right) {
    // 优化项： 也可以先随机交换最后一个数 达到样本率随机优化。swap(arr, left + (Matth.random() * (left + right - 1)), right)
    // 返回对比的中间值位置
    const [less, more] = partition(arr, left, right)
    // 左边排序
    quickSort(arr, left, less - 1)
    // 右边排序
    quickSort(arr, more + 1, right)
  }
}

/**
 * 排序方法
 * @param {Array} arr 排序数组
 * @param {Number} leftBound 左指针
 * @param {Number} rightBound 右指针
 */
function partition(arr, leftBound, rightBound) {
  let cur = leftBound
  let left = leftBound
  let right = rightBound - 1 // 取边界位置的前一个数
  // 判断条件 当前索引位置 小于右边界位置
  while(cur < right) {
    if (arr[cur] < arr[rightBound]) { // 小于的时候交换 并且增加当前left 和 cur指针
      swap(arr, cur, left)
      left++
      cur++
    } else if (arr[cur] > arr[rightBound]) { // 大于的时候 减少right边界并且交换 继续比较当前cur的值
      swap(arr, cur, right)
      right--
    } else { // 相等就直接移动当前指针
      cur++
    }
  }
  // 由于right结束指向当前相等的位置上 所以需要偏移一位
  swap(arr, right + 1, rightBound)
  return [left, right + 1]
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}