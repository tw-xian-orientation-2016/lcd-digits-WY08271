function splitInput(input) {
    var numberArrays = input.split('');

    return numberArrays;
}


function replace(numberArrays){
    var shapes = loadNumberShapes();
    var shapeArrays = [];

    numberArrays.forEach(function(numberArray){
        shapeArrays.push(shapes[numberArray]);
    });

    return shapeArrays;
}

function print(shapeArrays){
    var shapeString = '';

    for(var i = 0; i < 3; i++){
        for(var k = 0 ; k < shapeArrays.length; k++){
            shapeString += shapeArrays[k][i] + ' ';
        }
        shapeString += '\n';
    }

    return shapeString;
}