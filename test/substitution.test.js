const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("tests written by student", ()=>{
    
    it("should return false if the given alphabet is not 26 characters long", ()=>{
        const actual = substitution("hello", "ssddfgeerrsa", encode = true)
        const expected = false
        expect(actual).to.equal(expected);
    })

    it("should correctly translate the given phrase based on the alphabet given", ()=>{
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jrufscpw"
        expect(actual).to.equal(expected);
    })

    it("should return false if there are duplicate characters", ()=>{
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcab")
        const expected = false
        expect(actual).to.equal(expected);
    })

    it("maintains spaces in the message, before and after encode or decode", ()=>{
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "elp xhm xf mbymwwmfj dne"

        expect(actual).to.equal(expected)
    })

    it("ignores capital letters", ()=>{
        const actual = substitution("ThInKfUl", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jrufscpw"

        expect(actual).to.equal(expected)       
    })
})

// Write your tests here!
