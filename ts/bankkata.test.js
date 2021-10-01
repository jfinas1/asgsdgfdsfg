"use strict";
exports.__esModule = true;
var bankkata_1 = require("./bankkata");
describe('answer', function () {
    it('to life the universe and everything', function () {
        var b = new bankkata_1["default"]();
        expect(b.printStatement()).toEqual("Date,Deposit,Withdraw,Balance");
    });
});
