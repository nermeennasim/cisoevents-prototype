const fs = require('fs');
const f = 'src/pages/Home.jsx';
let c = fs.readFileSync(f, 'utf8');
c = c.replace('            CISOEvents <br />', '            CISOevents <br />');
fs.writeFileSync(f, c, 'utf8');
console.log('Fixed hero h1');
