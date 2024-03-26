// //!How to Compare two JSON have the same properties without order?


let obj1 = {name: "Person", age: 5};
let obj2 = {age: 5, name: "Person"};

let object1=Object.keys(obj1).sort();
let object2=Object.keys(obj2).sort();
// Convert JSON objects to strings
let string1 = JSON.stringify(object1);
let string2 = JSON.stringify(object2);

// Compare strings
let areEqual = string1 === string2;

console.log("Objects have the same properties without order:", areEqual);

//! 2. Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console

var req=new XMLHttpRequest();

req.open("GET","https://restcountries.com/v3.1/all",true);

req.send();
req.onload= function (){

    var data=req.response;
    var result =JSON.parse(data);
    for(var i=0 ; i<result.length;i++){
        console.log( "flages : " + result[i].flags.png);
    }
}



var req1=new XMLHttpRequest();

req1.open("GET","https://restcountries.com/v3.1/all",true);

req1.send();
req1.onload= function (){

    var data=req1.response;
    var result =JSON.parse(data);
    for(var i=0 ; i<result.length;i++){
        console.log( "Country Name : " + result[i].name.common,' ',"Region : " + result[i].region," ","Sub Region : " + result[i].subregion,"Population : "+result[i].population);
    }
}