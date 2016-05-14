(function() {
    var argvUtils = require('./argvUtils')

    module.exports = {
        // debug: faz o log apenas se tiver em modo de depuração
        d: function(msg) {
            if (argvUtils.isDebug()) {
                console.log(msg)
            }
        },
        // log: faz o log idependente do modo de execução da aplicação
        l: function(msg) {
            console.log(msg)
        }
    }
})()
