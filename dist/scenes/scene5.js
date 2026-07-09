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
const Database_1 = require("../components/Database");
const PromptBox_1 = require("../components/PromptBox");
const AnimatedArrow_1 = require("../components/AnimatedArrow");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene5', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const userCardRef = (0, core_1.createRef)();
    const retrieverCardRef = (0, core_1.createRef)();
    const dbRef = (0, core_1.createRef)();
    const promptRef = (0, core_1.createRef)();
    const llmCardRef = (0, core_1.createRef)();
    const arrowUserToRetrieverRef = (0, core_1.createRef)();
    const arrowRetrieverToDbRef = (0, core_1.createRef)();
    const arrowDbToPromptRef = (0, core_1.createRef)();
    const arrowPromptToLlmRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -400, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.primary, text: 'RAG Architecture Overview' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: userCardRef, x: -680, y: -180, width: 240, height: 140, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'USER', color: theme_1.THEME.colors.primary, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 18, fill: theme_1.THEME.colors.text, text: 'Submits Query' })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: retrieverCardRef, x: -260, y: -180, width: 240, height: 140, opacity: 0, glowColor: theme_1.THEME.colors.cyan, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'RETRIEVER', color: theme_1.THEME.colors.cyan, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 18, fill: theme_1.THEME.colors.text, text: 'Fetches Context' })] }), (0, jsx_runtime_1.jsx)(Database_1.Database, { ref: dbRef, x: -260, y: 150, opacity: 0 }), (0, jsx_runtime_1.jsx)(PromptBox_1.PromptBox, { ref: promptRef, x: 220, y: 0, opacity: 0, scale: 0.9 }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: llmCardRef, x: 680, y: 0, width: 240, height: 160, opacity: 0, glowColor: theme_1.THEME.colors.purple, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'LLM', color: theme_1.THEME.colors.purple, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 18, fill: theme_1.THEME.colors.text, text: 'Generates final\ngrounded answer', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrowUserToRetrieverRef, points: [[-560, -180], [-380, -180]], glowColor: theme_1.THEME.colors.primary }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrowRetrieverToDbRef, points: [[-260, -110], [-260, 95]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrowDbToPromptRef, points: [[-170, 150], [50, 150], [50, 115]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrowPromptToLlmRef, points: [[445, 0], [560, 0]], glowColor: theme_1.THEME.colors.purple }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Slow camera drift
    cameraRef().scale(1.04, 20), cameraRef().position.y(-10, 20), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(1), 
    // Fade in Title
    (0, fade_1.fadeIn)(titleRef(), 2), (0, core_1.waitFor)(2), 
    // Pop in User and Retriever
    (0, core_1.all)((0, pop_1.popIn)(userCardRef(), 2), (0, pop_1.popIn)(retrieverCardRef(), 2)), 
    // Draw User -> Retriever
    (0, draw_1.drawIn)(arrowUserToRetrieverRef(), 2), (0, core_1.waitFor)(2), 
    // Pop DB and connect Retriever -> DB
    (0, core_1.all)((0, pop_1.popIn)(dbRef(), 2), (0, draw_1.drawIn)(arrowRetrieverToDbRef(), 2)), (0, core_1.waitFor)(2), 
    // Pop Prompt Box and connect DB -> Prompt
    (0, core_1.all)((0, pop_1.popIn)(promptRef(), 2), (0, draw_1.drawIn)(arrowDbToPromptRef(), 2)), (0, core_1.waitFor)(2), 
    // Pop LLM and connect Prompt -> LLM
    (0, core_1.all)((0, pop_1.popIn)(llmCardRef(), 2), (0, draw_1.drawIn)(arrowPromptToLlmRef(), 2)), (0, core_1.waitFor)(2), 
    // Fade in Caption
    (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'RAG intercepts user queries, retrieves relevant facts from a database, and augments the prompt before generation.', 2.8), (0, core_1.waitFor)(5)));
});
//# sourceMappingURL=scene5.js.map