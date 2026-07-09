"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Card_1 = require("../components/Card");
const Badge_1 = require("../components/Badge");
const Caption_1 = require("../components/Caption");
const fade_1 = require("../animations/fade");
const pop_1 = require("../animations/pop");
const draw_1 = require("../animations/draw");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene17', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const vectorALineRef = (0, core_1.createRef)();
    const vectorBLineRef = (0, core_1.createRef)();
    const vectorCLineRef = (0, core_1.createRef)();
    const labelARef = (0, core_1.createRef)();
    const labelBRef = (0, core_1.createRef)();
    const labelCRef = (0, core_1.createRef)();
    const formulaCardRef = (0, core_1.createRef)();
    const scoreCardRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -390, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.cyan, text: 'Cosine Similarity Concept' }) }), (0, jsx_runtime_1.jsx)(_2d_1.Line, { ref: vectorALineRef, points: [[-100, 100], [100, -80]], stroke: theme_1.THEME.colors.primary, lineWidth: 5, endArrow: true, arrowSize: 14, shadowColor: theme_1.THEME.colors.primary, shadowBlur: 8, end: 0, x: -280, y: 50 }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: labelARef, x: -150, y: -80, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.primary, text: 'Query (A)' }) }), (0, jsx_runtime_1.jsx)(_2d_1.Line, { ref: vectorBLineRef, points: [[-100, 100], [60, -60]], stroke: theme_1.THEME.colors.success, lineWidth: 5, endArrow: true, arrowSize: 14, shadowColor: theme_1.THEME.colors.success, shadowBlur: 8, end: 0, x: -280, y: 50 }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: labelBRef, x: -200, y: -20, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.success, text: 'Close Match (B)' }) }), (0, jsx_runtime_1.jsx)(_2d_1.Line, { ref: vectorCLineRef, points: [[-100, 100], [-80, -80]], stroke: theme_1.THEME.colors.error, lineWidth: 5, endArrow: true, arrowSize: 14, shadowColor: theme_1.THEME.colors.error, shadowBlur: 8, end: 0, x: -280, y: 50 }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: labelCRef, x: -420, y: -60, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.error, text: 'Far Match (C)' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: formulaCardRef, x: 330, y: -60, width: 380, height: 160, opacity: 0, glowColor: theme_1.THEME.colors.cyan, showGlow: true, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'FORMULA', color: theme_1.THEME.colors.cyan, marginBottom: 12 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 22, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'cos(θ) = (A·B) / (|A|·|B|)', textAlign: 'center' })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: scoreCardRef, x: 330, y: 120, width: 380, height: 120, opacity: 0, children: [(0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fill: theme_1.THEME.colors.textMuted, text: 'Score range: –1 (opposite) → +1 (identical)', textAlign: 'center' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fontWeight: 700, fill: theme_1.THEME.colors.success, text: 'Smaller angle = Higher similarity', textAlign: 'center', marginTop: 8 })] }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 420, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(cameraRef().scale(1.04, 40), cameraRef().position.y(-10, 40), (0, core_1.chain)((0, core_1.waitFor)(1), (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), 
    // Draw vectors
    (0, core_1.all)((0, draw_1.drawIn)(vectorALineRef(), 0.6), (0, core_1.chain)((0, core_1.waitFor)(2), (0, draw_1.drawIn)(vectorBLineRef(), 0.6)), (0, core_1.chain)((0, core_1.waitFor)(2), (0, draw_1.drawIn)(vectorCLineRef(), 0.6))), (0, core_1.waitFor)(2), 
    // Pop labels
    (0, core_1.all)((0, pop_1.popIn)(labelARef(), 0.4), (0, pop_1.popIn)(labelBRef(), 0.4), (0, pop_1.popIn)(labelCRef(), 0.4)), (0, core_1.waitFor)(2), 
    // Pop formula and score cards
    (0, pop_1.popIn)(formulaCardRef(), 0.6), (0, core_1.waitFor)(2), (0, pop_1.popIn)(scoreCardRef(), 0.5), (0, core_1.waitFor)(2), (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'Cosine similarity measures the angle between two vectors. A smaller angle means greater semantic similarity.', 2.8), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene17.js.map