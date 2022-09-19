export default function getStyle(css: string) {
    const tokens = css.split(";");
    let json = "{\n";
    tokens.forEach(token => {
        const value = getValue(token).trim();
        const property = getProperty(token).trim();
        if (!(value.length > 0) || !(property.length > 0)) return;

        json += `"${camelCase(property)}" : ${!isNaN(value as unknown as number) ? value : "\"" + value + "\""},\n`;
    });
    json = json.slice(0, -2) + "\n}";

    return JSON.parse(json);
}

function getValue(token: string) {
    return token.split(":").pop() || "";
}
function getProperty(token: string) {
    let res = token.split(":");
    res.pop();
    return res.join(":");
}
function camelCase(str: string) {
    return str.split("-").map((s, i) => !(i > 0) ? s : s[0].toUpperCase() + s.slice(1)).join("");
}
