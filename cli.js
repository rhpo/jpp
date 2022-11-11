const { ODromo } = require('./odromo');
const readline = require('readline');
// const process = require('child_process')

const rl = readline.createInterface(process.stdin, process.stdout);
function prompt(prm = "") {
    return new Promise((resolve) => {
        rl.question(prm, i => { resolve(i) })
    });
}

const isNode = (typeof process !== 'undefined') &&
    (process.release.name.search(/node|io.js/) !== -1)

let none = null;

function $X(...m) {
    return isNode ? require(...m) : null;
}

const colors = $X('colors');

// console.log(new ODromo().reverse_tokenize(`

//    const hello = 'ramy'
//    const t = () => {
//     helloLOL(hello);
//    }
// `))

const checkBrackets = (expression) => {
    const stack = [];
    const bracketLookup = {
        '{': '}',
        '(': ')',
        '[': ']',
    };

    for (const key of expression) {
        if (Object.keys(bracketLookup).includes(key)) { // matches open brackets
            stack.push(key);
        } else if (Object.values(bracketLookup).includes(key)) { //matches closed brackets
            const lastBracket = stack.pop();
            if (bracketLookup[lastBracket] !== key) {
                return false;
            }

        }
    }
    return stack.length === 0;
}

function mapColor(anyType) {
    switch (typeof anyType) {
        case "string":
            return colors.green("'" + anyType + "'")
        case 'number':
        case 'boolean':
            return colors.yellow(anyType)
        case 'function':
            return colors.cyan(anyType)
        case 'undefined':
            return colors.grey(anyType)
        case 'object':
            return colors.cyan("Object ") + colors.cyan(anyType)
        default:
            return anyType
    }
}

const VERSION = "v1.1"

async function main() {

    console.log(
        colors ? colors.italic(colors.cyan('JavaScript++ (ODromo) v1.1, type "exit()" to exit the process.'))
            : 'JavaScript++ (ODromo) v1.1, type "exit()" to exit the process.'
    )

    while (true) {
        let code = await prompt('>>> ');

        if (code !== '') {
            while (!checkBrackets(code)) {
                code += await prompt('... ');
            }

            let replCode = code.trim();
            if (replCode.startsWith('.')) {
                let command = replCode.substring(1).trim();

                switch (command) {
                    case "version":
                        console.log(colors.cyan("ODromo (JavaScript++) version: " + VERSION))
                        break;

                    case "about":

                        let label = "ODromo (JavaScript++) PL || An extended and enhanced version of JS."
                        let centeredLabel = center(label)

                        function center(text) {
                            let X = (process.stdout.columns - text.length) / 2
                            return X < 0 ? 0 : X
                        }

                        label = " ".repeat(centeredLabel) + colors.cyanBG(label) + "\n\n"

                        let foo = "language written by an Algerian developer named \"Ramy Hadid\" (GitHub: @rhpo),  his goal of creating"

                        let bar = " ".repeat(center(foo))

                        let def = `ODromo (Named after a stadium in Brazil), or also called JavaScript++, is a programming \n` +
                            bar + "language written by an Algerian developer named \"Ramy Hadid\" (GitHub: @rhpo),  his goal of creating\n" +
                            bar + "ODromo was to simplify JavaScript development, and link  classic  with  Native  NodeJS  environment\n" +
                            "        \n" +
                            colors.gray(" ".repeat(center('❝ Write once... Run everywhere ❞ - Ramy Hadid')) + "❝ Write once... Run everywhere ❞ - Ramy Hadid\n")

                        console.log("\n" + colors.italic(colors.black(label) +
                            bar + colors.cyan(colors.green(colors.underline("Definition") + ":")) + " " +
                            colors.italic(def)
                        ))

                        break;

                    default:
                        console.log(colors.yellow(`Invalid REPL Keyword: '${command}'`))
                        break;
                }


            } else {
                let doom = new ODromo(code);


                let req = doom.eval({}, false);

                if (req.error) {
                    colors ? console.log(
                        colors.yellow(colors.italic('NativeJSError') + ': ' + req.error)) : console.error(req.error);
                } else {
                    console.log(/*colors.grey('← ') + */((req.result && req.result.startsWith && req.result.startsWith('\\x1B[90m')) ? req.result : mapColor(req.result)));
                }
            }
        }
    }
}

main();

