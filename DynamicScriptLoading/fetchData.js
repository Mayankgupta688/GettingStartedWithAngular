debugger;

fetch("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
    response.json().then((data) => {
        postMessage(data)
    })
})

onmessage = (event) => {
    debugger;
}