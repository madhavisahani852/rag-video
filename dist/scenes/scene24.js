"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Card_1 = require("../components/Card");
const Badge_1 = require("../components/Badge");
const PromptBox_1 = require("../components/PromptBox");
const Caption_1 = require("../components/Caption");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const slide_1 = require("../animations/slide");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene24', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const systemCardRef = (0, core_1.createRef)();
    const promptBoxRef = (0, core_1.createRef)();
    const tipsCardRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -390, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.primary, text: 'Prompt Engineering in RAG' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: systemCardRef, x: -500, y: -10, width: 320, height: 280, opacity: 0, glowColor: theme_1.THEME.colors.purple, showGlow: true, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'SYSTEM PROMPT', color: theme_1.THEME.colors.purple, marginBottom: 14 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 13, fill: theme_1.THEME.colors.textMuted, text: 'You are a helpful AI assistant.\nAnswer ONLY using the\nprovided context below.\nIf unsure, say "I don\'t know".', textWrap: true })] }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: promptBoxRef, x: 60, y: -10, opacity: 0, children: (0, jsx_runtime_1.jsx)(PromptBox_1.PromptBox, { questionText: 'How does RAG reduce hallucination?', contextText: 'RAG grounds the model by injecting retrieved facts directly into the prompt...', glow: true }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: tipsCardRef, x: 520, y: -10, width: 300, height: 280, opacity: 0, glowColor: theme_1.THEME.colors.success, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'BEST PRACTICES', color: theme_1.THEME.colors.success, marginBottom: 14 }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'column', gap: 10, children: [(0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: '✓  Cite sources in context' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: '✓  Limit context window size' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: '✓  Instruct to say "unknown"' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: '✓  Separate context blocks' }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: '✓  Few-shot examples help' })] })] }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 360, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(cameraRef().scale(1.04, 40), cameraRef().position.y(-5, 40), (0, core_1.chain)((0, core_1.waitFor)(1), (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), 
    // Slide in system card from left
    (0, slide_1.slideInFrom)(systemCardRef(), -60, 0, 0.6), (0, core_1.waitFor)(8), 
    // Pop in prompt box center
    (0, pop_1.popIn)(promptBoxRef(), 0.7), (0, core_1.waitFor)(8), 
    // Slide in tips card from right
    (0, slide_1.slideInFrom)(tipsCardRef(), 60, 0, 0.6), (0, core_1.waitFor)(8), (0, fade_1.fadeIn)(captionRef(), 0.5), (0, typing_1.typeText)(captionTxt, 'A well-crafted system prompt tells the model to ground answers in retrieved context and admit uncertainty.', 2.6), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene24.js.map