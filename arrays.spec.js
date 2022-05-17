import { length, pop, push } from './arrays.js';

describe('Given length function', () => {
    describe('When array have a one element', () => {
        test('should show the length of the array ', () => {
            //ARANGE

            const array = ['pepe', 2];
            const expectedResult = 2;
            //ACT

            const result = length(array);

            //ASERT

            expect(result).toBe(expectedResult);
        });
    });

    describe('When array add  one element', () => {
        test('should add new element in the array', () => {
            //ARANGE

            const array = ['pepe', 2];
            const element = 'pepa';
            const expectedResult = 3;
            //ACT
            //console.log(expectedResult);
            const result = push(array, element);

            //ASERT

            expect(result).toBe(expectedResult);
        });
    });

    //Function pop

    describe('When array drop one element', () => {
        test('should show the new length', () => {
            //ARANGE

            const array = ['pepe', 2, 12];
            const expectedResult = 12;
            //ACT
            //console.log(expectedResult);
            const ejecutar = pop(array);
            //const result = result.length;

            //ASERT

            expect(ejecutar).toBe(expectedResult);
        });
    });

    describe('When array drop one element', () => {
        test('should show modified array ', () => {
            //ARANGE

            let array = ['pepe', 2, 12];
            const expectedResult = 2;
            //ACT
            //console.log(expectedResult);
            const ejecutar = pop(array);
            const result = array.length;

            //ASERT

            expect(result).toBe(expectedResult);
        });
    });
});
