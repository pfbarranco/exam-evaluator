var assert = require("chai").assert;
const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('index.html', () => {
    beforeEach((done) => {
        JSDOM.fromFile('index.html')
            .then((dom) => {
                global.document = dom.window.document
            })
            .then(done, done);
    })

    describe("Ok button tests", () => {
        it("Ok button is disabled by default", () => {
            let app = require("../src/app");
            let element = document.getElementById('studentsButton')
            assert.isTrue(element.disabled)
        });
    })

    describe("Ok button tests2", () => {
        it("Ok button is enabled when entering a correct number", () => {
            var app = require("../src/app");
            let element = document.getElementById('studentsButton')
            assert.isTrue(element.disabled)
        });
    })
})