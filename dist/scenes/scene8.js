"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Database_1 = require("../components/Database");
const Vector_1 = require("../components/Vector");
const Caption_1 = require("../components/Caption");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const pulse_1 = require("../animations/pulse");
const slide_1 = require("../animations/slide");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene8', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const dbContainerRef = (0, core_1.createRef)();
    const dbRef = (0, core_1.createRef)();
    const vec1Ref = (0, core_1.createRef)();
    const vec2Ref = (0, core_1.createRef)();
    const vec3Ref = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -400, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.primary, text: 'Vector Databases' }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: dbContainerRef, x: 300, y: 0, opacity: 0, children: (0, jsx_runtime_1.jsx)(Database_1.Database, { ref: dbRef, glow: false }) }), (0, jsx_runtime_1.jsx)(Vector_1.Vector, { ref: vec1Ref, x: -400, y: -120, opacity: 0, values: [0.15, -0.92, 0.44], glow: true }), (0, jsx_runtime_1.jsx)(Vector_1.Vector, { ref: vec2Ref, x: -400, y: 0, opacity: 0, values: [0.88, 0.03, -0.56], glow: true }), (0, jsx_runtime_1.jsx)(Vector_1.Vector, { ref: vec3Ref, x: -400, y: 120, opacity: 0, values: [-0.31, 0.65, 0.12], glow: true }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Slow camera drift
    cameraRef().scale(1.04, 40), cameraRef().position.x(-10, 40), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(1), 
    // Fade in Title
    (0, fade_1.fadeIn)(titleRef(), 2), (0, core_1.waitFor)(2), 
    // Pop in Vector DB
    (0, pop_1.popIn)(dbContainerRef(), 2), (0, core_1.waitFor)(2), 
    // Pop in vectors
    (0, core_1.all)((0, pop_1.popIn)(vec1Ref(), 2), (0, pop_1.popIn)(vec2Ref(), 2), (0, pop_1.popIn)(vec3Ref(), 2)), (0, core_1.waitFor)(2), 
    // Slide Vector 1 into the DB, and pulse DB
    (0, core_1.chain)((0, core_1.all)((0, slide_1.slideOutTo)(vec1Ref(), 600, 100, 2), (0, core_1.chain)((0, core_1.waitFor)(2), (0, pulse_1.pulseScale)(dbRef(), 1.08, 2))), (0, core_1.waitFor)(2), 
    // Slide Vector 2 into the DB
    (0, core_1.all)((0, slide_1.slideOutTo)(vec2Ref(), 600, 0, 2), (0, core_1.chain)((0, core_1.waitFor)(2), (0, pulse_1.pulseScale)(dbRef(), 1.10, 4))), (0, core_1.waitFor)(2), 
    // Slide Vector 3 into the DB
    (0, core_1.all)((0, slide_1.slideOutTo)(vec3Ref(), 600, -100, 2), (0, core_1.chain)((0, core_1.waitFor)(2), (0, pulse_1.pulseScale)(dbRef(), 1.12, 6)))), (0, core_1.waitFor)(2), 
    // Caption
    (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'Vector databases index these embeddings in high-dimensional spaces to find semantic connections instantly.', 2.8), (0, core_1.waitFor)(5)));
});
//# sourceMappingURL=scene8.js.map