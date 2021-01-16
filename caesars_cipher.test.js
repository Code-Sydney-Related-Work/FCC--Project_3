const { TestScheduler } = require('jest');
const rot13 = require('./caesars_cipher');
describe('Decode rot13 string', () => {
    test("decode str", () => {
        expect(rot13("SERR PBQR PNZC")).toEqual("FREE CODE CAMP");
        expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toEqual("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
    });
});