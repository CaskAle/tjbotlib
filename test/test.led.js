/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const chai = require('chai');
chai.config.includeStack = true;

const readline = require('readline');

const TJBot = require('../lib/tjbot');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var tj = new TJBot(['led'], {}, {});
var colors = ['red', 'green', 'blue', 'orange', 'off'];

colors.forEach(function(color) {
    describe('#tjbot LED', function() {
        it('should turn the LED color to ' + color, function() {
            tj.shine(color);
            rl.question('Did the light turn ' + color + '? Y/N', (answer) => {
                expect(answer.toLowerCase()).to.be.equal('y');
            });
        });
    });
});

rl.close();
