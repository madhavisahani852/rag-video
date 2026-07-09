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
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene20', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const denseCardRef = (0, core_1.createRef)();
    const sparseCardRef = (0, core_1.createRef)();
    const hybridCardRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -390, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.primary, text: 'Retriever Types' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: denseCardRef, x: -420, y: 10, width: 340, height: 300, opacity: 0, glowColor: theme_1.THEME.colors.cyan, showGlow: true, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'DENSE', color: theme_1.THEME.colors.cyan, marginBottom: 16 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Vector Embeddings', textAlign: 'center', marginBottom: 12 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 15, fill: theme_1.THEME.colors.textMuted, text: 'Uses neural networks to encode queries and documents into dense vectors for semantic matching.', textWrap: true, textAlign: 'center' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fontWeight: 700, fill: theme_1.THEME.colors.cyan, text: 'e.g. DPR, E5, BGE', marginTop: 12 })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: sparseCardRef, x: 0, y: 10, width: 340, height: 300, opacity: 0, glowColor: theme_1.THEME.colors.warning, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'SPARSE', color: theme_1.THEME.colors.warning, marginBottom: 16 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Keyword Matching', textAlign: 'center', marginBottom: 12 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 15, fill: theme_1.THEME.colors.textMuted, text: 'Uses TF-IDF or BM25 to score documents by exact keyword frequency and inverse rarity.', textWrap: true, textAlign: 'center' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fontWeight: 700, fill: theme_1.THEME.colors.warning, text: 'e.g. BM25, TF-IDF', marginTop: 12 })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: hybridCardRef, x: 420, y: 10, width: 340, height: 300, opacity: 0, glowColor: theme_1.THEME.colors.success, showGlow: true, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'HYBRID', color: theme_1.THEME.colors.success, marginBottom: 16 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Best of Both', textAlign: 'center', marginBottom: 12 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 15, fill: theme_1.THEME.colors.textMuted, text: 'Merges dense and sparse results with Reciprocal Rank Fusion for higher precision.', textWrap: true, textAlign: 'center' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fontWeight: 700, fill: theme_1.THEME.colors.success, text: 'e.g. RRF, LangChain', marginTop: 12 })] }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 380, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(cameraRef().scale(1.04, 40), cameraRef().position.y(-10, 40), (0, core_1.chain)((0, core_1.waitFor)(1), (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), 
    // Pop in all three cards with stagger
    (0, core_1.all)((0, pop_1.popIn)(denseCardRef(), 2), (0, core_1.chain)((0, core_1.waitFor)(4), (0, pop_1.popIn)(sparseCardRef(), 2)), (0, core_1.chain)((0, core_1.waitFor)(6), (0, pop_1.popIn)(hybridCardRef(), 2))), (0, core_1.waitFor)(2), (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'Dense retrievers understand meaning; sparse retrievers match keywords; hybrid combines both for superior recall.', 2.8), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene20.js.map