/*!
 * ODromo (JavaScript++) Programming language v1.0.1
 * https://github.com/rhpo/odromo
 *
 * Author: Ramy Hadid
 *
 * Copyright (C) 2022 ODromo. All rights reserved.
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
 * Date: Mon Sep 05 2022 17:59:03 GMT+0100 (GMT+02:00)
 *
 * #free_palestine 🇵🇸
 * #free_ukraine   🇺🇦
*/

let isNode =
    typeof process !== "undefined" &&
    process.release && process.release.name && process.release.name.search && process.release.name.search(/node|io.js/) !== -1;

let none = null;

function $X(...m) {
    return isNode ? require(...m) : none;
}

const os = $X("os");
const PROCESS = $X("child_process");
const colors = $X("colors");
const fs = $X("fs");
const path = $X("path");
const NativeMouseControl = $X('node-cursor');
const extension = $X("./extension/extension.js");
const prompt = isNode ? require('prompt-sync')() : globalThis['prompt'];
const globalLookup = $X('glob');
const keyboard_ = $X("@nut-tree/nut-js");
const keyboard = keyboard_ ? keyboard_.keyboard : none;

async function lookup(str = '') {
    return new Promise((r, rj) => {
        if (!str) return rj('No path');

        return globalLookup(path.join(__dirname, str), {}, (err, rs) => r(rs));
    })
}

colors && colors.enable();

const NATIVE_USERINFO = isNode ? os.userInfo() : none;

const vm = $X('vm');

const defined = (i) => !"undefined null".split(" ").includes(typeof i);
const choose = (i, v) => defined(i) ? i : v;
const glob = isNode ? global : window;

function ç(ç) {
    ç.toString && (ç['toString'] = () => `void${ç["name"] ? " " + ç["name"] : ""}() { [native code] }`);
    return ç;
}
/**
 * @param {Function} any Function to make native.
 * @returns {Function} any
 */
function native2(any) {
    return ç(any);
}

/**
 * @param {Function} any Function to make native (With colors).
 * @returns {Function} any
 */
function native(any) {
    any["toString"] &&
        (any["toString"] = () =>
            `${sh.ava("public")} ${sh.kw("native")} ${sh.kw("void")}${sh.var(
                any["name"] ? " " + any["name"] : ""
            )}(${sh.ava("...") + sh.var("args")});`);
    return any;
}

const PATH = isNode
    ? __dirname
    : defined(window) && defined(window.location)
        ? window.location.href
        : undefined;

const $native_call = (f, args) => {
    typeof f === "string" && glob[f] && glob[f](...args);
};

const DEBUG = false;

function debug(args) {
    if (DEBUG) console.log(...args);
}

let __INTERNAL_CTX = {
    ...extension,

    __$NATIVE_CALL: $native_call,

    Exports: {},

    eval: function eval(code = "", optionalContext = { sandboxed: true }) {
        let { result, error } = new ODromo(code).eval(optionalContext, true);
        if (error) return ODromo.Exception(error, "NativeJSEvalError")
        return result;
    },

    exit: native2(function exit(errCode) { process.exit(errCode ?? 0) }),

    clear: console.clear,

    sleep: native2(function Sleep(ms = 1000) {
        const X = new Date().getTime(), Y = X + ms;
        while (new Date().getTime() < Y) { }
        return;
    }),

    globalize: native2(function globalize(any, v) {
        globalThis && (globalThis[any.toString()] = v)
    })
};

const fst = $X("fs");

const getPos = native2(function getPosition() {
    return NativeMouseControl.getCursorPosition();
})

const nativeLib = {
    mouse: {
        getPos,
        Events: {
            LEFT_DOWN: 2,
            LEFT_UP: 4,
            RIGHT_DOWN: 8,
            RIGHT_UP: 16,
            MIDDLE_DOWN: 32,
            MIDDLE_UP: 64,
            WHEEL: 2048,
            MOUSEEVENTF_MOVE: 1
        },

        sendEv(e) {
            return NativeMouseControl.sendCursorEvent(e)
        }
    }
}

const readline = $X("readline");

function $NATIVE_PROMPT(prm = "") {
    const rl =
        defined(readline) &&
        readline.createInterface(process.stdin, process.stdout);
    return new Promise((resolve) => {
        rl.question(prm, (i) => {
            resolve(i);
            rl.close();
        });
    });
}

