"use strict";
exports.__esModule = true;
function getStyle() {
    var cssArr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cssArr[_i] = arguments[_i];
    }
    var css = cssArr.join("");
    var tokens = css.split(";");
    var json = "{\n";
    tokens.forEach(function (token) {
        var value = getValue(token).trim();
        var property = getProperty(token).trim();
        if (!(value.length > 0) || !(property.length > 0))
            return;
        json += "\"".concat(camelCase(property), "\" : ").concat(!isNaN(value) ? value : "\"" + value + "\"", ",\n");
    });
    json = json.slice(0, -2) + "\n}";
    return JSON.parse(json);
}
exports["default"] = getStyle;
function getValue(token) {
    return token.split(":").pop() || "";
}
function getProperty(token) {
    var res = token.split(":");
    res.pop();
    return res.join(":");
}
function camelCase(str) {
    return str.split("-").map(function (s, i) { return !(i > 0) ? s : s[0].toUpperCase() + s.slice(1); }).join("");
}
