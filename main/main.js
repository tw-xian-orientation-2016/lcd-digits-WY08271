function splitInput(input) {
    var numberArrays = input.split('');

    return numberArrays;
}


function replace(numberArrays) {
    var shapes = loadNumberShapes();
    var shapeArrays = [];

    numberArrays.forEach(function (numberArray) {
        shapeArrays.push(shapes[numberArray]);
    });

    return shapeArrays;
}

function print(shapeArrays) {
    var shapeString = '';

    for (var i = 0; i < 3; i++) {
        shapeString += joinShapeArrays(shapeArrays, i) + '\n';
    }

    return shapeString;
}

function joinShapeArrays(shapeArrays, i) {
    var shapeString = '';

    shapeArrays.forEach(function (shapeArray) {
        shapeString += shapeArray[i] + ' ';
    });

    return shapeString;
}

function lcdPrint(input) {
    var numberArrays = splitInput(input);
    var shapeArrays = replace(numberArrays);
    var shapeString = print(shapeArrays);

    console.log(shapeString);
}