function mapColor(anyType) {
    switch (typeof anyType) {
        case "string":
            return colors.green(anyType);
        case "number":
        case "boolean":
            return colors.yellow(anyType);
        case "function":
            return colors.cyan(anyType);
        case "undefined":
            return colors.grey(anyType);
        case "object":
            return colors.cyan("Object ") + colors.cyan(anyType);
        default:
            return anyType;
    }
}

const nativeModules = {
    unsafe: {
        mod(AltX, AltY) {
            if (!defined(AltX))
                return ODromo.Exception("No alias name provided in (unsafe::mod).");

            __INTERNAL_CTX["AltX"] = AltY;
        },

        setPlatformScript(bool) {
            isNode = !bool;
        },
    },

    color: {
        color: native2(function color(s, c) {
            if (isNode) {
                if (!defined(colors[c]))
                    return ODromo.Exception(`Color ${c} is not supported.`);
                return colors[c](s);
            }
            return ["%c" + s, `color:${c};`];
        }),
    },

    node: {
        NodeJS: {
            eval: native2(function eval(s) {
                const instance = runJS(s);
                if (instance.error) return ODromo.Exception(`JPPNodeSandbox::Error => ${instance.error}`)
                else return instance.result;
            }),

            importModule: native2(function importModule(module) {
                if (isNode)
                    return require(module);
                else return none;
            })
        }
    },

    sys: {
        Console: {
            WriteLine: native2(function WriteLine(args) {
                if (isNode)
                    console.log(
                        args.startsWith && args.startsWith("\\x1B[90m")
                            ? args
                            : mapColor(args)
                    );
                else console.log(...args);
            }),
            ReadLine: native2(function ReadLine(prompt_string = "") {
                return prompt(prompt_string);
            }),
            Warn: native2(function Warn(s) {
                isNode
                    ? console.log(nativeModules.color.color(s, "yellow"))
                    : console.warn(s);
            }),
        },

        Environment: {
            Username: isNode ? NATIVE_USERINFO.username : none,
            SpecialDirectories: {
                Home: isNode ? NATIVE_USERINFO.homedir : none,
            },

            NewLine: "\n",
            Tab: "\t",
        },

        Net: {
            Uri: {
                Encode: encodeURI,
                Decode: decodeURI,
            },
        },

        call: native2(function call(v) {
            v && typeof v === "function" && v();
        }),

        defined: native2(function defined(v) {
            return !!(Object.keys(__INTERNAL_CTX).includes(v));
        }),

        extract: native2(function extract(e) {
            e = __INTERNAL_CTX[e];

            if (!e) return ODromo.Exception("No object to extract.")
            else if (typeof e !== 'object') return ODromo.Exception("Param is not an object.")
            else {
                let keys = Object.keys(e)

                keys.forEach(key => {
                    __INTERNAL_CTX[key] = e[key]
                    __INTERNAL_CTX.workspace[key] = e[key]
                    // Operation done... but X is not defined...
                })
            }
        })
    },

    process: {
        Process: {
            Start: native2(function Start(e) {
                PROCESS.exec(e);
            }),
            Kill: native2(function Kill(e) {
                PROCESS.exec(`taskkill /f /im ${e}`);
            }),
            Run: native2(function Run(e) {
                PROCESS.execSync(e).toString();
            }),
            RunAsync: native2(function RunAsync(e) {
                PROCESS.exec(e).toString();
            }),
        },
    },

    math: {
        math: Math,
        pi: Math.PI,
        E: Math.E,
        expo: native2(function e(v) {
            return Math.exp(v);
        }),
    },
    fs: {
        File: class File {
            constructor(location) {
                if (!(typeof location !== "undefined" && location.trim() !== ""))
                    ODromo.Exception("No location parameter provided.", "ArgumentError");

                this.location = location;

                if (path.isAbsolute(location))
                    this.location = path.join(__dirname, location);
            }

            Exists() {
                return fs.existsSync(this.location);
            }

            Append(string = "") {
                if (!this.Exists())
                    ODromo.Exception(`Path '${this.location}' was not found.`, "404");
                fs.promises.appendFile(this.location, string);
                return this;
            }

            Write(string = "") {
                fs.writeFileSync(this.location, string);
                return this;
            }

            Read() {
                return fs.readFileSync(this.location).toString();
            }

            AppendOrWrite(string = "") {
                if (!this.Exists()) this.Write();
                fs.promises.appendFile(this.location, string);
                return this;
            }

            Create() {
                this.Write();
                return this;
            }

            Delete() {
                fs.unlinkSync(this.location);
                return this;
            }

            Remove() {
                this.Delete();
                return this;
            }

            Move(newPath = "./") {
                fs.rename(this.location, newPath, function (err) {
                    if (err) ODromo.Exception(err);

                    return true;
                });
            }

            async Copy(newPath = "./") {
                await fs.promises.copyFile(this.location, newPath);
                return true;
            }
        },
    },

    controls: {
        Mouse: {
            getPosition: native2(nativeLib.mouse.getPos),
            setPosition: native2(function setCursorPosition(e, v = null) {
                if (typeof e === 'object') {
                    var arg = {
                        x: e.x || 0,
                        y: e.y || 0
                    }

                    NativeMouseControl.setCursorPosition(arg);
                } else {
                    if (!defined(e) || !defined(v) || typeof e !== 'number' || typeof v !== 'number')
                        return ODromo.Exception('Invalid Arguments for: (Mouse::setPosition).')
                    else NativeMouseControl.setCursorPosition({ x: e, y: v })
                }
            }),
            sendEvent: native2(function sendMouseEvent(event) {
                if (Array.isArray(event)) return event.forEach(sendMouseEvent)
                else nativeLib.mouse.sendEv(event)
            }),

            Events: nativeLib.mouse.Events
        },

        Keyboard: {
            Keys: {
                Space: 0,
                Escape: 1,
                Tab: 2,
                LeftAlt: 3,
                LeftControl: 4,
                RightAlt: 5,
                RightControl: 6,
                LeftShift: 7,
                LeftSuper: 8,
                RightShift: 9,
                RightSuper: 10,
                F1: 11,
                F2: 12,
                F3: 13,
                F4: 14,
                F5: 15,
                F6: 16,
                F7: 17,
                F8: 18,
                F9: 19,
                F10: 20,
                F11: 21,
                F12: 22,
                F13: 23,
                F14: 24,
                F15: 25,
                F16: 26,
                F17: 27,
                F18: 28,
                F19: 29,
                F20: 30,
                F21: 31,
                F22: 32,
                F23: 33,
                F24: 34,
                Num0: 35,
                Num1: 36,
                Num2: 37,
                Num3: 38,
                Num4: 39,
                Num5: 40,
                Num6: 41,
                Num7: 42,
                Num8: 43,
                Num9: 44,
                A: 45,
                B: 46,
                C: 47,
                D: 48,
                E: 49,
                F: 50,
                G: 51,
                H: 52,
                I: 53,
                J: 54,
                K: 55,
                L: 56,
                M: 57,
                N: 58,
                O: 59,
                P: 60,
                Q: 61,
                R: 62,
                S: 63,
                T: 64,
                U: 65,
                V: 66,
                W: 67,
                X: 68,
                Y: 69,
                Z: 70,
                Grave: 71,
                Minus: 72,
                Equal: 73,
                Backspace: 74,
                LeftBracket: 75,
                RightBracket: 76,
                Backslash: 77,
                Semicolon: 78,
                Quote: 79,
                Return: 80,
                Comma: 81,
                Period: 82,
                Slash: 83,
                Left: 84,
                Up: 85,
                Right: 86,
                Down: 87,
                Print: 88,
                Pause: 89,
                Insert: 90,
                Delete: 91,
                Home: 92,
                End: 93,
                PageUp: 94,
                PageDown: 95,
                Add: 96,
                Subtract: 97,
                Multiply: 98,
                Divide: 99,
                Decimal: 100,
                Enter: 101,
                NumPad0: 102,
                NumPad1: 103,
                NumPad2: 104,
                NumPad3: 105,
                NumPad4: 106,
                NumPad5: 107,
                NumPad6: 108,
                NumPad7: 109,
                NumPad8: 110,
                NumPad9: 111,
                CapsLock: 112,
                ScrollLock: 113,
                NumLock: 114,
                AudioMute: 115,
                AudioVolDown: 116,
                AudioVolUp: 117,
                AudioPlay: 118,
                AudioStop: 119,
                AudioPause: 120,
                AudioPrev: 121,
                AudioNext: 122,
                AudioRewind: 123,
                AudioForward: 124,
                AudioRepeat: 125,
                AudioRandom: 126
            },

            Press: native2(function PressKey(key) {
                if (!key) return ODromo.Exception("No key to press.", "OArgumentError", false, false);

                keyboard.config.autoDelayMS = 0

                keyboard.pressKey(key);
            })
        }
    },
};

