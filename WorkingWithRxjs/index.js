debugger
var randomNumberGenerator = Rx.Observable.create(function(observer) {
    debugger;
    setInterval(() => {
        debugger;
        var data = Math.floor(Math.random() * 100);
        if(data === 10) {
            observer.complete();
        }
        observer.next(Math.floor(Math.random() * 100))
    }, 2000)
})

var currentTimeGenerator = Rx.Observable.create(function(observer) {
    
    setInterval(() => {
        observer.next(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`)
    }, 1000)
})

randomNumberGenerator.subscribe((data) => {
    document.getElementById("root").innerText = `The Random Number Generated is ${data}`;
})

randomNumberGenerator.subscribe({
    next: (data) => {
        document.getElementById("time").innerText = `The Current is ${data}`;
    }, complete: () => {},
    error: () => {}
})