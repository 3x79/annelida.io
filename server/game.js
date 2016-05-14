(function() {

    /*
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
            if (!size) {
                size = 20
            }
            return new Game(size)
        }
    }
})()
