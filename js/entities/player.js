import * as me from 'melonjs';
import game from './../game.js';

// Create a custom entity to manage the animation
class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
        // let width = settings.width;

        //this.settings.image = me.loader.getImage("texture");
        // settings.framewidth = settings.width = 128;
        // settings.frameheight = settings.height = 128;

        super(x, y, settings);

        // set a "player object" type
        this.body.collisionType = me.collision.types.PLAYER_OBJECT;

        // player can exit the viewport (jumping, falling into a hole, etc.)
        this.alwaysUpdate = true;

        // walking & jumping speed
        //this.body.addShape(new me.Rect(0, 0, this.width, this.height));
        this.body.setMaxVelocity(5, 15);
        this.body.setFriction(0.4, 0);

        this.dying = false;

        this.multipleJump = 1;

        // set the viewport to follow this renderable on both axis, and enable damping
        me.game.viewport.follow(this, me.game.viewport.AXIS.BOTH, 0.2);

        // enable keyboard
        me.input.bindKey(me.input.KEY.LEFT,  "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.X,     "jump", true);
        me.input.bindKey(me.input.KEY.UP,    "jump", true);
        me.input.bindKey(me.input.KEY.SPACE, "jump", true);
        me.input.bindKey(me.input.KEY.DOWN,  "down");

        me.input.bindKey(me.input.KEY.A,     "left");
        me.input.bindKey(me.input.KEY.D,     "right");
        me.input.bindKey(me.input.KEY.W,     "jump", true);
        me.input.bindKey(me.input.KEY.S,     "down");

        //me.input.registerPointerEvent("pointerdown", this, this.onCollision.bind(this));
        //me.input.bindPointer(me.input.pointer.RIGHT, me.input.KEY.LEFT);

        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.FACE_1}, me.input.KEY.UP);
        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.FACE_2}, me.input.KEY.UP);
        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.DOWN}, me.input.KEY.DOWN);
        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.FACE_3}, me.input.KEY.DOWN);
        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.FACE_4}, me.input.KEY.DOWN);
        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.LEFT}, me.input.KEY.LEFT);
        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.RIGHT}, me.input.KEY.RIGHT);

        // map axes
        me.input.bindGamepad(0, {type:"axes", code: me.input.GAMEPAD.AXES.LX, threshold: -0.5}, me.input.KEY.LEFT);
        me.input.bindGamepad(0, {type:"axes", code: me.input.GAMEPAD.AXES.LX, threshold: 0.5}, me.input.KEY.RIGHT);
        me.input.bindGamepad(0, {type:"axes", code: me.input.GAMEPAD.AXES.LY, threshold: -0.5}, me.input.KEY.UP);

        //GAME.TEXTURE (as in the texture variable in game.js) IS DEFINETELY A SPRITE CLASS. DO WHAT YOU WILL WITH THAT INFORMATION

        // set a renderable
        this.renderable = game.texture.createAnimationFromName([
            "walk001.png", "walk002.png", "walk003.png",
            "walk004.png", "walk005.png", "walk006.png",
            "walk007.png", "walk008.png", "walk009.png",
            "walk0010.png", "walk0011.png", "walk0012.png",
            "idle001.png", "idle002.png", "idle003.png",
            "idle004.png", "idle005.png", "idle006.png",
            "idle007.png"
        ]);

        // define a basic walking animatin
        this.renderable.addAnimation("stand", [
            { name: "idle001.png", delay: 50 }, 
            { name: "idle002.png", delay: 50 }, 
            { name: "idle003.png", delay: 50 },
            { name: "idle004.png", delay: 50 },
            { name: "idle005.png", delay: 50 },
            { name: "idle006.png", delay: 50 },
            { name: "idle007.png", delay: 50 }]);

        this.renderable.addAnimation("walk",  [
            { name: "walk001.png", delay: 50 }, 
            { name: "walk002.png", delay: 50 }, 
            { name: "walk003.png", delay: 50 },
            { name: "walk004.png", delay: 50 },
            { name: "walk005.png", delay: 50 },
            { name: "walk006.png", delay: 50 },
            { name: "walk007.png", delay: 50 },
            { name: "walk008.png", delay: 50 },
            { name: "walk009.png", delay: 50 },
            { name: "walk0010.png", delay: 50 },
            { name: "walk0011.png", delay: 50 },
            { name: "walk0012.png", delay: 50 }]);
            
        this.renderable.addAnimation("jump",  [
            { name: "walk004.png", delay: 150 }, 
            { name: "walk005.png", delay: 150 }, 
            { name: "walk006.png", delay: 150 }, 
            { name: "walk002.png", delay: 150 }, 
            { name: "walk001.png", delay: 150 }]);

        // set as default
        this.renderable.setCurrentAnimation("walk");

        // set the renderable position to bottom center
        this.anchorPoint.set(0.25, 0.5); 
    }

    update (dt) {
        if (me.input.isKeyPressed("left")){
            if (this.body.vel.y === 0) {
                this.renderable.setCurrentAnimation("walk");
            }
            this.body.force.x = -this.body.maxVel.x;
            this.renderable.flipX(true);
        } else if (me.input.isKeyPressed("right")) {
            if (this.body.vel.y === 0) {
                this.renderable.setCurrentAnimation("walk");
            }
            this.body.force.x = this.body.maxVel.x;
            this.renderable.flipX(false);
        }

        if (me.input.isKeyPressed("jump")) {
            this.renderable.setCurrentAnimation("jump");
            this.body.jumping = true;
            if (this.multipleJump <= 2) {
                // easy "math" for double jump
                this.body.force.y = -this.body.maxVel.y * this.multipleJump++;
                me.audio.stop("jump");
                me.audio.play("jump", false);
            }
        } else {
            if (!this.body.falling && !this.body.jumping) {
                // reset the multipleJump flag if on the ground
                this.multipleJump = 1;
                this.renderable.setCurrentAnimation("stand");
            }
            else if (this.body.falling && this.multipleJump < 2) {
                // reset the multipleJump flag if falling
                this.multipleJump = 2;
            }
        }

        if (this.body.force.x == 0 && this.body.force.y == 0) {
            this.renderable.setCurrentAnimation("stand");
        }

        // check if we fell into a hole
        if (!this.inViewport && (this.getBounds().top > me.video.renderer.height)) {
            // if yes reset the game
            this.dying = true;
            me.game.world.removeChild(this);
            me.game.viewport.fadeIn("#fff", 150, function(){
                me.audio.play("die", false);
                me.level.reload();
                me.game.viewport.fadeOut("#fff", 150);
            });
            return true;
        }

        // check if we moved (an "idle" animation would definitely be cleaner)
        if (this.body.vel.x !== 0 || this.body.vel.y !== 0 ||
            (this.renderable && this.renderable.isFlickering())
        ) {
            super.update(dt);
            return true;
        }
        return false;
    }

    /**
     * colision handler
     */
    onCollision(response, other) {
        switch (other.body.collisionType) {
            case me.collision.types.WORLD_SHAPE:
                // Simulate a platform object
                if (other.type === "platform") {
                    if (this.body.falling &&
                        !me.input.isKeyPressed("down") &&
                        // Shortest overlap would move the player upward
                        (response.overlapV.y > 0) &&
                        // The velocity is reasonably fast enough to have penetrated to the overlap depth
                        (~~this.body.vel.y >= ~~response.overlapV.y)
                    ) {
                        // Disable collision on the x axis
                        response.overlapV.x = 0;
                        // Repond to the platform (it is solid)
                        return true;
                    }
                    // Do not respond to the platform (pass through)
                    return false;
                }

                // Custom collision response for slopes
                else if (other.type === "slope") {
                    // Always adjust the collision response upward
                    response.overlapV.y = Math.abs(response.overlap);
                    response.overlapV.x = 0;

                    // Respond to the slope (it is solid)
                    return true;
                }
                break;

            case me.collision.types.ENEMY_OBJECT:
                if (!other.isMovingEnemy) {
                    // spike or any other fixed danger
                    this.body.vel.y -= this.body.maxVel.y * me.timer.tick;
                    this.hurt();
                }
                else {
                    // a regular moving enemy entity
                    if ((response.overlapV.y > 0) && this.body.falling) {
                        // jump
                        this.body.vel.y -= this.body.maxVel.y * 1.5 * me.timer.tick;
                    }
                    else {
                        this.hurt();
                    }
                    // Not solid
                    return false;
                }
                break;

            default:
                // Do not respond to other objects (e.g. coins)
                return false;
        }

        // Make the object solid
        return true;
    }

    /**
     * ouch
     */
    hurt() {
        var sprite = this.renderable;

        if (!sprite.isFlickering()) {

            // tint to red and flicker
            sprite.tint.setColor(255, 192, 192);
            sprite.flicker(750, function () {
                // clear the tint once the flickering effect is over
                sprite.tint.setColor(255, 255, 255);
            });

            // flash the screen
            me.game.viewport.fadeIn("#FFFFFF", 75);
            me.audio.play("die", false);
        }
    }
}

export default PlayerEntity;
