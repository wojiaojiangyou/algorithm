/**
 * 插入排序
 * 时间复杂度： O(n2) 空间复杂度：O(1) 最好时间复杂度 O(n)
 * 稳定
*/
const arr = [3,1,5,6,2,9,8, 4]

for (let i = 1; i < arr.length; i++) {
  // 拿当前的数据与之前的数据进行对比交换
  for (let j = i; j > 0; j--) {
    if (arr[j] < arr[j - 1]) swap(arr, j, j -1)
  }
}


function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}