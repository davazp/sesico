var cheerio = require('cheerio');

exports.render = function(string){
  var $ = cheerio.load(string);
  $.use = function(plugin){
    if (typeof plugin === 'string')
      plugin = require(plugin);
    plugin($);
  };
  return $;
};