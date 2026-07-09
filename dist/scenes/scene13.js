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
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene13', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const traditionalCardRef = (0, core_1.createRef)();
    const vsTextRef = (0, core_1.createRef)();
    const vectorCardRef = (0, core_1.createRef)();
    const arrow1Ref = (0, core_1.createRef)();
    const arrow2Ref = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -390, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.primary, text: 'Why Vector Databases are Needed' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: traditionalCardRef, x: -420, y: 0, width: 340, height: 300, opacity: 0, glowColor: theme_1.THEME.colors.error, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'TRADITIONAL DB', color: theme_1.THEME.colors.error, marginBottom: 16 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Exact Keyword Match', marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fill: theme_1.THEME.colors.textMuted, text: '"Find rows WHERE text = \'RAG\'"', textWrap: true, textAlign: 'center', marginBottom: 12 }), (0, jsx_runtime_1.jsx)(_2d_1.Line, { points: [[-20, -5], [20, 5]], stroke: theme_1.THEME.colors.error, lineWidth: 3, end: 0, ref: arrow1Ref }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 15, fill: theme_1.THEME.colors.error, text: '❌  Misses semantic meaning', marginTop: 10 })] }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: vsTextRef, x: 0, y: 0, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 52, fontWeight: 900, fill: theme_1.THEME.colors.textMuted, text: 'VS' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: vectorCardRef, x: 420, y: 0, width: 340, height: 300, opacity: 0, glowColor: theme_1.THEME.colors.cyan, showGlow: true, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'VECTOR DB', color: theme_1.THEME.colors.cyan, marginBottom: 16 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Semantic Similarity Search', marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fill: theme_1.THEME.colors.textMuted, text: '"Find vectors nearest to query embedding"', textWrap: true, textAlign: 'center', marginBottom: 12 }), (0, jsx_runtime_1.jsx)(_2d_1.Line, { points: [[-20, -5], [20, 5]], stroke: theme_1.THEME.colors.success, lineWidth: 3, end: 0, ref: arrow2Ref }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 15, fill: theme_1.THEME.colors.success, text: '✓  Understands context & meaning', marginTop: 10 })] }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Slow camera drift
    cameraRef().scale(1.04, 40), cameraRef().position.y(-10, 40), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(2), 
    // Fade in Title
    (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), 
    // Pop in Traditional DB card
    (0, pop_1.popIn)(traditionalCardRef(), 0.7), (0, core_1.waitFor)(2), (0, draw_1.drawIn)(arrow1Ref(), 0.4), (0, core_1.waitFor)(2), 
    // Fade in VS
    (0, fade_1.fadeIn)(vsTextRef(), 0.5), (0, core_1.waitFor)(2), 
    // Pop in Vector DB card
    (0, pop_1.popIn)(vectorCardRef(), 0.7), (0, core_1.waitFor)(2), (0, draw_1.drawIn)(arrow2Ref(), 0.4), (0, core_1.waitFor)(5), 
    // Caption
    (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'Traditional databases match exact keywords. Vector databases find semantically similar content — even with different words.', 3.0), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene13.js.map