const sh = {
    kw: (s) => colors.magenta(s),
    ava: (s) => colors.grey(s),
    var: (s) => colors.yellow(s),
};

/**
 * It runs the given JavaScript code in a new context, which is a copy of the internal context, and if
 * the optionalAddCTX is not an empty object, it will be merged with the internal context.
 * @param {String} js - The code to be executed.
 * @param {object} optionalAddCTX - This is an object that will be merged with the internal context.
 * @returns {Object} The return value of the last statement in the script.
 */
const runJS = (js, optionalAddCTX) => {

    let __EXPORT_REQS = {};

    let FN_CTX =
        optionalAddCTX !== {}
            ? { ...__INTERNAL_CTX, __EXPORT_REQS, ...optionalAddCTX }
            : __INTERNAL_CTX;

    isNode && vm.createContext(FN_CTX);

    let R,
        E = false;

    try {
        R = isNode ? vm.runInContext(js, FN_CTX) : eval_safe(js, FN_CTX);
    } catch (e) {
        R = null;
        E = e.message;
    }

    let rs = {
        result: R,
        CTX: FN_CTX,
        error: E,
    };

    defined(__EXPORT_REQS["Main"]) && __EXPORT_REQS["Main"](1);

    __INTERNAL_CTX = FN_CTX;

    return rs;
};

