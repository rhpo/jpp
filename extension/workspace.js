
function isScript() {
    let R = true;
    try {
        window
    } catch { R = false }

    return R;
}

module.exports.workspace = isScript() ? window : global || globalThis;