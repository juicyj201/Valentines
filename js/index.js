import * as me from 'melonjs';

import game from './game.js';
import resources from './resources.js';
import PlayerEntity from './entities/player.js';
import PlayScreen from './screens/play.js';
import { DebugPanelPlugin } from "debugPlugin";

/**
 *
 * Initialize the application
 */
export default function onload() {

    // init the video
    if (!me.video.init(800, 600, {parent : "screen", scaleMethod : "flex-width",  renderer : me.video.WEBGL, preferWebGL1 : false, depthTest: "z-buffer", subPixel : false})) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    // register the debug plugin
    me.plugin.register(DebugPanelPlugin,  "debugPanel");

    // initialize the "sound engine"
    me.audio.init("mp3,ogg");
  
    // allow cross-origin for image/texture loading
	me.loader.setOptions({ crossOrigin : "anonymous" });

    // set all ressources to be loaded
    me.loader.preload(resources, () => {

        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new PlayScreen());

        // set the fade transition effect
        me.state.transition("fade", "#FFFFFF", 250);

        // register our objects entity in the object pool
        me.pool.register("mainPlayer", PlayerEntity);
        // me.pool.register("SlimeEntity", SlimeEnemyEntity);
        // me.pool.register("FlyEntity", FlyEnemyEntity);
        // me.pool.register("CoinEntity", CoinEntity, true);


        console.log("yeah")
        // load the texture atlas file
        // this will be used by renderable object later
        // game.texture = new me.TextureAtlas([
        //     me.loader.getJSON("texture"),
        //     me.loader.getImage("texture")
        // ]);

        game.texture = new me.TextureAtlas(
            me.loader.getJSON("texture"),
            me.loader.getImage("texture")
        );

        // add some keyboard shortcuts
        me.event.on(me.event.KEYDOWN, (action, keyCode /*, edge */) => {

            // change global volume setting
            if (keyCode === me.input.KEY.PLUS) {
                // increase volume
                me.audio.setVolume(me.audio.getVolume()+0.1);
            } else if (keyCode === me.input.KEY.MINUS) {
                // decrease volume
                me.audio.setVolume(me.audio.getVolume()-0.1);
            }

            // toggle fullscreen on/off
            if (keyCode === me.input.KEY.F) {
                if (!me.device.isFullscreen()) {
                    me.device.requestFullscreen();
                } else {
                    me.device.exitFullscreen();
                }
            }
        });

        // switch to PLAY state
        me.state.change(me.state.PLAY,
            {
                onResetEvent: function () {
                    this.frames = [
                        me.loader.getImage("walk001"),
                        me.loader.getImage("walk002"),
                        me.loader.getImage("walk003"),
                        me.loader.getImage("walk004"),
                        me.loader.getImage("walk005"),
                        me.loader.getImage("walk006"),
                        me.loader.getImage("walk007"),
                        me.loader.getImage("walk008"),
                        me.loader.getImage("walk009"),
                        me.loader.getImage("walk0010"),
                        me.loader.getImage("walk0011"),
                        me.loader.getImage("walk0012"),
                    ];
                
                    // Create an instance of the AnimationEntity class
                    const animationEntity = new PlayerEntity(100, 100, frames, 100); // 100ms frame rate
                
                    // Add the animation entity to the game world
                    me.game.world.addChild(animationEntity, 1);
                },
            }   
        );
    });
}
