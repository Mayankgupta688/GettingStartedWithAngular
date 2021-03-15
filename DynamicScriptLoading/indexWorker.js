var workerThread = new Worker("synchronousExecution.js");

workerThread.onmessage = function(event) {
  console.log(event.data);
}