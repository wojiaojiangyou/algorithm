/** 
 * 荷兰国旗的列子: 给定一个num 比它小的放左边 等于放中间 大于放右边
 * */


const arr = [3,4,1,2,9,5,4,7,6]

function partition(arr, l, r, n) {
  let cur = 0
  let left = l
  let right = r
  // 判断条件 当前索引位置 小于右边界位置
  while(cur < right) {
    if (arr[cur] < n) { // 小于的时候交换 并且增加当前left 和 cur指针
      swap(arr, cur, left)
      left++
      cur++
    } else if (arr[cur] > n) { // 大于的时候 减少right边界并且交换 继续比较当前cur的值
      swap(arr, cur, right)
      right--
    } else { // 相等就直接移动当前指针
      cur++
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


partition(arr, 0, arr.length - 1, 4)