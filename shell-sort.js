/**
 * 希尔排序
 * 时间复杂度： O(n1.3) 空间复杂度：O(1)
 * 不稳定
 * 
 * 间隔计算
 *  1. 常规二分法数组间隔： gap = arr.length / 2
 *  2. knuth最佳间隔计算： h = 1;  h = 3 * h + 1
*/
const arr = [3,1,5,6,2,9,8,4]

/* 第一种： 常规gap间距的排序  */

// 定义shell排序的间隔： 我们这边采用数组二分法
for(let gap = arr.length / 2; Math.floor(gap) > 0; gap /= 2) {
  // 定义循环以gap为起点 这里采用i++是为了以当前间隔依次对比
  for (let i = gap; i < arr.length; i++) {
    // 对比交换以gap为间隔距离进行比较
    for (let j = i; j > gap - 1; j -= gap ) {
      if (arr[j] < arr[j - gap]) swap(arr, j, j - gap)
    }
  }
}


/* 第二种：knuth间隔计算 */
let h = 1;
// 计算当前最佳间隔距离
while (h <= arr.length / 3) {
  h = 3 * h + 1;
}
// 使用最佳间距循环排序
for (let gap = h; Math.floor(gap) > 0; gap = (gap - 1) / 3) {
  for (let i = gap; i < arr.length; i++) {
    for (let j = i; j > gap - 1; j -= gap) {
      if (arr[j] < arr[j - gap]) swap(arr, j, j - gap)
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}