import { length, push } from './arrays.js';

describe('Given length function', () => {
    //Function lentgh
    describe('When array have a one element', () => {
        test('should ', () => {
            //ARANGE

            const array = ['pepe', 2];
            const expectedResult = 2;
            //ACT

            const result = length(array);

            //ASERT

            expect(result).toBe(expectedResult);
        });
    });
    //Function Add

    describe('When array add  one element', () => {
        test('should ', () => {
            //ARANGE

            const array = ['pepe', 2];
            const element = 'pepa';
            const expectedResult = ['pepe', 2, 'pepa'];
            //ACT
            //console.log(expectedResult);
            const result = push(array, element);

            //ASERT

            expect(result).toBe(expectedResult);
        });
    });
});
