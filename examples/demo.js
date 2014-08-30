var 
giphy = require( '../index' )( 'dc6zaTOxFJmzC' ),
log = console.log.bind( console );

giphy.trending( log.bind( null, 'trending' ));
