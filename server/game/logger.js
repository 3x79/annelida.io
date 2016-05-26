(function() {
    module.exports = {
        // debug: logs only on debug mode
        d: function(msg) {
            if (ArgvUtils.isDebug()) {
                console.log(msg)
            }
        },
        // log: logs regardless of being on debug mode
        l: function(msg) {
            console.log(msg)
        }
    }
})()
