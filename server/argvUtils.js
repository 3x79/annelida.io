(function() {

    var debugMode = null;

    /*
        itera sobre o array de argumentos e executa a função
        caso a função retorne
    */
    function iterateOverArgs(func) {
        process.argv.forEach(func)
    }



    module.exports = {
        printArgs: function () {
            iterateOverArgs(function(val, index) {
                console.log('%d: %s', index, val)
            })
        },

        isDebug: function() {
            //se atributo ainda não foi populado...
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
        }
    }
})()
