(function() {

    /*
        Generates a pseudo-multidimensional array representing the game's board
        Gera um vetor pseudo multidimensional que representa o tabuleiro do jogo
    */
    function genBoard(size) {
        var board = []
        for (var i = 0; i < size*size; i++) {
            board.push(0)
        }
        return board
    }

    function Game(size) {
        this.size = size;
        this.board = genBoard(size)
    }

    module.exports = {
        new: function(size){

            if (typeof size !== 'number') {
                throw 'Size must be a number'
            }

            if (size < 1) {
                throw 'Size must be greater than 0'
            }

            return new Game(size)
        }
    }
})()
