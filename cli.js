#!/usr/bin/env node

var path = require('path');
var sesico = require('./lib');

// TODO: It would be nice if Cheerio could parse a stream directly,
// but it seems that it is not possible. In the meantime, we read the
// whole stream into a string.

function readStreamIntoString (stream, callback){
  var output = '';
  stream.on('data', function(data){ output += data; });
  stream.on('end', function(){ callback(null, output); });
  stream.on('error', callback);
}

readStreamIntoString(process.stdin, function(err, input){
  var $ = sesico.render(input);
  $.use(path.join(process.cwd(), 'sesico'));
  process.stdout.write( $.html() );
  process.stdout.write('\n');
});
