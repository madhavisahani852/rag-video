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
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene4', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const userCardRef = (0, core_1.createRef)();
    const arrow1Ref = (0, core_1.createRef)();
    const llmCardRef = (0, core_1.createRef)();
    const arrow2Ref = (0, core_1.createRef)();
    const answerCardRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -400, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.text, text: 'Traditional LLM Pipeline' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: userCardRef, x: -500, y: 0, width: 280, height: 180, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'USER', color: theme_1.THEME.colors.primary, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 22, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Asks a Question', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow1Ref, points: [[-330, 0], [-180, 0]], glowColor: theme_1.THEME.colors.primary }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: llmCardRef, x: 0, y: 0, width: 280, height: 180, opacity: 0, glowColor: theme_1.THEME.colors.purple, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'LLM', color: theme_1.THEME.colors.purple, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Base Model\n(Static weights)', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow2Ref, points: [[180, 0], [330, 0]], glowColor: theme_1.THEME.colors.purple }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: answerCardRef, x: 500, y: 0, width: 280, height: 180, opacity: 0, glowColor: theme_1.THEME.colors.success, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'ANSWER', color: theme_1.THEME.colors.success, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 22, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Generates Response', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Camera pan/zoom
    cameraRef().scale(1.04, 40), cameraRef().position.y(-10, 40), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(1), 
    // Fade in Title
    (0, fade_1.fadeIn)(titleRef(), 2), (0, core_1.waitFor)(2), 
    // Pop in User Card
    (0, pop_1.popIn)(userCardRef(), 2), (0, core_1.waitFor)(2), 
    // Draw Arrow 1
    (0, draw_1.drawIn)(arrow1Ref(), 2), (0, core_1.waitFor)(2), 
    // Pop in LLM Card
    (0, pop_1.popIn)(llmCardRef(), 2), (0, core_1.waitFor)(2), 
    // Draw Arrow 2
    (0, draw_1.drawIn)(arrow2Ref(), 2), (0, core_1.waitFor)(2), 
    // Pop in Answer Card
    (0, pop_1.popIn)(answerCardRef(), 2), (0, core_1.waitFor)(2), 
    // Fade in Caption
    (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'In traditional systems, questions go directly to the model, which only knows what it learned in training.', 2.8), (0, core_1.waitFor)(5)));
});
//# sourceMappingURL=scene4.js.map