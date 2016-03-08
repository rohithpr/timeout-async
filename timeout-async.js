(function(module) {
  var ta = function(callFunction, timeout, defaults, args) {
    var callback = args[args.length - 1]
    var done = false
    var customCallback = function() {
      if (done) {
      }
      else {
        done = true
        callback.apply(this, arguments)
      }
    }

    args[args.length - 1] = (customCallback)
    callFunction.apply(this, args)

    setTimeout(function() {
      if (done) {
      }
      else {
        done = true
        callback.apply(this, defaults)
      }
    }, timeout)
  }

  module.exports = ta
})(module)
