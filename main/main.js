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