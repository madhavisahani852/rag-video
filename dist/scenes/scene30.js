"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Card_1 = require("../components/Card");
const Badge_1 = require("../components/Badge");
const Database_1 = require("../components/Database");
const Document_1 = require("../components/Document");
const PromptBox_1 = require("../components/PromptBox");
const AnimatedArrow_1 = require("../components/AnimatedArrow");
const Caption_1 = require("../components/Caption");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene30', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    // Stage 1 — Documents
    const docContainerRef = (0, core_1.createRef)();
    const arrow1Ref = (0, core_1.createRef)();
    // Stage 2 — Embed
    const embedCardRef = (0, core_1.createRef)();
    const arrow2Ref = (0, core_1.createRef)();
    // Stage 3 — Vector DB
    const vectorRef = (0, core_1.createRef)();
    const dbContainerRef = (0, core_1.createRef)();
    const arrow3Ref = (0, core_1.createRef)();
    // Stage 4 — Query / Search
    const queryCardRef = (0, core_1.createRef)();
    const arrow4Ref = (0, core_1.createRef)();
    // Stage 5 — Prompt
    const promptContainerRef = (0, core_1.createRef)();
    const arrow5Ref = (0, core_1.createRef)();
    // Stage 6 — LLM
    const llmCardRef = (0, core_1.createRef)();
    // Final answer
    const answerCardRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -400, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 44, fontWeight: 800, fill: theme_1.THEME.colors.primary, text: 'End-to-End RAG Summary' }) }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: docContainerRef, x: -700, y: -130, opacity: 0, children: (0, jsx_runtime_1.jsx)(Document_1.Document, { linesCount: 4, highlightedLine: 1, highlightColor: theme_1.THEME.colors.primary }) }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow1Ref, points: [[-620, -130], [-530, -130]], glowColor: theme_1.THEME.colors.primary }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: embedCardRef, x: -390, y: -130, width: 200, height: 110, opacity: 0, glowColor: theme_1.THEME.colors.cyan, showGlow: true, alignItems: 'center', justifyContent: 'center', children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'EMBED', color: theme_1.THEME.colors.cyan, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: 'Encoder NN' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow2Ref, points: [[-280, -130], [-190, -130]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: dbContainerRef, x: -80, y: -130, opacity: 0, scale: 0.65, children: (0, jsx_runtime_1.jsx)(Database_1.Database, { label: 'VECTOR DB', glow: true }) }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow3Ref, points: [[-80, -75], [-80, 50], [240, 50]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: queryCardRef, x: -700, y: 100, width: 200, height: 110, opacity: 0, glowColor: theme_1.THEME.colors.primary, showGlow: true, alignItems: 'center', justifyContent: 'center', children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'QUERY', color: theme_1.THEME.colors.primary, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: 'User Question', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow4Ref, points: [[-590, 100], [160, 100]], glowColor: theme_1.THEME.colors.primary }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: promptContainerRef, x: 370, y: 80, opacity: 0, scale: 0.6, children: (0, jsx_runtime_1.jsx)(PromptBox_1.PromptBox, { questionText: 'What is RAG?', contextText: 'Retrieved: RAG combines retrieval with generation...', glow: true }) }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow5Ref, points: [[570, 80], [660, 80]], glowColor: theme_1.THEME.colors.success }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: llmCardRef, x: 780, y: 80, width: 180, height: 110, opacity: 0, glowColor: theme_1.THEME.colors.purple, showGlow: true, alignItems: 'center', justifyContent: 'center', children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'LLM', color: theme_1.THEME.colors.purple, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: 'Generation', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(Card_1.Card, { ref: answerCardRef, x: 0, y: 270, width: 700, height: 100, opacity: 0, glowColor: theme_1.THEME.colors.success, showGlow: true, alignItems: 'center', justifyContent: 'center', children: (0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'ACCURATE · GROUNDED · VERIFIED ANSWER', color: theme_1.THEME.colors.success }) }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 420, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Camera slowly zooms and pans across the full pipeline
    cameraRef().scale(1.05, 40), cameraRef().position.y(10, 40), (0, core_1.chain)((0, core_1.waitFor)(1), 
    // Title
    (0, fade_1.fadeIn)(titleRef(), 0.7), (0, core_1.waitFor)(2), 
    // Ingestion path
    (0, pop_1.popIn)(docContainerRef(), 4), (0, draw_1.drawIn)(arrow1Ref(), 4), (0, pop_1.popIn)(embedCardRef(), 4), (0, draw_1.drawIn)(arrow2Ref(), 4), (0, pop_1.popIn)(dbContainerRef(), 4, 0.65), (0, core_1.waitFor)(4), 
    // Query path
    (0, pop_1.popIn)(queryCardRef(), 4), (0, draw_1.drawIn)(arrow4Ref(), 4), (0, draw_1.drawIn)(arrow3Ref(), 4), 
    // Prompt + LLM
    (0, pop_1.popIn)(promptContainerRef(), 4, 0.6), (0, draw_1.drawIn)(arrow5Ref(), 4), (0, pop_1.popIn)(llmCardRef(), 4), (0, core_1.waitFor)(4), 
    // Pulse the DB as the connection point
    // Final answer
    (0, pop_1.popIn)(answerCardRef(), 4), (0, core_1.waitFor)(2), (0, fade_1.fadeIn)(captionRef(), 0.5), (0, typing_1.typeText)(captionTxt, 'RAG: Documents → Embeddings → Vector DB → Retrieval → Augmented Prompt → Grounded LLM Answer. That\'s the full picture!', 3.2), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene30.js.map