console.time("LoadingTime")

function iterateData() {
  var result = 0;
  for(let i = 0; i< 1000000000; i++) {
    result += result/10;
  }
  console.log(result)
}

iterateData();
console.timeEnd("LoadingTime")