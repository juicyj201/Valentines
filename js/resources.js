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
    { name: "rock1",          type:"image",   src: "data/img/rock1.png" },
    { name: "rock2",          type:"image",   src: "data/img/rock2.png" },
    { name: "rock3",          type:"image",   src: "data/img/rock3.png" },
    { name: "rock4",          type:"image",   src: "data/img/rock4.png" },
    { name: "rock5",          type:"image",   src: "data/img/rock5.png" },
    { name: "rock6",          type:"image",   src: "data/img/rock6.png" },
    { name: "shrub0",          type:"image",   src: "data/img/shrub0.png" },
    { name: "shrub1",          type:"image",   src: "data/img/shrub1.png" },
    { name: "shrub2",          type:"image",   src: "data/img/shrub2.png" },
    { name: "shrub3",          type:"image",   src: "data/img/shrub3.png" },
    { name: "shrub4",          type:"image",   src: "data/img/shrub4.png" },
    { name: "shrub5",          type:"image",   src: "data/img/shrub5.png" },
    { name: "shrub6",          type:"image",   src: "data/img/shrub6.png" },
    { name: "shrub7",          type:"image",   src: "data/img/shrub7.png" },
    { name: "shrub8",          type:"image",   src: "data/img/shrub8.png" },
    { name: "shrub90",          type:"image",   src: "data/img/shrub90.png" },
    { name: "shrub101",          type:"image",   src: "data/img/shrub101.png" },
    { name: "shrub112",          type:"image",   src: "data/img/shrub112.png" },
    { name: "shrub123",          type:"image",   src: "data/img/shrub123.png" },
    { name: "shrub134",          type:"image",   src: "data/img/shrub134.png" },
    { name: "shrub145",          type:"image",   src: "data/img/shrub145.png" },
    { name: "shrub156",          type:"image",   src: "data/img/shrub156.png" },
    { name: "shrub167",          type:"image",   src: "data/img/shrub167.png" },
    { name: "shrub178",          type:"image",   src: "data/img/shrub178.png" },
    { name: "shrub189",          type:"image",   src: "data/img/shrub189.png" },
    { name: "shrub190",          type:"image",   src: "data/img/shrub190.png" },


    /* Maps.
     * @example
     * { name: "example01", type: "tmx", src: "data/map/example01.tmx" },
     * { name: "example01", type: "tmx", src: "data/map/example01.json" },
     */
    { name: "map1",            type: "tmx",    src: "data/map/map1.tmx" },
    { name: "map3",            type: "tmx",    src: "data/map/map3.tmx" },
    { name: "map1",            type: "json",    src: "data/map/map1.json" },
    { name: "map3",            type: "json",    src: "data/map/map3.json" },
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
