"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Card_1 = require("../components/Card");
const Caption_1 = require("../components/Caption");
const Badge_1 = require("../components/Badge");
const AnimatedArrow_1 = require("../components/AnimatedArrow");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const shake_1 = require("../animations/shake");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene2', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const userCardRef = (0, core_1.createRef)();
    const arrow1Ref = (0, core_1.createRef)();
    const llmCardRef = (0, core_1.createRef)();
    const arrow2Ref = (0, core_1.createRef)();
    const answerCardRef = (0, core_1.createRef)();
    const answerTextRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    const queryTextRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -350, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.error, text: 'The Problem: Hallucinations' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: userCardRef, x: -450, y: -100, width: 350, height: 180, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'USER QUERY', color: theme_1.THEME.colors.primary, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { ref: queryTextRef, fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fill: theme_1.THEME.colors.text, text: '', textWrap: true })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow1Ref, points: [[-275, -100], [-150, -100]], glowColor: theme_1.THEME.colors.primary }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: llmCardRef, x: 0, y: -100, width: 300, height: 180, opacity: 0, glowColor: theme_1.THEME.colors.purple, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'BASE LLM', color: theme_1.THEME.colors.purple, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 18, fill: theme_1.THEME.colors.textMuted, text: 'Processing static parameters...', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow2Ref, points: [[150, -100], [275, -100]], glowColor: theme_1.THEME.colors.purple }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: answerCardRef, x: 450, y: -100, width: 350, height: 180, opacity: 0, glowColor: theme_1.THEME.colors.error, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'HALLUCINATED ANSWER', color: theme_1.THEME.colors.error, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { ref: answerTextRef, fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fill: theme_1.THEME.colors.error, text: '', textWrap: true })] }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Slow camera drift
    cameraRef().scale(1.04, 40), cameraRef().position.x(-10, 40), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(1), 
    // Fade in Scene Title (placed at y=-350 for safety)
    (0, fade_1.fadeIn)(titleRef(), 2), (0, core_1.waitFor)(2), 
    // Pop in Query Card and type search question
    (0, core_1.all)((0, pop_1.popIn)(userCardRef(), 2), (0, typing_1.typeText)(queryTextRef(), 'Who won the soccer world tournament in 2026?', 2.0)), (0, core_1.waitFor)(2), 
    // Draw Arrow 1 to LLM and pop LLM Card
    (0, core_1.chain)((0, draw_1.drawIn)(arrow1Ref(), 2), (0, pop_1.popIn)(llmCardRef(), 2)), (0, core_1.waitFor)(2), 
    // Draw Arrow 2 to Answer and pop Answer Card
    (0, core_1.chain)((0, draw_1.drawIn)(arrow2Ref(), 2), (0, core_1.all)((0, pop_1.popIn)(answerCardRef(), 2), (0, typing_1.typeText)(answerTextRef(), 'FC Solar won the world tournament (Incorrect Fact!)', 2.0))), (0, core_1.waitFor)(2), 
    // Shake the answer card to show it is a hallucinated response
    (0, shake_1.shakeNode)(answerCardRef(), 20, 2), 
    // Fade in bottom caption explaining hallucination
    (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'When LLMs rely only on training data, they confidently hallucinate facts they do not know.', 2.5), (0, core_1.waitFor)(10)));
});
//# sourceMappingURL=scene2.js.map