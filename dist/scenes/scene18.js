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
const Caption_1 = require("../components/Caption");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const slide_1 = require("../animations/slide");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene18', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const sourceDocRef = (0, core_1.createRef)();
    const fixedCardRef = (0, core_1.createRef)();
    const semanticCardRef = (0, core_1.createRef)();
    const slidingCardRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -390, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.warning, text: 'Chunking Strategies' }) }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: sourceDocRef, x: 0, y: -210, opacity: 0, layout: true, direction: 'row', alignItems: 'center', gap: 20, children: [(0, jsx_runtime_1.jsx)(Document_1.Document, { linesCount: 5, highlightedLine: -1 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.textMuted, text: 'Full Source Document\n→  split into chunks' })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: fixedCardRef, x: -420, y: 80, width: 300, height: 220, opacity: 0, glowColor: theme_1.THEME.colors.primary, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'FIXED SIZE', color: theme_1.THEME.colors.primary, marginBottom: 12 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Split every N tokens', marginBottom: 8 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.textMuted, text: 'e.g. 512 tokens per chunk\n+ optional overlap', textAlign: 'center' })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: semanticCardRef, x: 0, y: 80, width: 300, height: 220, opacity: 0, glowColor: theme_1.THEME.colors.cyan, showGlow: true, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'SEMANTIC', color: theme_1.THEME.colors.cyan, marginBottom: 12 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Split by meaning', marginBottom: 8 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.textMuted, text: 'Paragraphs, sentences,\nor topic boundaries', textAlign: 'center' })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: slidingCardRef, x: 420, y: 80, width: 300, height: 220, opacity: 0, glowColor: theme_1.THEME.colors.purple, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'SLIDING WINDOW', color: theme_1.THEME.colors.purple, marginBottom: 12 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Overlapping windows', marginBottom: 8 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.textMuted, text: 'Preserves context\nacross chunk boundaries', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 380, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(cameraRef().scale(1.04, 40), cameraRef().position.x(10, 40), (0, core_1.chain)((0, core_1.waitFor)(1), (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), (0, slide_1.slideInFrom)(sourceDocRef(), 0, -40, 0.6), (0, core_1.waitFor)(2), 
    // Pop in three strategy cards
    (0, core_1.all)((0, pop_1.popIn)(fixedCardRef(), 2), (0, core_1.chain)((0, core_1.waitFor)(2), (0, pop_1.popIn)(semanticCardRef(), 2)), (0, core_1.chain)((0, core_1.waitFor)(2), (0, pop_1.popIn)(slidingCardRef(), 2))), (0, core_1.waitFor)(2), (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'Chunking breaks documents into manageable pieces. Semantic chunking preserves meaning; sliding windows preserve context.', 2.8), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene18.js.map