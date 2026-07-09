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
const AnimatedArrow_1 = require("../components/AnimatedArrow");
const Caption_1 = require("../components/Caption");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene14', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const textCardRef = (0, core_1.createRef)();
    const arrow1Ref = (0, core_1.createRef)();
    const encoderCardRef = (0, core_1.createRef)();
    const arrow2Ref = (0, core_1.createRef)();
    const vectorRef = (0, core_1.createRef)();
    const dimLabelRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -390, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.cyan, text: 'What is an Embedding?' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: textCardRef, x: -480, y: -20, width: 260, height: 160, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'RAW TEXT', color: theme_1.THEME.colors.primary, marginBottom: 12 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 18, fill: theme_1.THEME.colors.text, text: '"The Eiffel Tower\nis in Paris"', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow1Ref, points: [[-350, -20], [-140, -20]], glowColor: theme_1.THEME.colors.primary }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: encoderCardRef, x: 0, y: -20, width: 280, height: 160, opacity: 0, glowColor: theme_1.THEME.colors.primary, showGlow: true, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'ENCODER MODEL', color: theme_1.THEME.colors.primary, marginBottom: 12 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Neural Network', textAlign: 'center' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.textMuted, text: '(e.g. text-embedding-ada-002)', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow2Ref, points: [[140, -20], [180, -20]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(Vector_1.Vector, { ref: vectorRef, x: 450, y: -20, opacity: 0, values: [0.82, -0.41, 0.09, 0.95, -0.73, 0.36], glow: true }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: dimLabelRef, x: 450, y: 70, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fill: theme_1.THEME.colors.textMuted, text: '← 1536-dimensional vector →' }) }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Slow camera drift
    cameraRef().scale(1.04, 40), cameraRef().position.x(10, 40), (0, core_1.chain)((0, core_1.waitFor)(2), (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), (0, pop_1.popIn)(textCardRef(), 0.6), (0, core_1.waitFor)(2), (0, draw_1.drawIn)(arrow1Ref(), 0.5), (0, core_1.waitFor)(1), (0, pop_1.popIn)(encoderCardRef(), 0.6), (0, core_1.waitFor)(2), (0, draw_1.drawIn)(arrow2Ref(), 0.5), (0, core_1.waitFor)(1), (0, pop_1.popIn)(vectorRef(), 0.7), (0, core_1.waitFor)(2), (0, fade_1.fadeIn)(dimLabelRef(), 0.5), (0, core_1.waitFor)(2), (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'An embedding is a dense numerical vector that captures the semantic meaning of text in high-dimensional space.', 2.8), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene14.js.map