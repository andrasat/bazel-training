const assert = require('assert');
const fs = require('fs');

// Make sure there's a file like .next/static/chunks/main-*.js
const files = fs.readdirSync('.next/static/chunks');
console.log(files);
assert.ok(files.some((f) => /main-[0-9a-f]{16}\.js/.test(f)));