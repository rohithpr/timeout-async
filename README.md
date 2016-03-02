# timeout-async
Provides the option to call a callback function with default arguments if an async function takes too long.

### Import the library

```javascript
var ta = require('timeout-async')
```

### Arguments

1. function - async function that should be called
2. number - amount time that should elapse before the callback function is called with default arguments
3. array - default arguments for the callback function
4. array - arguments to the async function (including the callback function)

### Example

```javascript
var ta = require('timeout-async')
var request = require('request')

ta(request.get, 5000, ['default-err', 'default-response', 'default-body'], [{url: 'http://my-ip.herokuapp.com'}, function(err, response, body) {
  console.log(err, response, body)
}])
```
