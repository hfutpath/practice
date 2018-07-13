this.dataStore = [];
function setData(length) {
  for (var i = 0; i < length; i++) {
    this.dataStore[i] = Math.floor((Math.random() * length + 1))
  }
  console.log('生成的原始随机数组:', this.dataStore);
}

function normal() {
  var data = this.dataStore.concat();
  var start = new Date().getTime();
  data.sort(function (a, b) { return a - b });
  var end = new Date().getTime();
  console.log('排序完成的数组:', data)
  console.log('排序完成花费的时间:', end - start);
}

function qSort(data) {
  
  if (data.length == 0) {
    return [];
  }
  var lesser = [];
  var greater = [];
  var pivot = data[0];
  for (var i = 1; i < data.length; i++) {
    if (data[i] < pivot) {
      lesser.push(data[i]);
    } else {
      greater.push(data[i]);
    }
  }
  return qSort(lesser).concat(pivot, qSort(greater));
}
function fast() {
  var data = this.dataStore.concat();
  var start = new Date().getTime();
  data = qSort(data);
  var end = new Date().getTime();
  console.log('快速排序得到的结果：', data);
  console.log('快速排序花费的时间：', end - start);
}