var cheerio = require('cheerio');

module.exports = function (string){
  var $ = cheerio.load(string);

  $.use = function(plugin){
	if (typeof plugin === 'string')
	  plugin = require(plugin);
	plugin($);
  };

  return $;
};
