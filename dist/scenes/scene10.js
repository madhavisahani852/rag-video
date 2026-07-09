"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Card_1 = require("../components/Card");
const PromptBox_1 = require("../components/PromptBox");
const Caption_1 = require("../components/Caption");
const Badge_1 = require("../components/Badge");
const AnimatedArrow_1 = require("../components/AnimatedArrow");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene10', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const questionCardRef = (0, core_1.createRef)();
    const contextCardRef = (0, core_1.createRef)();
    const arrow1Ref = (0, core_1.createRef)();
    const arrow2Ref = (0, core_1.createRef)();
    const promptBoxContainerRef = (0, core_1.createRef)();
    const promptBoxRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -400, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.primary, text: 'Prompt Augmentation' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: questionCardRef, x: -450, y: -120, width: 320, height: 140, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'QUESTION', color: theme_1.THEME.colors.primary, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 18, fill: theme_1.THEME.colors.text, text: '“What is RAG?”' })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: contextCardRef, x: -450, y: 120, width: 320, height: 140, opacity: 0, glowColor: theme_1.THEME.colors.cyan, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'RETRIEVED CONTEXT', color: theme_1.THEME.colors.cyan, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.textMuted, text: '“RAG is a pipeline combining retriever models with LLMs.”', textWrap: true })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow1Ref, points: [[-270, -120], [-50, -120], [0, -50]], glowColor: theme_1.THEME.colors.primary }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow2Ref, points: [[-270, 120], [-50, 120], [0, 50]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: promptBoxContainerRef, x: 280, y: 0, opacity: 0, children: (0, jsx_runtime_1.jsx)(PromptBox_1.PromptBox, { ref: promptBoxRef, questionText: 'What is RAG?', contextText: 'RAG is a pipeline combining retriever models with LLMs.', glow: false }) }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Slow camera drift
    cameraRef().scale(1.04, 20), cameraRef().position.y(-10, 20), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(1), 
    // Fade in Title
    (0, fade_1.fadeIn)(titleRef(), 0.6), 
    // Pop in original question and context cards
    (0, core_1.all)((0, pop_1.popIn)(questionCardRef(), 0.6), (0, pop_1.popIn)(contextCardRef(), 0.6)), (0, core_1.waitFor)(2), 
    // Pop in target prompt assembler
    (0, pop_1.popIn)(promptBoxContainerRef(), 0.8), (0, core_1.waitFor)(2), 
    // Draw merging arrows
    (0, core_1.all)((0, draw_1.drawIn)(arrow1Ref(), 0.7), (0, draw_1.drawIn)(arrow2Ref(), 0.7)), (0, core_1.waitFor)(2), 
    // Make target prompt glow
    (0, core_1.all)(promptBoxRef().stroke(theme_1.THEME.colors.primary, 0.4), promptBoxRef().shadowColor(theme_1.THEME.colors.primary, 0.4), promptBoxRef().shadowBlur(25, 0.4)), (0, core_1.waitFor)(2), 
    // Caption
    (0, fade_1.fadeIn)(captionRef(), 0.5), (0, typing_1.typeText)(captionTxt, 'We inject the retrieved context alongside the user question, packing them into an augmented prompt.', 2.8), (0, core_1.waitFor)(5)));
});
//# sourceMappingURL=scene10.js.map