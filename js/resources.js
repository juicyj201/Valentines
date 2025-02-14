var resources = [

    /* Graphics.
     * @example
     * { name: "example", type:"image", src: "data/img/example.png" },
     */
    { name: "tileset",         type:"image",   src: "data/img/tileset.png" },
    { name: "tileset2",         type:"image",   src: "data/img/tileset2.png" },
    { name: "tileset4",         type:"image",   src: "data/img/tileset4.png" },
    { name: "tileset5",         type:"image",   src: "data/img/tileset5.png" },
    { name: "background",      type:"image",   src: "data/img/background.png" },
    { name: "cloud1",      type:"image",   src: "data/img/cloud1.png" },
     { name: "cloud2",      type:"image",   src: "data/img/cloud2.png" },


    /* Maps.
     * @example
     * { name: "example01", type: "tmx", src: "data/map/example01.tmx" },
     * { name: "example01", type: "tmx", src: "data/map/example01.json" },
     */
    { name: "map1",            type: "tmx",    src: "data/map/map1.tmx" },
    { name: "map2",            type: "tmx",    src: "data/map/map2.tmx" },
    { name: "map3",            type: "tmx",    src: "data/map/map3.tmx" },
    { name: "map4",            type: "tmx",    src: "data/map/map4.tmx" },
    { name: "map5",            type: "tmx",    src: "data/map/map5.tmx" },
    { name: "map1",            type: "json",    src: "data/map/map1.json" },
    { name: "map2",            type: "json",    src: "data/map/map2.json" },
    { name: "map3",            type: "json",    src: "data/map/map3.json" },
    { name: "map4",            type: "json",    src: "data/map/map4.json" },
    { name: "map5",            type: "json",    src: "data/map/map5.json" },

    // { name: "map2",            type: "tmx",    src: "data/map/map2.json" },


    /* Tilesets.
     * @example
     * { name: "example01", type: "tsx", src: "data/map/example01.tsx" },
     * { name: "example01", type: "tsx", src: "data/map/example01.json" },
     */
    { name: "tileset",         type: "json",    src: "data/map/tileset.json" },
    { name: "tileset2",         type: "json",    src: "data/map/tileset2.json" },
    { name: "tileset4",         type: "json",    src: "data/map/tileset4.json" },
    { name: "tileset5",         type: "json",    src: "data/map/tileset5.json" },
    { name: "tileset",         type: "tsx",    src: "data/map/tileset.tsx" },
    { name: "tileset2",         type: "tsx",    src: "data/map/tileset2.tsx" },
    { name: "tileset4",         type: "tsx",    src: "data/map/tileset4.tsx" },
    { name: "tileset5",         type: "tsx",    src: "data/map/tileset5.tsx" },


    /* Background music.
     * @example
     * { name: "example_bgm", type: "audio", src: "data/bgm/" },
     */
    // { name: "dst-gameforest",  type: "audio", src: "data/bgm/" },
    { name: "levelsong",  type: "audio", src: "data/bgm/" },

    /* Sound effects.
     * @example
     * { name: "example_sfx", type: "audio", src: "data/sfx/" }
     */
    { name: "cling",           type: "audio",  src: "data/sfx/" },
    { name: "die",             type: "audio",  src: "data/sfx/" },
    { name: "enemykill",       type: "audio",  src: "data/sfx/" },
    { name: "jump",            type: "audio",  src: "data/sfx/" },


    /* Atlases
     * @example
     * { name: "example_tps", type: "json", src: "data/img/example_tps.json" },
     */
    // texturePacker
    { name: "texture",         type: "json",   src: "data/img/texture.json" },
    { name: "texture",         type: "image",  src: "data/img/texture.png" },

    /* Bitmap Font
    * @example
    * { name: "example_fnt", type: "image", src: "data/img/example_fnt.png" },
    * { name: "example_fnt", type: "binary", src: "data/img/example_fnt.fnt" },
    */
    { name: "PressStart2P", type:"image", src: "data/fnt/PressStart2P.png" },
    { name: "PressStart2P", type:"binary", src: "data/fnt/PressStart2P.fnt"},

    //UI HUD
    { name: "soundOn", type:"image", src: "data/img/assets/UI/shadedDark13.png"},
    { name: "soundOff", type:"image", src: "data/img/assets/UI/shadedDark15.png"},
    { name: "fullscreen", type:"image", src: "data/img/assets/UI/shadedDark30.png"},
];

export default resources;
