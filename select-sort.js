/**
 * 选择排序
 * 时间复杂度： O(n2) 空间复杂度：O(1)
 * 不太稳定： 当具备相同数据时候，可能会出现位置调换
*/
const arr = [3,1,5,6,2,9,8]
// 找出最小值序号、最大值序号优化
for (let i = 0; i < arr.length - 1; i++) {
  let minPosi = i
  let maxPosi = arr.length - 1 - i
  for (let j = i + 1; j < arr.length - i; j++) {
    if (arr[j] < arr[minPosi]) minPosi = j
    if (arr[j] > arr[maxPosi]) maxPosi = j
  }
  // 这边由于两边向内压缩 所以索引取数组的一半做运算即可
  if (i > (arr.length - 1) / 2) break
  swap(arr, i, minPosi)
  swap(arr, arr.length - 1 - i, maxPosi)
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}