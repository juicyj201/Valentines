import * as me from 'melonjs';

import game from './game.js';
import resources from './resources.js';
import PlayerEntity from './entities/player.js';
import { SlimeEnemyEntity } from './entities/enemies.js';
import { RoseEntity } from './entities/coin.js';
import PlayScreen from './screens/play.js';
import { DebugPanelPlugin } from "debugPlugin";

/**
 *
 * Initialize the application
 */
export default function onload() {

    // init the video
    //scaleMethod : "flex-width", depthTest: "z-buffer", subPixel : false, preferWebGL1 : false, renderer : me.video.WEBGL
    if (!me.video.init(800, 600, {parent : "screen", scale: "auto"})) {
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
        //me.pool.register("SlimeEntity", SlimeEnemyEntity);
        // me.pool.register("FlyEntity", FlyEnemyEntity);
        me.pool.register("RoseEntity", RoseEntity, true);

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
        me.state.change(me.state.PLAY);
    });
}
