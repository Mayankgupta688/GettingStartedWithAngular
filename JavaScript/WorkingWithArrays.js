var arrayOfAge = [ 10, 20, 30, 45, 34, 45 ] 

console.log(arrayOfAge[2])

arrayOfAge[5] = 100

var sum = 0;

for(var data in arrayOfAge) {
    console.log(data)
}

debugger;

var hetroGeniousData = [10, "Mayank", false, null, undefined, {name: "Mayank" } , [1, 2, 3, 4]]

console.log(hetroGeniousData[6][2])
console.log(hetroGeniousData[5].name)

console.log(sum)