var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
var inp = fs.createReadStream('package.json');
var out = fs.createWriteStream('package.json.gz');

inp.pipe(gzip).pipe(out);