function clone(obj) {
    if (none == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function eval_safe(text, context = {}) {
    function CCFT(eval_string, context) {
        return `
        return function (context) {
          ${Object.keys(context).length > 0
                ? `let ${Object.keys(context).map(
                    (key) => ` ${key} = context['${key}']`
                )};`
                : ``
            }
          return ${eval_string};
        }
        `;
    }

    function make_context_evaluator(eval_string, context) {
        let template = CCFT(eval_string, context);
        let functor = Function(template);
        return functor();
    }
    let evaluator = make_context_evaluator(text, context);
    return evaluator(context);
}

const dataset = {
    characters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$éèçù§µà",
    numbers: "0123456789",
    symbols: "[+-?*/%=&|!><^,]",
    continues: ";",
    whitespace: " ;\t",

    isNumber(n) {
        return dataset.numbers.split("").includes(n);
    },

    isCharacter(c) {
        return dataset.characters.split("").includes(c);
    },

    isSymbol(s) {
        return dataset.symbols.split("").includes(s);
    },

    isWhiteSpace(ws) {
        return dataset.whitespace.split("").includes(ws) || ws === undefined;
    },

    isContinue(s) {
        return dataset.continues.split("").includes(s);
    },

    isBypass(s) {
        return this.isContinue(s) || this.isWhiteSpace(s) || this.isSymbol(s);
    },
};

// class ScopedEval {
// 	/** @param {Record<string,unknown>} scope */
// 	constructor(scope) {
// 		this.scope = scope;
// 	}
// 	eval(__script) {
// 		return new Function(...Object.keys(this.scope), `
//                     return eval(
//                         '"use strict";delete this.__script;'
//                         + this.__script
//                     );
//                 `.replace(/\t/, ''))
// 			.bind({
// 				__script
// 			})
// 			(...Object.values(this.scope));
// 	}
// }

/**
 * @type { ODromo } instance_
 */
let instance_

class ODromo {
    #evaledOnce;
    /**
     * @param {string} code Code to eval.
     */
    constructor(code = "") {
        //# code && (raise(new Error('ArgumentError: No code provided.')));

        this.code = code;
        this.column = 0;
        this.line = 1;

        instance_ = this
    }

    Exception(string = "", title = "", throwErr = true) {
        let body = `${title ? title + ": " : ""}${string}${typeof this !== "undefined"
            ? ` | (line: ${this.line}, column: ${this.column})}`
            : ""
            }`;
        if (throwErr) throw body;
        else return body;
    }

    /**
     * @param {string} JSCode JavaScript code to be reverse-tokenized.
     */
    reverse_tokenize(JSCode) {
        let JS_KEYWORDS =
            "switch if while break continue yield function let var const".split(" ");

        let length = JSCode.length;
        let code = JSCode;

        let cursor = 0;
        let tokens = [];

        let column = 0;
        let line = 1;

        while (cursor < length) {
            let char = code[cursor];

            function increase(i = 1) {
                column += i;
                cursor += i;
            }

            switch (char) {
                case ":":
                    column = 0;
                    line++;

                    tokens.push({
                        type: "access",
                        value: ":",
                        index: cursor,
                    });

                    increase();
                    break;

                case "\n":
                    column = 0;
                    line++;

                    increase();
                    break;

                case "(":
                    tokens.push({
                        type: "parenthese",
                        value: "(",
                        index: cursor,
                    });

                    increase();
                    break;

                case ")":
                    tokens.push({
                        type: "parenthese",
                        value: ")",
                        index: cursor,
                    });

                    increase();
                    break;

                case "{":
                    tokens.push({
                        type: "bracket",
                        value: "{",
                        index: cursor,
                    });

                    increase();
                    break;

                case "\t":
                case ";":
                case "\n":
                    tokens.push({
                        type: "bypass",
                        value: char,
                        index: cursor,
                    });

                    increase();

                    break;

                case " ":
                    increase();
                    break;

                case "}":
                    tokens.push({
                        type: "bracket",
                        value: "}",
                        index: cursor,
                    });

                    increase();
                    break;

                case "'":
                    let result = "";

                    increase();
                    char = code[cursor];

                    var nextChar = char;

                    if (nextChar && nextChar === '"') {
                        tokens.push({
                            type: "string",
                            value: "",
                            index: cursor,
                        });
                        increase();
                    } else {
                        stringCollector: while (cursor < length) {
                            if (char === "'") {
                                if (result === "") result = "<empty string>";
                                break stringCollector;
                            }

                            result += char;
                            char = code[cursor];
                            increase();
                        }

                        if (char !== "'")
                            ODromo.Exception("Unterminated string.", "SyntaxError");

                        tokens.push({
                            type: "string",
                            value: result.substring(1),
                            index: cursor,
                        });
                    }
                    break;

                default:
                    if (dataset.isNumber(char)) {
                        var enteredFloat = false;

                        function updateChar() {
                            char = code[cursor];
                        }

                        var stop = false;
                        var res = char;

                        action: while (cursor < length && !stop) {
                            if (char === "." || dataset.isNumber(char)) {
                                if (char === ".") enteredFloat = true;

                                increase();
                                updateChar();

                                res += char;
                            } else {
                                updateChar();
                                stop = true;
                            }
                        }

                        if (res.endsWith(".")) {
                            throw new SyntaxError("Unterminated FLOAT.");
                        }
                        tokens.push({
                            type: enteredFloat ? "float" : "int",
                            value: parseFloat(res),
                            index: cursor,
                        });
                    } else if (char === ".") {
                        tokens.push({
                            type: "access",
                            value: ".",
                            index: cursor,
                        });

                        increase();
                    } else if (dataset.isSymbol(char)) {
                        var operator = char;

                        function updateChar() {
                            char = code[cursor];
                        }

                        isSymolOP: while (dataset.isSymbol(char) && cursor < length) {
                            increase();
                            updateChar();

                            char = code[cursor];
                            if (dataset.isSymbol(char)) {
                                operator += char;
                            } else break isSymolOP;
                        }

                        tokens.push({
                            type: "operator",
                            value: operator,
                            index: cursor,
                        });
                    } else if (dataset.isCharacter(char)) {
                        let result = char;

                        function updateChar() {
                            char = code[cursor];
                        }

                        names: while (dataset.isCharacter(char) && cursor < length) {
                            increase();
                            updateChar();

                            console.log(char)
                            if (dataset.isCharacter(char)) {
                                result += char;
                            } else {
                                updateChar();
                                break names;
                            }
                        }

                        tokens.push({
                            type: JS_KEYWORDS.includes(result) ? "keyword" : "variable",
                            value: result,
                            index: cursor,
                        });
                    } else {
                        // nativeModules.system.Console.WriteLine(char);
                        // this.Exception(`Unexpected char '${char}' at: ${this.line}:${this.column + 1}`, 'NameError')
                        increase();
                    }
                    break;
            }
        }

        return {
            error: false,
            tokens,
        };
    }

    tokenize() {
        let length = this.code.length;
        var code = this.code;

        let cursor = 0;

        let tokens = [];

        // removed list, and defined Keywords...
        const KEYWORDS =
            "void add public static interface var const new typeof let delete yield return require await load".split(
                " "
            );

        while (cursor < length) {
            let char = this.code[cursor];

            var instance = this;
            function increase(i = 1) {
                instance.column += i;
                cursor += i;
            }

            switch (char) {
                case ":":
                    this.column = 0;
                    this.line++;

                    tokens.push({
                        type: "access",
                        value: ":",
                        index: cursor,
                    });

                    increase();
                    break;

                case "\n":
                    this.column = 0;
                    this.line++;

                    increase();
                    break;

                case "(":
                    tokens.push({
                        type: "parenthese",
                        value: "(",
                        index: cursor,
                    });

                    increase();
                    break;

                case ")":
                    tokens.push({
                        type: "parenthese",
                        value: ")",
                        index: cursor,
                    });

                    increase();
                    break;

                case "{":
                    tokens.push({
                        type: "bracket",
                        value: "{",
                        index: cursor,
                    });

                    increase();
                    break;

                case "\t":
                case ";":
                case "\n":
                    tokens.push({
                        type: "bypass",
                        value: char,
                        index: cursor,
                    });

                    increase();

                    break;

                case " ":
                    increase();
                    break;

                case "}":
                    tokens.push({
                        type: "bracket",
                        value: "}",
                        index: cursor,
                    });

                    increase();
                    break;

                case '"':
                    let result = "";

                    increase();
                    char = this.code[cursor];

                    var nextChar = char;

                    if (nextChar && nextChar === '"') {
                        tokens.push({
                            type: "string",
                            value: "",
                            index: cursor,
                        });
                        increase();
                    } else {
                        stringCollector: while (cursor < length) {
                            if (char === '"') {
                                if (result === "") result = "<empty string>";
                                break stringCollector;
                            }

                            result += char;
                            char = this.code[cursor];
                            increase();
                        }

                        if (char !== '"') {
                            this.Exception("Unterminated string.");
                        }

                        tokens.push({
                            type: "string",
                            value: result.substring(1),
                            index: cursor,
                        });
                    }
                    break;

                default:
                    if (dataset.isNumber(char)) {
                        var enteredFloat = false;

                        function updateChar() {
                            char = code[cursor];
                        }

                        var stop = false;
                        var res = char;

                        action: while (cursor < length && !stop) {
                            if (char === "." || dataset.isNumber(char)) {
                                if (char === ".") enteredFloat = true;

                                increase();
                                updateChar();

                                res += char;
                            } else {
                                updateChar();
                                stop = true;
                            }
                        }

                        if (res.endsWith(".")) {
                            throw new SyntaxError("Unterminated FLOAT.");
                        }
                        tokens.push({
                            type: enteredFloat ? "float" : "int",
                            value: parseFloat(res),
                            index: cursor,
                        });
                    } else if (char === ".") {
                        tokens.push({
                            type: "access",
                            value: ".",
                            index: cursor,
                        });

                        increase();
                    } else if (dataset.isSymbol(char)) {
                        var operator = char;

                        function updateChar() {
                            char = code[cursor];
                        }

                        isSymolOP: while (dataset.isSymbol(char) && cursor < length) {
                            increase();
                            updateChar();

                            char = this.code[cursor];
                            if (dataset.isSymbol(char)) {
                                operator += char;
                            } else break isSymolOP;
                        }

                        tokens.push({
                            type: "operator",
                            value: operator,
                            index: cursor,
                        });
                    } else if (dataset.isCharacter(char)) {
                        let result = char;

                        function updateChar() {
                            char = code[cursor];
                        }

                        names: while ((dataset.isCharacter(char) || dataset.isNumber(char)) && cursor < length) {
                            increase();
                            updateChar();

                            if (dataset.isCharacter(char) || dataset.isNumber(char)) {
                                result += char;
                            } else {
                                updateChar();
                                break names;
                            }
                        }

                        tokens.push({
                            type: KEYWORDS.includes(result) ? "keyword" : "variable",
                            value: result,
                            index: cursor,
                        });
                    } else {
                        // nativeModules.system.Console.WriteLine(char);
                        // this.Exception(`Unexpected char '${char}' at: ${this.line}:${this.column + 1}`, 'NameError')
                        increase();
                    }
                    break;
            }
        }

        return {
            error: false,
            tokens,
        };
    }

    /**
     *
     * @param {Array<{type<string>, value<string>}>} tokens TOKENS !
     */
    parse(tokens, error = false) {
        var this_ = this;
        function localError(args) {
            let body = this_.Exception(args);
            if (error) throw body;
            else console.log(body);
        }

        !tokens && localError("No tokens provided.");

        /**
         *
         * @param {Array} t Array
         * @param  {...any<{type<string>, value<string>}>} tks
         */

        for (let i = 0; i < tokens.length; i++) {
            let tk = tokens[i];

            if (defined(tk) && defined(tk["type"])) {
                switch (tk.type) {
                    case "int":
                    case "float":
                        let nextToken = tokens[i + 1];
                        if (nextToken && nextToken.type === "variable")
                            switch (nextToken.value.toString().toLowerCase()) {
                                case "pi":
                                    var number = tokens[i].value;
                                    var constant = Math.PI;

                                    if (
                                        tokens[i].type === "int" &&
                                        tokens[i - 1] && tokens[i - 1].type === "access" &&
                                        tokens[i - 1].value === "."
                                    ) {
                                        delete tokens[i - 1];
                                        tokens[i] = {
                                            type: "float",
                                            value: parseFloat("0." + number),
                                        };
                                    }

                                    tokens[i] = {
                                        type: "float",
                                        value: number * constant,
                                    };

                                    delete tokens[i + 1];
                                    break;

                                case "e":
                                    var number = tokens[i].value;
                                    var constant = Math.E;

                                    if (
                                        tokens[i].type === "int" &&
                                        tokens[i - 1] && tokens[i - 1].type === "access" &&
                                        tokens[i - 1].value === "."
                                    ) {
                                        delete tokens[i - 1];
                                        tokens[i] = {
                                            type: "float",
                                            value: parseFloat("0." + number),
                                        };
                                    }

                                    tokens[i] = {
                                        type: "float",
                                        value: number * constant,
                                    };

                                    delete tokens[i + 1];
                                    break;

                                case "deg":
                                    var number = tokens[i].value;
                                    var constant = Math.PI / 180;

                                    if (
                                        tokens[i].type === "int" &&
                                        tokens[i - 1] && tokens[i - 1].type === "access" &&
                                        tokens[i - 1].value === "."
                                    ) {
                                        delete tokens[i - 1];
                                        tokens[i] = {
                                            type: "float",
                                            value: parseFloat("0." + number),
                                        };
                                    }

                                    tokens[i] = {
                                        type: "float",
                                        value: number * constant,
                                    };

                                    delete tokens[i + 1];
                                    break;

                                case "rad":
                                    var number = tokens[i].value
                                    var constant = Math.PI * 180

                                    if (tokens[i].type === 'int' && tokens[i - 1] && tokens[i - 1].type === 'access' && tokens[i - 1].value === '.') {
                                        delete tokens[i - 1]
                                        tokens[i] = {
                                            type: 'float',
                                            value: parseFloat('0.' + number)
                                        }
                                    }

                                    tokens[i] = {
                                        type: "float",
                                        value: number * constant
                                    }

                                    delete tokens[i + 1]
                                    break;
                            }
                        break;

                    case "keyword":
                        switch (tk.value) {
                            case "load":
                            case "require":
                                delete tokens[i];

                                var last = tokens[i - 1];

                                if (last == undefined || last.type === "bypass") {
                                    var next = tokens[i + 1];

                                    if (!next)
                                        localError(
                                            "SyntaxError: Expected String, got end-of-line."
                                        );

                                    if (!next.type || next.type === "string") {
                                        if (next.value.includes(","))
                                            next.value
                                                .split(",")
                                                .forEach(
                                                    (e) =>
                                                        typeof e !== "undefined" &&
                                                        e.trim() &&
                                                        req(e.trim())
                                                );
                                        else next.value && req(next.value.trim());
                                    }
                                    else if (!next.type || next.type === 'variable')
                                        req(next.value);
                                    else
                                        localError(
                                            `SyntaxError: Expected String, got ${next.type}`
                                        );

                                    delete tokens[i + 1];
                                } else
                                    localError(
                                        `SyntaxError: require/load statement cannot be next to the type ${last.type}.`
                                    );
                                break;

                            case "defined":
                                tokens[i] = {
                                    type: "keyword",
                                    value: "typeof",
                                };

                                var next = tokens[i + 1];

                                if (!next)
                                    localError(
                                        "SyntaxError: Expected var-name, got end-of-line."
                                    );

                                if (!next.type || next.type === "variable") {
                                    tokens[i + 1] = {
                                        type: "variable",
                                        value: tokens[i + 1].value,
                                    };

                                    tokens[i + 2] = {
                                        type: "operator",
                                        value: "!=",
                                    };

                                    tokens[i + 3] = {
                                        type: "string",
                                        value: "undefined",
                                    };

                                    // ! TO FIX: MAKE AN INJECT FUNCTION TO THE TOKENS TO FIX THE BUG !
                                } else
                                    localError(
                                        `SyntaxError: Expected var-name, got ${next.type}`
                                    );
                                break;
                        }
                        break;
                }
            }
        }

        // ADD SOME JIT-STATEMENTS HERE :... (Keywords)

        var c = "";
        var lastTI = "";
        tokens.forEach((token, idx) => {
            if (token.type === "string") c += `'${token.value}'`;
            else {
                if (["keyword", "variable"].includes(token.type)) {
                    switch (token.value.trim()) {
                        case "void":
                            token.value = "function";
                            token.type = "keyword";

                            let next = tokens[idx + 1];

                            if (
                                defined(next) &&
                                next.type === "variable" &&
                                next.value === "Main"
                            ) {
                                token.value = `__EXPORT_REQS.Main=function`;
                            }
                            break;
                        // case 'list':
                        //     token.value = 'function*';
                        //     token.type = 'keyword'
                        //     break;
                        case "lambda":
                            token.value = "()=>";
                            token.type = "keyword";
                            break;
                        // case 'add':
                        //     token.value = 'yield';
                        //     token.type = 'keyword'
                        //     break;
                    }
                }

                if (token.type == "keyword" || token.type == "variable")
                    token.value += " ";

                c += token.value;
                lastTI = token.index;
            }
        });

        return c;
    }

    eval(optionalAddCTX = {}, throwErr = false) {
        let { tokens, error } = this.tokenize();

        var code = this.parse(tokens, throwErr);

        let pack = runJS(code, optionalAddCTX);

        if (pack.error) {
            error = pack.error;
        }

        return {
            result: pack.result,
            error,
            CTX: pack.CTX,
        };
    }
}

isNode && process.on("uncaughtException", (e) => {
    ODromo.Exception(e.stack, "NativeJSError", false);
});

ODromo.Exception = function Exception(
    string = "",
    title = "",
    exitBool = false,
    onlyReturn = false
) {
    // if (onlyReturn) {
    //     return `ODromo::UnhandledException => ${title ? title + ": " : ""
    //         }${string}`;
    // } else
    //     console.log(
    //         colors.red(
    //             `ODromo::UnhandledException => ${title ? title + ": " : ""}${string}`
    //         )
    //     );
    // exitBool && process.exit();

    let body = `${title ? title + ": " : ""}${string}${typeof this !== "undefined"
        ? ` | (line: ${choose(instance_.line, 'Unknown')}, column: ${choose(instance_.column, 'Unknown')})}`
        : ""
        }`;

    if (!onlyReturn) isNode ? console.log(colors.red(body)) : console.error(body);
    else return body;

    if (exitBool)
        process.exit(1);
};

