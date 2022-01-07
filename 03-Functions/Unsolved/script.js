// TODO: Write Your JavaScript Code Here
function isEqual(x,y){
    if(x===y){
        console.log("They are equal in type and value.");
       }
    else if(x==y){
        console.log("They are equal in value.");
    }
    else{
        console.log("They are not equal.");
    }
    return;
}

isEqual("10",10)

isEqual(10,10)

var isequaltwo = function(x,y){
    if (x==y){
        console.log("They are equal in type and value.");
    }
    else if (x===y){
        console.log("They are equal in value.")
    }
    else{
        console.log("They are not equal")
    }
    return;
}
isequaltwo(true,10)