"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Card_1 = require("../components/Card");
const Badge_1 = require("../components/Badge");
const Document_1 = require("../components/Document");
const AnimatedArrow_1 = require("../components/AnimatedArrow");
const Caption_1 = require("../components/Caption");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const slide_1 = require("../animations/slide");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene23', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const retrievedLabelRef = (0, core_1.createRef)();
    const doc1Ref = (0, core_1.createRef)();
    const doc2Ref = (0, core_1.createRef)();
    const doc3Ref = (0, core_1.createRef)();
    const doc4Ref = (0, core_1.createRef)();
    const arrow1Ref = (0, core_1.createRef)();
    const rerankerCardRef = (0, core_1.createRef)();
    const arrow2Ref = (0, core_1.createRef)();
    const topNLabelRef = (0, core_1.createRef)();
    const result1Ref = (0, core_1.createRef)();
    const result2Ref = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -390, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.purple, text: 'Re-ranking' }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: retrievedLabelRef, x: -530, y: -250, opacity: 0, children: (0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'RETRIEVED: top-20', color: theme_1.THEME.colors.primary }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: doc1Ref, x: -530, y: -100, opacity: 0, children: (0, jsx_runtime_1.jsx)(Document_1.Document, { linesCount: 3, highlightedLine: 0, highlightColor: theme_1.THEME.colors.primary }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: doc2Ref, x: -530, y: -20, opacity: 0, children: (0, jsx_runtime_1.jsx)(Document_1.Document, { linesCount: 3, highlightedLine: 1, highlightColor: theme_1.THEME.colors.textMuted }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: doc3Ref, x: -530, y: 60, opacity: 0, children: (0, jsx_runtime_1.jsx)(Document_1.Document, { linesCount: 3, highlightedLine: 0, highlightColor: theme_1.THEME.colors.textMuted }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: doc4Ref, x: -530, y: 140, opacity: 0, children: (0, jsx_runtime_1.jsx)(Document_1.Document, { linesCount: 3, highlightedLine: -1 }) }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow1Ref, points: [[-380, 20], [-220, 20]], glowColor: theme_1.THEME.colors.purple }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: rerankerCardRef, x: 0, y: 20, width: 300, height: 200, opacity: 0, glowColor: theme_1.THEME.colors.purple, showGlow: true, alignItems: 'center', justifyContent: 'center', children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'RE-RANKER', color: theme_1.THEME.colors.purple, marginBottom: 12 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 18, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Cross-Encoder Model', textAlign: 'center', marginBottom: 8 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.textMuted, text: 'Scores (query, doc) pairs\nmore precisely than embedding', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow2Ref, points: [[160, 20], [300, 20]], glowColor: theme_1.THEME.colors.success }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: topNLabelRef, x: 520, y: -200, opacity: 0, children: (0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'TOP-3 FINAL', color: theme_1.THEME.colors.success }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: result1Ref, x: 520, y: -20, opacity: 0, children: (0, jsx_runtime_1.jsx)(Document_1.Document, { linesCount: 3, highlightedLine: 0, highlightColor: theme_1.THEME.colors.success }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: result2Ref, x: 520, y: 80, opacity: 0, children: (0, jsx_runtime_1.jsx)(Document_1.Document, { linesCount: 3, highlightedLine: 1, highlightColor: theme_1.THEME.colors.success }) }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 370, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(cameraRef().scale(1.04, 40), cameraRef().position.x(5, 40), (0, core_1.chain)((0, core_1.waitFor)(1), (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), 
    // Fade in retrieved docs label
    (0, fade_1.fadeIn)(retrievedLabelRef(), 0.5), (0, core_1.waitFor)(2), 
    // Pop in all four docs
    (0, core_1.all)((0, pop_1.popIn)(doc1Ref(), 0.4), (0, core_1.chain)((0, core_1.waitFor)(2), (0, pop_1.popIn)(doc2Ref(), 0.4)), (0, core_1.chain)((0, core_1.waitFor)(2), (0, pop_1.popIn)(doc3Ref(), 0.4)), (0, core_1.chain)((0, core_1.waitFor)(2), (0, pop_1.popIn)(doc4Ref(), 0.4))), (0, core_1.waitFor)(2), 
    // Draw arrow to re-ranker
    (0, draw_1.drawIn)(arrow1Ref(), 0.5), (0, core_1.waitFor)(2), 
    // Pop in re-ranker
    (0, pop_1.popIn)(rerankerCardRef(), 0.6), (0, core_1.waitFor)(2), 
    // Slide low-scoring docs away
    (0, core_1.all)((0, slide_1.slideOutTo)(doc3Ref(), 0, 60, 0.4), (0, slide_1.slideOutTo)(doc4Ref(), 0, 80, 0.4)), (0, core_1.waitFor)(2), 
    // Draw arrow to results
    (0, draw_1.drawIn)(arrow2Ref(), 0.5), (0, core_1.waitFor)(2), 
    // Pop in final results
    (0, fade_1.fadeIn)(topNLabelRef(), 0.4), (0, core_1.all)((0, pop_1.popIn)(result1Ref(), 0.5), (0, core_1.chain)((0, core_1.waitFor)(2), (0, pop_1.popIn)(result2Ref(), 0.5))), (0, core_1.waitFor)(2), (0, fade_1.fadeIn)(captionRef(), 0.5), (0, typing_1.typeText)(captionTxt, 'A re-ranker cross-encodes query-document pairs for precision scoring, promoting the most relevant chunks to the top.', 2.8), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene23.js.map