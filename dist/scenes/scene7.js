"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Card_1 = require("../components/Card");
const Vector_1 = require("../components/Vector");
const Caption_1 = require("../components/Caption");
const Badge_1 = require("../components/Badge");
const AnimatedArrow_1 = require("../components/AnimatedArrow");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene7', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const chunkCardRef = (0, core_1.createRef)();
    const arrow1Ref = (0, core_1.createRef)();
    const modelCardRef = (0, core_1.createRef)();
    const arrow2Ref = (0, core_1.createRef)();
    const vectorRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -400, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.cyan, text: 'Generating Embeddings' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: chunkCardRef, x: -450, y: 0, width: 300, height: 180, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'TEXT CHUNK', color: theme_1.THEME.colors.primary, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 18, fill: theme_1.THEME.colors.text, text: '“RAG matches query concepts with documents using semantic math models.”', textWrap: true, textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow1Ref, points: [[-280, 0], [-170, 0]], glowColor: theme_1.THEME.colors.primary }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: modelCardRef, x: 0, y: 0, width: 300, height: 180, opacity: 0, glowColor: theme_1.THEME.colors.primary, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'EMBEDDING MODEL', color: theme_1.THEME.colors.primary, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Encoder NN\n(Converts text)', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow2Ref, points: [[170, 0], [250, 0]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(Vector_1.Vector, { ref: vectorRef, x: 450, y: 0, opacity: 0, values: [0.82, -0.41, 0.09, 0.95, -0.73, 0.36], glow: true }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Slow camera drift
    cameraRef().scale(1.04, 10), cameraRef().position.y(-10, 10), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(1), 
    // Fade in Title
    (0, fade_1.fadeIn)(titleRef(), 2), (0, core_1.waitFor)(2), 
    // Pop Chunk Card
    (0, pop_1.popIn)(chunkCardRef(), 2), (0, core_1.waitFor)(2), 
    // Draw Arrow 1
    (0, draw_1.drawIn)(arrow1Ref(), 2), (0, core_1.waitFor)(2), 
    // Pop Embedding Model
    (0, pop_1.popIn)(modelCardRef(), 2), (0, core_1.waitFor)(2), 
    // Draw Arrow 2
    (0, draw_1.drawIn)(arrow2Ref(), 2), (0, core_1.waitFor)(2), 
    // Pop Vector Card
    (0, pop_1.popIn)(vectorRef(), 2), (0, core_1.waitFor)(2), 
    // Fade in Caption
    (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'An embedding model transforms text into high-dimensional vectors that capture semantic meaning.', 2.8), (0, core_1.waitFor)(5)));
});
//# sourceMappingURL=scene7.js.map