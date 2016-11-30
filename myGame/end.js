/* global game phaser game_state */

game_state.end = function() {};

game_state.end.prototype = {

    preload: function(){
        game.load.image('sky', 'assets/sky.png');
    },
    create: function(){
        game.add.sprite(0,0, 'sky');
        this.scoreText = game.add.text(16, 16, 'Yay! You collected Stars!', {
            fontSize: '32px',
            fill: '#000'
        });
    },
    update: function(){

    }
}


game.state.add('end', game_state.end);