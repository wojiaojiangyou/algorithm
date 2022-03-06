// 如何查找数组中相邻两个数最大的差值 算法复杂度为O(N) 不能进行比较
// 题解：使用通排序思想

const arr = [3,1,4,2,5,8,6]

function findMaxDistance(arr) {
  if (arr.length < 2) return 0
  // 先获取数组中最大值和最小值
  let minNum = Math.min(...arr)
  let maxNum = Math.max(...arr)
  // 相等直接返回
  if (maxNum === minNum) return 0
  // 声明存放数组值在桶的状态信息： 是否有数据、当前桶的最小值、当前桶的最大值
  let hasNums = []
  let mins = []
  let maxs = []
  
  arr.forEach((val, index) => {
    const bid = bucket(val, arr.length, minNum, maxNum) || 0 // 获取值分配到桶的位置
    maxs[bid] = maxs[bid] ? Math.max(maxs[bid], val) : val // 获取当前桶的最大值
    mins[bid] = mins[bid] ? Math.max(mins[bid], val) : val // 获取当前桶的最小值
    hasNums[bid] = true // 改变数据状态
  })

  let distance = 0
  let lastMax = maxs[0] // 拿到当前第一个桶的最大值

  for (let i = 1; i <= arr.length; i++) {
    // 有值在进行对比
    if (hasNums[i]) {
      distance = Math.max(distance, mins[i] - lastMax) // 用当前桶的最小值 - 前一个桶的最大值 获得最大间距值
      lastMax = maxs[i] // 更新下一桶的最大值
    }
  }
  // 返回结果
  return distance
}

// 获取存放位置桶的位置： (当前值 - 最小值) * 数组长度 / (最大值 - 最小值)
function bucket(val, len, min, max) {
  return  Math.floor((val - min) * len / (max - min))
}


findMaxDistance(arr)