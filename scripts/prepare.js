// hls.js aur dash.js ko npm se nikaal kar www/lib me copy karta hai (APK ke andar offline bundle)
const fs = require('fs');
fs.mkdirSync('www/lib', { recursive: true });
fs.copyFileSync('node_modules/hls.js/dist/hls.min.js', 'www/lib/hls.min.js');
fs.copyFileSync('node_modules/dashjs/dist/dash.all.min.js', 'www/lib/dash.all.min.js');
console.log('libs copied to www/lib');
