/* global game phaser game_state */
game_state.story = function() {};

game_state.story.prototype = {

    preload: function(){
        game.load.image('sky', 'assets/sky.png');
    },
    create: function(){
        game.add.sprite(0,0, 'sky');
        this.cursors = game.input.keyboard.createCursorKeys();
        this.scoreText = game.add.text(16, 16, 'Welcome to the Story of Alien the Alien. \r  He collects stars! \r Help him collect as many stars as possible! \r Press The UP Arrow to begin', {
            fontSize: '32px',
            fill: '#000'
        });
    },
    update: function(){
        if(this.cursors.up.isDown){
            game.state.start('main');
        }
    }
}


game.state.add('story', game_state.story);
game.state.start('story');