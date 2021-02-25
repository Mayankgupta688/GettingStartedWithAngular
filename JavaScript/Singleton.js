var singletonObject = (function() {
    var name = "Mayank";
    var secretKey = "some_key"

    function getName() {
        if(secretKey == "some_key") {
            console.log("Secret Matched")
        }
        return name;
    }

    function getName1() {
        if(secretKey == "some_key") {
            console.log("Secret Matched")
        }
        return name;
    }

    function getName11() {
        if(secretKey == "some_key") {
            console.log("Secret Matched")
        }
        return name;
    }

    function getName123() {
        if(secretKey == "some_key") {
            console.log("Secret Matched")
        }
        return name;
    }
    
    return getName;
}());

console.log(singletonObject)

var output = singletonObject();

console.log(output)
