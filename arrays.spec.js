import { length, pop, push } from './arrays.js';

const noIsArray = "string";
const noArrayError = {
    message: "The given parameter is not an array"
};

describe('Given length function', () => {
    describe('When array have 2 elements', () => {
        test('it should show the length of the array -> 2 ', () => {
            // ARRANGE

            const array = ['pepe', 2];
            const expectedResult = 2;
            //ACT

            const result = length(array);

            //ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            const expectedResult = "The given parameter is not an array";
            //ACT

            const result = length(noIsArray);

            //ASSERT

            expect(result.message).toBe(expectedResult);
        });
    });
});

describe('Given push function', () => {
    describe('When array have 2 elements', () => {
        test('it should show 3 elements', () => {
            //ARRANGE

            const array = ['pepe', 2];
            const element = 'pepa';
            const expectedResult = 3;
            //ACT
            const result = push(array, element);

            //ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            const expectedResult = "The given parameter is not an array";
            //ACT

            const result = push(noIsArray);

            //ASSERT

            expect(result.message).toBe(expectedResult);
        });
    });
});

describe('Given pop function', () => {
    describe('When array have 3 elements', () => {
        test('it should show the dropped element', () => {
            //ARRANGE

            const array = ['pepe', 2, 12];
            const expectedResult = 12;
            //ACT
            const ejecutar = pop(array);

            //ASSERT

            expect(ejecutar).toBe(expectedResult);
        });
    });

    describe('When array have 3 elements', () => {
        test("should show array's length -> 2 ", () => {
            //ARRANGE

            let array = ['pepe', 2, 12];
            const expectedResult = 2;
            //ACT
            const ejecutar = pop(array);
            const result = array.length;

            //ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            const expectedResult = "The given parameter is not an array";
            //ACT

            const result = pop(noIsArray);

            //ASSERT

            expect(result.message).toBe(expectedResult);
        });
    });
});
