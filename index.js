"use strict";
exports.__esModule = true;
function getStyle(css) {
    var tokens = css.split(";");
    var json = "{\n";
    tokens.forEach(function (token) {
        var slice = "";
        var value = getValue(token);
        slice += "\"".concat(camelCase(getProperty(token)), "\" : ").concat(!isNaN(value) ? value : "\"" + value + "\"", ",\n");
        json += slice;
    });
    json = json.slice(0, -2) + "\n}";
    return json;
}
exports["default"] = getStyle;
function getValue(token) {
    return token.split(":").pop();
}
function getProperty(token) {
    var res = token.split(":");
    res.pop();
    return res.join(":");
}
function camelCase(str) {
    return str.split("-").map(function (s, i) { return !(i > 0) ? s : s[0].toUpperCase() + s.slice(1); }).join("");
}
