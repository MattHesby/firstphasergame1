/* global game phaser game_state */
game_state.story = function() {};

game_state.story.prototype = {

    preload: function(){
        
    },
    create: function(){
        //  The Story
        this.storyText = game.add.text(16, 16, 'This is the story of my person.', {
            fontSize: '60px',
            fill: '#FFFF'
        });
    },
    update: function(){
        
    }
}


game.state.add('story', game_state.story);
game.state.start('story');