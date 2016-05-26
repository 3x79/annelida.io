(function() {

    var debugMode = null;

    /*
        itaretes over arguments array end run function "func" over each element
    */
    function iterateOverArgs(func) {
        process.argv.forEach(func)
    }


    /*
      TODO Write a better routine to check arguments. For now it:
        has poor performance;
        is inflexible,
        prone to "copy and paste"

        ideas: populate arguments on program start. create function "loadArguments"
    */
    module.exports = {
        printArgs: function () {
            iterateOverArgs(function(val, index) {
                console.log('%d: %s', index, val)
            })
        },

        isDebug: function() {
            //if attribute does not exist...
            if (debugMode == null) {
                var wrapper = {val: false}
                iterateOverArgs(function(val, index) {
                    if (val === 'debug') {
                        wrapper.val = true
                    }
                })
                debugMode = wrapper.val
            }
            return debugMode
        },

        isTestMode: function() {
            //if does not exist yet...
            if (testMode == null) {
                var wrapper = {val: false}
                iterateOverArgs(function(val, index) {
                    if (val === 'test') {
                        wrapper.val = true
                    }
                })
                testMode = wrapper.val
            }
            return testMode
        }
    }
})()