try {
    module.exports = {
        ODromo,
    };
} catch {
    defined(window) && typeof window === "object" && (window["ODromo"] = ODromo);
}

/**
 *
 * @param {string} mn Module Name
 */
const req = (mn) => {
    let instance = new ODromo();
    let exp = instance.Exception;
    (!mn || typeof mn !== "string") &&
        exp("Invalid required argument provided", "NATIVE");
    mn = mn.trim();

    if (Object.keys(nativeModules).includes(mn.toLowerCase()))
        return Object.keys(nativeModules[mn.toLowerCase()]).forEach((prop) => {
            __INTERNAL_CTX[prop] = nativeModules[mn.toLowerCase()][prop];
        });

    if (
        !mn.toLowerCase().endsWith(".o") &&
        !mn.toLowerCase().endsWith(".jpp") &&
        !mn.toLowerCase().endsWith(".j++")
    )
        mn += ".o";

    if (!isNode) exp("Cannot require O Modules in OScript", "ModuleError");

    let modPath = path.join(PATH, mn.toLowerCase());

    if (fs.existsSync(modPath)) {
        const data = fs.readFileSync(modPath).toString();

        let dataExport = new ODromo(data).eval({ modPath }).CTX;

        // if ('modPath' in dataExport && dataExport.modPath === modPath) {
        //     exp("A Module cannot require itself.", "ModuleError");
        // }

        __INTERNAL_CTX = { ...__INTERNAL_CTX, ...dataExport.Exports };
    } else {
        exp(`Module "${modPath}" was not found.`, "ModuleError");
    }
};

// const readline = require('readline');
// const rl = readline.createInterface(process.stdin, process.stdout);
// function prompt(prm = "") {
// 	return new Promise((resolve) => {
// 		rl.question(prm, i => { resolve(i) })
// 	})
// }

// const code = 'FAZE'
// async function main() {
// 	while (true) {
// 		let dromo = new ODromo(code);
// 		let otoken = dromo.eval()
// 	}
// }

// main();
