// 选择排序
const arr = [3,1,5,6,2,9,8]
// 找出最小值序号、最大值序号优化
for (let i = 0; i < arr.length - 1; i++) {
  let minPosi = i
  let maxPosi = arr.length - 1 - i
  for (let j = i + 1; j < arr.length - i; j++) {
    if (arr[j] < arr[minPosi]) minPosi = j
    if (arr[j] > arr[maxPosi]) maxPosi = j
  }
  // 
  if (i > (arr.length - 1) / 2) break
  swap(arr, i, minPosi)
  swap(arr, arr.length - 1 - i, maxPosi)
}


function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}