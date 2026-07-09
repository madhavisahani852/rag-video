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
const slide_1 = require("../animations/slide");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene19', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const docCardRef = (0, core_1.createRef)();
    const metaCardRef = (0, core_1.createRef)();
    const filter1Ref = (0, core_1.createRef)();
    const filter2Ref = (0, core_1.createRef)();
    const filter3Ref = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -390, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.warning, text: 'Metadata in RAG' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: docCardRef, x: -350, y: -20, width: 320, height: 280, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'DOCUMENT CHUNK', color: theme_1.THEME.colors.primary, marginBottom: 14 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 15, fill: theme_1.THEME.colors.textMuted, text: '"...The transformer\narchitecture was\nproposed in 2017..."', textWrap: true, textAlign: 'center' })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: metaCardRef, x: 200, y: -20, width: 420, height: 280, opacity: 0, glowColor: theme_1.THEME.colors.cyan, showGlow: true, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'METADATA', color: theme_1.THEME.colors.cyan, marginBottom: 14 }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'column', gap: 10, width: '100%', children: [(0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'row', gap: 12, alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 14, fill: theme_1.THEME.colors.primary, text: 'source:' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 14, fill: theme_1.THEME.colors.text, text: '"attention_is_all_you_need.pdf"' })] }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'row', gap: 12, alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 14, fill: theme_1.THEME.colors.primary, text: 'date:' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 14, fill: theme_1.THEME.colors.text, text: '"2017-06-12"' })] }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'row', gap: 12, alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 14, fill: theme_1.THEME.colors.primary, text: 'author:' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 14, fill: theme_1.THEME.colors.text, text: '"Vaswani et al."' })] }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'row', gap: 12, alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 14, fill: theme_1.THEME.colors.primary, text: 'topic:' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 14, fill: theme_1.THEME.colors.text, text: '"NLP / Transformers"' })] })] })] }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: filter1Ref, x: -240, y: 200, opacity: 0, children: (0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'FILTER: date > 2020', color: theme_1.THEME.colors.warning }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: filter2Ref, x: 60, y: 200, opacity: 0, children: (0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'FILTER: topic = NLP', color: theme_1.THEME.colors.cyan }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: filter3Ref, x: 360, y: 200, opacity: 0, children: (0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'FILTER: source = arxiv', color: theme_1.THEME.colors.purple }) }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(cameraRef().scale(1.04, 40), cameraRef().position.y(10, 40), (0, core_1.chain)((0, core_1.waitFor)(1), (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), 
    // Pop in document and metadata cards
    (0, core_1.all)((0, pop_1.popIn)(docCardRef(), 2), (0, core_1.chain)((0, core_1.waitFor)(2), (0, slide_1.slideInFrom)(metaCardRef(), 60, 0, 2))), (0, core_1.waitFor)(2), 
    // Slide in filter badges
    (0, core_1.all)((0, slide_1.slideInFrom)(filter1Ref(), 0, 30, 2), (0, core_1.chain)((0, core_1.waitFor)(2), (0, slide_1.slideInFrom)(filter2Ref(), 0, 30, 2)), (0, core_1.chain)((0, core_1.waitFor)(2), (0, slide_1.slideInFrom)(filter3Ref(), 0, 30, 2))), (0, core_1.waitFor)(2), (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'Metadata tags each chunk with source, date, and topic — enabling pre-filtering before vector search.', 2.6), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene19.js.map