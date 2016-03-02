(function(module) {
  var ca = function(fun, timeout, defaults, args) {
    var callback = args[args.length - 1]
    var done = false
    var custom_callack = function() {
      if (done) {
      }
      else {
        done = true
        callback.apply(this, arguments)
      }
    }

    args[args.length - 1] = (custom_callack)
    fun.apply(this, args)

    setTimeout(function() {
      if (done) {
      }
      else {
        done = true
        callback.apply(this, defaults)
      }
    }, timeout)
  }

  module.exports = ca
})(module)
