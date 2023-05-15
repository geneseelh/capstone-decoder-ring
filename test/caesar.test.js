// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("error handling test submission by student", ()=>{
    
    //error handling tests
    it("returns false if the shift value is equal to 0", ()=>{
        const actual = caesar("Hello", 0)
        const expected = false
        expect(actual).to.equal(expected);
    })

    it("returns false if the shift value is less than -25", ()=>{
        const actual = caesar("Hello", 26)
        const expected = false
        expect(actual).to.equal(expected);
    })

    it("returns false if the shift value is greater than 25", ()=>{
        const actual = caesar("Hello", 26)
        const expected = false
        expect(actual).to.equal(expected);
    })

    it("returns false if the shift value is missing", ()=>{
        const actual = caesar("Hello")
        const expected = false
        expect(actual).to.equal(expected);
    })
})

describe("encoding test submission by student", ()=>{

    //encoding/decoding tests
    it("should ignore capital letters", ()=>{
        const actual = caesar("MESSAGE", 1)
        const expected = "nfttbhf"
        expect(actual).to.equal(expected);
    })

    it("should handle shifts that go past the end of the alphabet", ()=>{
        const actual = caesar("Zebra", 2)
        const expected = "bgdtc"
        expect(actual).to.equal(expected);
    })

    it("should maintain spaces and nonalphabetic symbols in the message", ()=>{
        const actual = caesar("A message!", 1)
        const expected = "b nfttbhf!"
        expect(actual).to.equal(expected);
    })
})













    /*old ones
    it("should correctly handle errors", ()=>{
        expect(caesar("thinkful")).to.equal(false);
        expect(caesar("thinkful", 0)).to.equal(false);
        expect(caesar("thinkful", 26)).to.equal(false);
        expect(caesar("thinkful", -26)).to.equal(false);
    })

    it("should correctly encode a message", ()=>{
        expect(caesar("thinkful", 3)).to.equal("wklqnixo");
        expect(caesar("thinkful", -3)).to.equal("qefkhcri");
        expect(caesar("THINKFUL", 3)).to.equal("wklqnixo");
        expect(caesar("think ful!", 3)).to.equal("wklqn ixo!");
        expect(caesar("xyz", 3)).to.equal("abc");
    })

    it("should correctly decode a message", ()=>{
        expect(caesar("wklqnixo", 3, false)).to.equal("thinkful");
        expect(caesar("BPQA qa I amkzmb umaaiom!", 8, false)).to.equal("this is a secret message!");
        expect(caesar("abc", -3, false)).to.equal("xyz");

    })
    */

