import * as me from 'melonjs';
import game from './../game.js';

// Create a custom entity to manage the animation
export class ValentineEntity extends me.Entity {
    constructor(x, y, settings) {
        // let width = settings.width;

        super(x, y, settings);

        // set a "player object" type
        this.body.collisionType = me.collision.types.ENEMY_OBJECT;
        this.body.setStatic(true);

        // player can exit the viewport (jumping, falling into a hole, etc.)
        this.alwaysUpdate = true;

        this.dying = false;

        this.multipleJump = 0;

        // set a renderable
        this.renderable = game.texture.createAnimationFromName([
            "valentineidle000.png", "valentineidle001.png", "valentineidle002.png", 
            "valentineidle003.png", "valentineidle004.png", "valentineidle005.png"
        ]);

        // define a basic walking animatin
        this.renderable.addAnimation("stand", [
            { name: "valentineidle000.png", delay: 50 },
            { name: "valentineidle001.png", delay: 50 }, 
            { name: "valentineidle002.png", delay: 50 }, 
            { name: "valentineidle003.png", delay: 50 },
            { name: "valentineidle004.png", delay: 50 },
            { name: "valentineidle005.png", delay: 50 }]);

        // set as default
        this.renderable.setCurrentAnimation("stand");

        // set the renderable position to bottom center
        this.anchorPoint.set(1,1); 

        this.particleTint = "#FFF";
    }

    update (dt) {
        this.renderable.setCurrentAnimation("stand");
        return false;
    }

    /**
     * colision handler
     */
    onCollision(response, other) {
        // do something when collide
        me.audio.play("cling", false);
        // give some score
        game.data.score += 25000;

        return false;
    }
}
