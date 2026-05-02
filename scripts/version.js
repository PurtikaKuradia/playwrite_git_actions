const fs = require('fs');
const path = require('path');
const pkg = require(path.join(__dirname, '..', 'package.json'));
const version = pkg.version || '1.0.0';
const content = `version=${version}\ncreatedAt=${new Date().toISOString()}\n`;
fs.writeFileSync(path.join(__dirname, '..', 'version.txt'), content, 'utf8');
console.log(`Created version.txt with version ${version}`);
