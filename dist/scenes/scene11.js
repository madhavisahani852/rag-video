"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Card_1 = require("../components/Card");
const Database_1 = require("../components/Database");
const Document_1 = require("../components/Document");
const Vector_1 = require("../components/Vector");
const PromptBox_1 = require("../components/PromptBox");
const Caption_1 = require("../components/Caption");
const Badge_1 = require("../components/Badge");
const AnimatedArrow_1 = require("../components/AnimatedArrow");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene11', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const userCardRef = (0, core_1.createRef)();
    const vectorCardRef = (0, core_1.createRef)();
    const dbContainerRef = (0, core_1.createRef)();
    const docContainerRef = (0, core_1.createRef)();
    const promptContainerRef = (0, core_1.createRef)();
    const llmCardRef = (0, core_1.createRef)();
    const arrow1Ref = (0, core_1.createRef)();
    const arrow2Ref = (0, core_1.createRef)();
    const arrow3Ref = (0, core_1.createRef)();
    const arrow4Ref = (0, core_1.createRef)();
    const arrow5Ref = (0, core_1.createRef)();
    const successBadgeRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -400, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.primary, text: 'Full End-to-End RAG Workflow' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: userCardRef, x: -750, y: 0, width: 160, height: 120, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'QUERY', color: theme_1.THEME.colors.primary, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fill: theme_1.THEME.colors.text, text: 'User Question' })] }), (0, jsx_runtime_1.jsx)(Vector_1.Vector, { ref: vectorCardRef, x: -480, y: 0, opacity: 0, scale: 0.7, values: [0.82, -0.41, 0.09] }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: dbContainerRef, x: -180, y: 0, opacity: 0, scale: 0.7, children: (0, jsx_runtime_1.jsx)(Database_1.Database, { label: 'V-DB' }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: docContainerRef, x: 120, y: 0, opacity: 0, scale: 0.65, children: (0, jsx_runtime_1.jsx)(Document_1.Document, { highlightedLine: 1 }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: promptContainerRef, x: 420, y: 0, opacity: 0, scale: 0.55, children: (0, jsx_runtime_1.jsx)(PromptBox_1.PromptBox, { questionText: 'Query?', contextText: 'Facts...' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: llmCardRef, x: 740, y: 0, width: 180, height: 120, opacity: 0, glowColor: theme_1.THEME.colors.purple, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'LLM', color: theme_1.THEME.colors.purple, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fill: theme_1.THEME.colors.text, text: 'Grounded Answer' })] }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: successBadgeRef, x: 740, y: 110, opacity: 0, children: (0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'ACCURATE & FRESH', color: theme_1.THEME.colors.success }) }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow1Ref, points: [[-660, 0], [-570, 0]], glowColor: theme_1.THEME.colors.primary }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow2Ref, points: [[-390, 0], [-270, 0]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow3Ref, points: [[-90, 0], [40, 0]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow4Ref, points: [[200, 0], [290, 0]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow5Ref, points: [[550, 0], [640, 0]], glowColor: theme_1.THEME.colors.purple }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Slow camera drift
    cameraRef().scale(1.04, 15), cameraRef().position.y(-10, 15), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(1), 
    // Fade in Title
    (0, fade_1.fadeIn)(titleRef(), 0.6), 
    // Pop User Card
    (0, pop_1.popIn)(userCardRef(), 0.5), (0, draw_1.drawIn)(arrow1Ref(), 0.4), 
    // Pop Vector
    (0, pop_1.popIn)(vectorCardRef(), 0.5, 0.7), (0, draw_1.drawIn)(arrow2Ref(), 0.4), 
    // Pop DB
    (0, pop_1.popIn)(dbContainerRef(), 0.5, 0.7), (0, draw_1.drawIn)(arrow3Ref(), 0.4), 
    // Pop Document
    (0, pop_1.popIn)(docContainerRef(), 0.5, 0.65), (0, draw_1.drawIn)(arrow4Ref(), 0.4), 
    // Pop Prompt
    (0, pop_1.popIn)(promptContainerRef(), 0.5, 0.55), (0, draw_1.drawIn)(arrow5Ref(), 0.4), 
    // Pop LLM
    (0, pop_1.popIn)(llmCardRef(), 0.5), (0, core_1.waitFor)(2), 
    // Pop Success badge below LLM to represent verified answer
    (0, pop_1.popIn)(successBadgeRef(), 0.5), (0, core_1.waitFor)(2), 
    // Caption
    (0, fade_1.fadeIn)(captionRef(), 0.5), (0, typing_1.typeText)(captionTxt, 'By connecting query embeddings directly to a vector database, RAG grounds the LLM in real-world facts.', 2.8), (0, core_1.waitFor)(10)));
});
//# sourceMappingURL=scene11.js.map