var employeeList = [{
    name: "mayank",
    age: 20
}, {
    name: "Anshul",
    age: 20
}, {
    name: "Meha",
    age: 15
}]

var arrOfArray = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6, 7, 8, 10, [ 1, 2, 3, 4]],
    null
]

var data = {
    name: "Mayank",
    age: 20,
    salary: [1, 2, 3, 4, 5]
}

console.log(data.salary[3])

console.log(arrOfArray[2][4])

console.log(employeeList[1].name)

var sampleData = [
    {
      "id": "1",
      "createdAt": "2018-12-02T18:40:46.127Z",
      "name": "Bart Bradtke",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ovall/128.jpg"
    },
    {
      "id": "2",
      "createdAt": "2018-12-03T03:26:10.255Z",
      "name": "Rosalinda Bergnaum",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/chanpory/128.jpg"
    },
    {
      "id": "3",
      "createdAt": "2018-12-03T02:07:36.722Z",
      "name": "Miss Tiffany Franecki",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/increase/128.jpg"
    },
    {
      "id": "4",
      "createdAt": "2018-12-02T19:13:25.363Z",
      "name": "Vincenzo Raynor",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/martinansty/128.jpg"
    },
    {
      "id": "5",
      "createdAt": "2018-12-03T15:31:26.125Z",
      "name": "Bryon Simonis",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/travis_arnold/128.jpg"
    },
    {
      "id": "6",
      "createdAt": "2018-12-02T21:59:48.985Z",
      "name": "Clemens Ferry",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/gizmeedevil1991/128.jpg"
    },
    {
      "id": "7",
      "createdAt": "2018-12-02T22:41:29.705Z",
    },
    {
      "id": "8",
      "createdAt": "2018-12-03T14:19:36.176Z",
      "name": "Xavier Rippin MD",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/joemdesign/128.jpg",
      "salary": 30000
    },
    {
      "id": "9",
      "createdAt": "2018-12-02T18:26:57.142Z",
      "name": "Ms. Delphia Ankunding",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/abotap/128.jpg"
    },
    {
      "id": "10",
      "createdAt": "2018-12-03T01:01:07.722Z",
      "name": "Maynard Lynch"
    }]

    console.log(sampleData[0].name)