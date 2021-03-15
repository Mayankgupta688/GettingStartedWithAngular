debugger;

var workerThread = new Worker("synchronousExecution.js");
var fetchDataThread = new Worker("fetchData.js");

fetchDataThread.onmessage = function(event) {
  debugger;
}

debugger;
fetchDataThread.postMessage("abc");

fetchDataThread.terminate()

workerThread.onmessage = function(event) {
  debugger;
  console.log(event.data);
}

function randomClick() {
  alert("This is Button Click Event....")
}