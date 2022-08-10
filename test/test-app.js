var assert = require("chai").assert;
const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();
import EventEmitter from "events";

describe('index.html', () => {
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

        it("Ok button is enabled when entering a correct number", () => {
            let app = require("../src/app")
            let numberOfStudentsInput = document.getElementById("numberOfStudentsInput")
            numberOfStudentsInput.value = '5';

            // var event = numberOfStudentsInput.dispatchEvent(new Event('input'))
            var event = new Event('input', {
                'bubbles': true,
                'cancelable': true
            });

            numberOfStudentsInput.dispatchEvent(event);

            // assert.isTrue(event)

            let studentsButton = document.getElementById('studentsButton');
            assert.isFalse(studentsButton.disabled)
        });


    })
})