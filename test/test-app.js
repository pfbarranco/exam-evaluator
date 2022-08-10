var assert = require("chai").assert;
const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('Main page test', () => {
    beforeEach((done) => {
        JSDOM.fromFile('index.html')
            .then((dom) => {
                global.document = dom.window.document
            })
            .then(done, done);
    })

    afterEach(() => {
        delete require.cache[require.resolve('../src/app')];
    });

    describe("Ok button tests", () => {
        it("Ok button is disabled by default", () => {
            let app = require("../src/app");
            let studentsOkButton = document.getElementById('studentsButton')
            assert.isTrue(studentsOkButton.disabled)
        });

        it("Ok button is enabled when entering 1 student", () => {
            let app = require("../src/app")
            let numberOfStudentsInput = document.getElementById("numberOfStudentsInput")
            numberOfStudentsInput.value = '1';

            var eventDispatched = numberOfStudentsInput.dispatchEvent(new Event('input'))
            assert.isTrue(eventDispatched)

            let studentsButton = document.getElementById('studentsButton');
            assert.isFalse(studentsButton.disabled)
        });

        it("Ok button is enabled when entering 30 students", () => {
            let app = require("../src/app")
            let numberOfStudentsInput = document.getElementById("numberOfStudentsInput")
            numberOfStudentsInput.value = '30';

            var eventDispatched = numberOfStudentsInput.dispatchEvent(new Event('input'))
            assert.isTrue(eventDispatched)

            let studentsButton = document.getElementById('studentsButton');
            assert.isFalse(studentsButton.disabled)
        });

        it("Ok button is disabled when entering a number lower than 1", () => {
            let app = require("../src/app")
            let numberOfStudentsInput = document.getElementById("numberOfStudentsInput")
            numberOfStudentsInput.value = '0';

            var eventDispatched = numberOfStudentsInput.dispatchEvent(new Event('input'))
            assert.isTrue(eventDispatched)

            let studentsButton = document.getElementById('studentsButton');
            assert.isTrue(studentsButton.disabled)
        });

        it("Ok button is disabled when entering a number greater than 30", () => {
            let app = require("../src/app")
            let numberOfStudentsInput = document.getElementById("numberOfStudentsInput")
            numberOfStudentsInput.value = '31';

            var eventDispatched = numberOfStudentsInput.dispatchEvent(new Event('input'))
            assert.isTrue(eventDispatched)

            let studentsButton = document.getElementById('studentsButton');
            assert.isTrue(studentsButton.disabled)
        });
    })

    describe("Students table tests", () => {

        //TODO: There's only 1 row by default
        //TODO: Check that table add the same number of rows as numberOfStudentsInput.value
        //TODO: Enter 5 and check that number of rows is 6. Enter 10 and check that number of rows is 11.

    })
})