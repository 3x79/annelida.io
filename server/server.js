(function() {
    var argvUtils = require('./argvUtils')
    var logger = require('./logger')
    var game = require('./game').new(3)

    logger.l('\n\n\nWelcome to Annelida.io!\n')

    /*
        inicia o servidor
    */
    function startServer() {
        logger.l('...starting server')
        var WebSocketServer = require('ws').Server
        var wss = new WebSocketServer({port:8080})

        //acionado quando conexão com cliente for estabelecida
        wss.on('connection', function(ws) {
            registerClient(ws)
            ws.on('message', onMessageReceived)
        })
        logger.l('...server is up and running! (probably)')
        logger.l('...waiting for clients!')
    }

    /*
        Registra o cliente
    */
    function registerClient(client) {
        logger.l('...adding client '+client.address())
        // TODO
    }

    /*
        Processa mensagem enviada pelo cliente
    */
    function onMessageReceived(message) {
        console.log('received: %s', message)
    }

    /*
        função a ser executada quando aplicação estiver em modo de depuração
    */
    function doWhenDebug() {
        logger.d('...printing arguments')
        argvUtils.printArgs()
        //setTimeout(function() {console.log('yo!')}, 2000)
        logger.l(game.board)
    }

    if (argvUtils.isDebug()) {
        doWhenDebug()
    }

    startServer()

})()
