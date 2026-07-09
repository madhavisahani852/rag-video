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
exports.default = (0, _2d_1.makeScene2D)('scene16', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const queryVecRef = (0, core_1.createRef)();
    const arrow1Ref = (0, core_1.createRef)();
    const arrow2Ref = (0, core_1.createRef)();
    const arrow3Ref = (0, core_1.createRef)();
    const doc1Ref = (0, core_1.createRef)();
    const doc2Ref = (0, core_1.createRef)();
    const doc3Ref = (0, core_1.createRef)();
    const score1Ref = (0, core_1.createRef)();
    const score2Ref = (0, core_1.createRef)();
    const score3Ref = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -390, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.primary, text: 'Similarity Search' }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { x: -450, y: 0, opacity: 0, ref: queryVecRef, children: (0, jsx_runtime_1.jsx)(Vector_1.Vector, { values: [0.77, -0.12, 0.54, 0.33], glow: true }) }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow1Ref, points: [[-260, -150], [-60, -150]], glowColor: theme_1.THEME.colors.success }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow2Ref, points: [[-260, 0], [-60, 0]], glowColor: theme_1.THEME.colors.warning }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow3Ref, points: [[-260, 150], [-60, 150]], glowColor: theme_1.THEME.colors.error }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: doc1Ref, x: 160, y: -150, width: 280, height: 140, opacity: 0, glowColor: theme_1.THEME.colors.success, showGlow: true, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'DOC A', color: theme_1.THEME.colors.success, marginBottom: 16 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fill: theme_1.THEME.colors.textMuted, text: '"RAG retrieves from vector stores"', textAlign: 'center' })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: doc2Ref, x: 160, y: 0, width: 280, height: 140, opacity: 0, glowColor: theme_1.THEME.colors.warning, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'DOC B', color: theme_1.THEME.colors.warning, marginBottom: 16 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fill: theme_1.THEME.colors.textMuted, text: '"Databases store structured data"', textAlign: 'center' })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: doc3Ref, x: 160, y: 150, width: 280, height: 140, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'DOC C', color: theme_1.THEME.colors.error, marginBottom: 16 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fill: theme_1.THEME.colors.textMuted, text: '"The stock market rose today"', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: score1Ref, x: 440, y: -150, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 24, fontWeight: 700, fill: theme_1.THEME.colors.success, text: '0.97' }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: score2Ref, x: 440, y: 0, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 24, fontWeight: 700, fill: theme_1.THEME.colors.warning, text: '0.61' }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: score3Ref, x: 440, y: 150, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 24, fontWeight: 700, fill: theme_1.THEME.colors.error, text: '0.12' }) }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(cameraRef().scale(1.04, 40), cameraRef().position.x(-10, 40), (0, core_1.chain)((0, core_1.waitFor)(1), (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), (0, pop_1.popIn)(queryVecRef(), 0.6), (0, core_1.waitFor)(2), 
    // Draw all arrows and pop docs simultaneously
    (0, core_1.all)((0, draw_1.drawIn)(arrow1Ref(), 0.5), (0, draw_1.drawIn)(arrow2Ref(), 0.5), (0, draw_1.drawIn)(arrow3Ref(), 0.5)), (0, core_1.waitFor)(1), (0, core_1.all)((0, pop_1.popIn)(doc1Ref(), 0.5), (0, pop_1.popIn)(doc2Ref(), 0.5), (0, pop_1.popIn)(doc3Ref(), 0.5)), (0, core_1.waitFor)(2), 
    // Pop scores in sequence
    (0, core_1.all)((0, pop_1.popIn)(score1Ref(), 0.4), (0, core_1.chain)((0, core_1.waitFor)(1), (0, pop_1.popIn)(score2Ref(), 0.4)), (0, core_1.chain)((0, core_1.waitFor)(1), (0, pop_1.popIn)(score3Ref(), 0.4))), (0, core_1.waitFor)(2), 
    // Pulse the best match
    (0, fade_1.fadeIn)(captionRef(), 0.5), (0, typing_1.typeText)(captionTxt, 'Similarity search ranks candidate documents by how close their vector is to the query vector.', 2.5), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene16.js.map