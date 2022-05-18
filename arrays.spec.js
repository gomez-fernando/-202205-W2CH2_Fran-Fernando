import { length, pop, push, shift } from './arrays.js';

const noIsArray = 'string';

describe('Given length function', () => {
    describe('When array have 2 elements', () => {
        test('it should show the length of the array -> 2 ', () => {
            // ARRANGE

            const array = ['pepe', 2];
            const expectedResult = 2;
            // ACT

            const result = length(array);

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => length(noIsArray)).toThrow(Error);
        });
    });
});

describe('Given push function', () => {
    describe('When array have 2 elements', () => {
        test('it should show 3 elements', () => {
             // ARRANGE

            const array = ['pepe', 2];
            const element = 'pepa';
            const expectedResult = 3;
            // ACT
            const result = push(array, element);

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => push(noIsArray)).toThrow(Error);
        });
    });
});

describe('Given pop function', () => {
    describe('When array have 3 elements', () => {
        test('it should show the dropped element', () => {
             // ARRANGE

            const array = ['pepe', 2, 12];
            const expectedResult = 12;
            // ACT
            const ejecutar = pop(array);

            // ASSERT

            expect(ejecutar).toBe(expectedResult);
        });
    });

    describe('When array have 3 elements', () => {
        test("should show array's length -> 2 ", () => {
             // ARRANGE

            let array = ['pepe', 2, 12];
            const expectedResult = 2;
            // ACT
            const ejecutar = pop(array);
            const result = array.length;

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => push(noIsArray)).toThrow(Error);
        });
    });
});

describe('Given shift function', () => {
    describe('When array have 3 elements', () => {
        test("should show array's length -> 4", () => {
             // ARRANGE

            let array = ['pepe', 2, 12];
            const expectedResult = 4;
            // ACT
            const result = shift(array, 'nuevo elemento');
            // const result = array.length;

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => push(noIsArray)).toThrow(Error);
        });
    });
});
