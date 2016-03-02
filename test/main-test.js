describe('splitInput()', function () {
    it('can split input to array', function () {
        expect(splitInput('1234')).toEqual(['1', '2', '3', '4']);
    });
});

describe('replace()', function () {
    it('can replace numberArrays to shapeArrays', function () {
        var numberArrays = ['1', '2'];
        var shapeArrays = [['...', '..|', '..|'], ['._.', '._|', '|_.']];

        expect(replace(numberArrays)).toEqual(shapeArrays);
    });
});

describe('print()', function () {
    it('can print shapeArrays', function () {
        var shapeArrays = [['...', '..|', '..|'], ['._.', '._|', '|_.']];
        var shapeString = "... ._. \n" + "..| ._| \n" + "..| |_. \n";

        expect(print(shapeArrays)).toEqual(shapeString);
    });
});