const crypt = require("node:crypto");

const input = "dkssuddjandl1@@";

const hash = crypt.createHash("sha256").update(input).digest("base64");

console.log(hash);
