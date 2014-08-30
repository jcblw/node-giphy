## Node Giphy

Play around with [Giphy's]( http://giphy.com ) api in node 

![Eagle playing with spinkler](http://i.imgur.com/5VFEyTd.gif)

Node Giphy is a simple wrapper around Giphy's api.

### Install

    $ npm install giphy

### Usage

First you will need to use the development api key to test. It is `dc6zaTOxFJmzC` but do not use this for production. 

Information about production keys [here](https://github.com/Giphy/GiphyAPI#access-and-api-keys)

##### Authentication 

```javascript
var giphy = require( 'giphy' )( 'put key here' );

// or

var Giphy = require( 'giphy' )
  , giphy = new Giphy( 'put key here');
```

##### Methods

To see all available methods

```javascript
console.log( giphy.getMethods() );
```

###### Available Methods

- search
- gifs ( multiple ids )
- gif ( single id )
- trending
- search
- translate

all methods pretty much have same api.

```javascript
giphy[ methodName ]( [options,] callback );
```

so this url 

    http://api.giphy.com/v1/gifs?ids=feqkVgjJpYtjy,7rzbxdu0ZEXLy

would translate into

```javascript
giphy.gifs( { ids : [ 'feqkVgjJpYtjy', '7rzbxdu0ZEXLy' ]}, handleGifs );
```

options object is optional as well, eg.

```javascript
giphy.trending( handleTrending );
```

###### Callback payloads

giphy uses the convention of error first then data. We also pass back some request information as well in the third argument

```javascript
function handleTrending( err, trending, res ) {
  // ...
}
giphy.trending( handleTrending );
```

##### See all the endpoints and params [here](https://github.com/Giphy/GiphyAPI)