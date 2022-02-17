/**
 * 计数排序
 * 时间复杂度： O(n + k) 空间复杂度：O(n + k)
 * 稳定
*/
const arr = [0, 5, 4, 6, 7, 1, 2, 5, 1, 3]

sort(arr)

function sort(arr) {
  const countArr = new Array(10)
  const resultArr = new Array(arr.length)
  // 这边产生计数数组 索引为值 值为出现次数
  for (let i = 0, j = 0; i < arr.length; i++) {
    const val = arr[i]
    countArr[val] = countArr[val] ? ++countArr[val] : 1
  }
  // 计算累加累加数组 得出当前值出现的最后位置
  for (let i = 1; i < countArr.length; i++) {
    countArr[i] = countArr[i] + countArr[i - 1]
  }
  // 循环计数数组 根据值出现的个数填充数据 ps: 倒序循环结合累加数组的位置信息 保证稳定
  for (let j = arr.length - 1; j >= 0; j--) {
    const val = arr[j]
    const index = --countArr[val]
    resultArr[index] = val 
  }
}