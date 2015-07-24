var sesico = require('../');
var expect = require('chai').expect;

describe('Raw cheerio processing', function(){
  
  it('should not modify the input', function(){
    var code = '<html></html>';
    var $ = sesico(code);
    expect($.html()).to.be.equal(code);
  });

  it('should preserve comments', function(){
    var code = '<html><!-- this is a comment --></html>';
    var $ = sesico(code);
    expect($.html()).to.be.equal(code);
  });

  it('should be execute arbitrary cheerio operations', function(){
    var $ = sesico('<ul><li></li></ul>');
    $('li').remove();
    expect($.html()).to.be.equal('<ul></ul>');
  });

});



describe('Low-level plugin system', function(){
  
  it('plugin should be invoked', function(){
	var $ = sesico('<ul><li></li></ul>');
	$.use(function($){
	  $('li').remove();
	});
	expect($.html()).to.be.equal('<ul></ul>');
  });

});

