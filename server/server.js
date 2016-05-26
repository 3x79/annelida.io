(function() {

    /*
        GLOBAL VARIABLES

        Every "import" should be here.
    */
    ArgvUtils = require('./game/argvUtils')
    logger = require('./game/logger')
    Game = require('./game/game')
    var game = game.new(3)

    logger.l('\n\n\nWelcome to Annelida.io!\n')

    /*
        Starts the server up
    */
    function startServer() {
        logger.l('...starting server')
        var WebSocketServer = require('ws').Server
        var wss = new WebSocketServer({port:8080})

        //action on client connect
        wss.on('connection', function(ws) {
            registerClient(ws)
            ws.on('message', onMessageReceived)
        })
        logger.l('...server is up and running! (probably)')
        logger.l('...waiting for clients!')
    }

    /*
        Registry a client
    */
    function registerClient(client) {
        logger.l('...adding client '+client.address())
        // TODO
    }

    /*
        Process message sent by client.
    */
    function onMessageReceived(message) {
        console.log('received: %s', message)
    }

    /*
        função a ser executada quando aplicação estiver em modo de depuração

    */
    function doWhenDebug() {
        logger.d('>>> ARGUMENTS >>>\n')
        ArgvUtils.printArgs()
        logger.d('\n<<< ARGUMENTS <<<\n')
        //setTimeout(function() {console.log('yo!')}, 2000)
        logger.d('>>> BOARD >>>\n')
        logger.d(game.board)
        logger.d('\n<<< BOARD <<<\n')
    }

    if (ArgvUtils.isDebug()) {
        doWhenDebug()
    }

    startServer()

})()
