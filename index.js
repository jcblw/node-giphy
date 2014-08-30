/*
  Node Giphy
  ----------------------------------
  A Simple wrapper around giphys api
*/

var 
request = require( 'request' ),
qs = require( 'querystring' ),
base = 'http://api.giphy.com/v1/gifs',
methods = { // these are all the available methods
  'search': '/search',
  'gifs': '',
  'gif': '/{id}',
  'translate': '/translate',
  'random': '/random',
  'trending': '/trending'
};

module.exports = Giphy

function makeRequest( apikey, endpoint, query ) {
  var // we take the last argument as callback
  callback = arguments[ arguments.length - 1 ];
  if ( typeof query !== 'object' ) {
    query = {};
  }

  if ( typeof callback !== 'function' ) {
    return;
  }

  for ( var key in query ) {
    if ( Array.isArray( query[ key ] ) ) {
      query[ key ] = query[ key ].join( ', ' ); 
    }
  }

  if ( query.id ) {
    endpoint = endpoint.replace( '{id}', query.id );
    delete query.id;
  }


  function formatResponse( err, res, body ) {
    callback( err, body );
  }

  query.api_key = apikey;

  request( { 
    url: endpoint + '?' + qs.stringify( query ),
    json: true 
  }, formatResponse );
}

function Giphy( apiKey ) {

  if ( !( this instanceof Giphy ) ) {
    return new Giphy( apiKey );
  }

  for ( var method in methods ) {
    this[ method ] = makeRequest.bind( null, apiKey, base + methods[ method ] );
  }

}

Giphy.prototype.getMethods = function() {
  return Object.keys( methods );
}