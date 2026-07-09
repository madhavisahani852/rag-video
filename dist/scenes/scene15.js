"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Card_1 = require("../components/Card");
const Badge_1 = require("../components/Badge");
const Vector_1 = require("../components/Vector");
const Caption_1 = require("../components/Caption");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const slide_1 = require("../animations/slide");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene15', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const sentence1Ref = (0, core_1.createRef)();
    const vec1Ref = (0, core_1.createRef)();
    const sentence2Ref = (0, core_1.createRef)();
    const vec2Ref = (0, core_1.createRef)();
    const noteRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -390, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.cyan, text: 'Embedding Example' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: sentence1Ref, x: -340, y: -110, width: 380, height: 120, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'SENTENCE A', color: theme_1.THEME.colors.primary, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fill: theme_1.THEME.colors.text, text: '"The cat sat on the mat"', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(Vector_1.Vector, { ref: vec1Ref, x: 260, y: -110, opacity: 0, values: [0.72, -0.31, 0.88, -0.15, 0.54, 0.09], glow: true }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: sentence2Ref, x: -340, y: 80, width: 380, height: 120, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'SENTENCE B', color: theme_1.THEME.colors.purple, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fill: theme_1.THEME.colors.text, text: '"A feline rested on the rug"', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(Vector_1.Vector, { ref: vec2Ref, x: 260, y: 80, opacity: 0, values: [0.71, -0.29, 0.86, -0.14, 0.52, 0.11], glow: true, glowColor: theme_1.THEME.colors.purple }), (0, jsx_runtime_1.jsx)(Card_1.Card, { ref: noteRef, y: 240, width: 700, height: 80, opacity: 0, glowColor: theme_1.THEME.colors.success, showGlow: true, alignItems: 'center', justifyContent: 'center', children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.success, text: '↑ Vectors are nearly identical — sentences are semantically equivalent!', textAlign: 'center' }) }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 420, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(cameraRef().scale(1.04, 40), cameraRef().position.y(10, 40), (0, core_1.chain)((0, core_1.waitFor)(1), (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), 
    // Slide in sentence 1 from left, pop vector 1
    (0, core_1.all)((0, slide_1.slideInFrom)(sentence1Ref(), -100, 0, 0.6), (0, core_1.chain)((0, core_1.waitFor)(2), (0, pop_1.popIn)(vec1Ref(), 0.6))), (0, core_1.waitFor)(2), 
    // Slide in sentence 2 from left, pop vector 2
    (0, core_1.all)((0, slide_1.slideInFrom)(sentence2Ref(), -100, 0, 0.6), (0, core_1.chain)((0, core_1.waitFor)(2), (0, pop_1.popIn)(vec2Ref(), 0.6))), (0, core_1.waitFor)(2), 
    // Pop in similarity note
    (0, pop_1.popIn)(noteRef(), 0.7), (0, core_1.waitFor)(2), (0, fade_1.fadeIn)(captionRef(), 0.5), (0, typing_1.typeText)(captionTxt, 'Two sentences with different words can produce nearly identical embeddings — because they mean the same thing.', 2.8), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene15.js.map