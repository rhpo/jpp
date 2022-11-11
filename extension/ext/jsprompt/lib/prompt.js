
/*!
 * JSPrompt v1.0.0
 * https://github.com/rhpo/jsprompt
 *
 * Author: Ramy Hadid
 *
 * Copyright (C) 2022 JSPrompt. All rights reserved.
 * Released under the MIT license
 * Licence: Copyright 2022 ODromo.
 *
 * Permission is hereby granted, free of charge, to any  person  obtaining  a  copy  of  this  software
 * and associated documentation files (the "Software"), to deal in  the  Software  without  restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * The above copyright notice and this permission  notice shall be included in all copies or substantial
 * portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT  NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES  OR  OTHER  LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR  IN  CONNECTION  WITH  THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Date: Sat Sep 24 2022 15:59:40 GMT+0100 (GMT+01:00)
 *
 * #free_palestine  🇵🇸
 * #free_ukraine    🇺🇦
 *
 * ﷽
*/

const $ = require('readline').createInterface(process.stdin, process.stdout);

/**
 * A function that returns a promise that resolves to the user's input
 * @param [$$$$$] - The question to ask the user, can be anything.
 * @returns A promise that resolves to the user's input.
 *
 * Example Usage:
 * ```js
 * // Getting a user's input:
 * const name = await prompt('What is your name? ');
 * console.log('Hi', name, '!');
 *
 * // Working with symbols:
 * const command = await prompt('>>> ');
 * console.log(eval(command));
 *
 * // Working with promises:
 * prompt('Enter code to eval: ').then(code => eval(code));
 * ```
 * @author Ramy Hadid
 */

module['exports'] = ($$$$$ = "") => {
    return new Promise($$ => $['question']($$$$$, $$$ => $$($$$)));
}
