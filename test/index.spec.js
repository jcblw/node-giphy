var 
expect = require( 'expect.js' ),
giphy = require( '../index');

describe( 'giphy', function(){
  it ( 'should import a function', function(){
    expect( typeof giphy ).to.be( 'function' );
  } );
  it ( 'should return an object when executing', function() {
    expect( typeof giphy() ).to.be( 'object' );
  } );
  describe( '::getMethods', function() {
    if ( 'should return an array of methods', function() {
      expect( Array.isArray( giphy().getMethods() ) ).to.be( true );
    } );
  })
} );