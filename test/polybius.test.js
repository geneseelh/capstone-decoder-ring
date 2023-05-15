const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("test submission by student", ()=>{
    it("when encoding, should translate the letters 'i' and 'j' to '42'", ()=>{
        const actual = polybius("jiggle", encode = true)
        const expected = "424222221351"
        expect(actual).to.equal(expected);
    })

    it("when decoding, should translate '42' to '(i/j)'", ()=>{
        const actual = polybius("4222221351", encode = false)
        const expected = "jiggle"
        expect(actual).to.equal(expected);
    })

    it("should ignore capital letters", ()=>{
        const actual = polybius("MeSsAge", encode = true)
        const expected = "23513434112251"
        expect(actual).to.equal(expected);
    })

    it("should maintain spaces in the message, before and after encoding or decoding", ()=>{
        const actual = polybius("my message", encode = true)
        const expected = "2345 23513434112251"
        expect(actual).to.equal(expected);
    })
})

