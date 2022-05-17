import { length } from './arrays.js';

describe('Given length function', () => {
    describe('When array have a one element', () => {
        test('should ', () => {
            //ARANGE

            const array = ['pepe'];
            const expectedResult = 1;
            //ACT

            const result = array.length;

            //ASERT

            expect(result).toBe(expectedResult);
        });
    });
});
