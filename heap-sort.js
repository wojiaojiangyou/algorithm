/**
 * 堆排序
 * 父节点位置：(i - 1) / 2
 * 左叶子节点位置：2 * i + 1
 * 右叶子节点位置：2 * i + 2
 * 时间复杂度： O(log^n) 空间复杂度：O(1)
 * 稳定
*/
const arr = [3,1,5,6,2,9,8,4]

function heapSort(arr) {
  arr.forEach((val, index) => {
    heapInsert(arr, index) // 形成大根堆
  })

  let heapsize = arr.length - 1
  swap(arr, 0, heapsize) // 交换大根堆对顶数据

  while (heapsize > 0) {
    heapify(arr, 0, heapsize) // 重新计算堆结构 将小的值 沉到底部
    swap(arr, 0, --heapsize) // 交换大根堆对顶数据 减少边界数据
  }
}

// 堆数据发生变动的时候比对当前数据
function heapify(arr, index, heapsize) {
  let left = 2 * index + 1 // 获得当前位置的叶子节点
  // 判断当前叶子节点是否超出堆栈
  while(left < heapsize) {
    let large = left + 1 < heapsize && arr[left + 1] > arr[left] ? left + 1 : left // 对比同层节点大的索引
    large = arr[large] > arr[index] ? large : index // 同层的大节点和当前节点对比获得最大的索引
    if (large === index) break // 相同则不处理
    swap(arr, large, index) // 交换当前数据
    index = large // 当前索引移动到叶子节点较大的位置
    left = 2 * index + 1 // 继续获取较大节点位置的下一个叶子节点
  }
}

// 建立大根堆
function heapInsert(arr, index) {
  // 判断当前节点数据是否比父节点大
  while(arr[index] > arr[getRootIndex(index)]) {
    const rootIndex = getRootIndex(index)
    swap(arr, index, rootIndex) // 换到大的层级
    index = rootIndex
  }
}

function getRootIndex(i) {
  return  Math.floor((i - 1) / 2) > 0 ? Math.floor((i - 1) / 2) : 0
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

heapSort(arr)