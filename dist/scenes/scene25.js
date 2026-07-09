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
const AnimatedArrow_1 = require("../components/AnimatedArrow");
const Caption_1 = require("../components/Caption");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene25', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const queryCardRef = (0, core_1.createRef)();
    const arrow1Ref = (0, core_1.createRef)();
    const embedCardRef = (0, core_1.createRef)();
    const arrow2Ref = (0, core_1.createRef)();
    const dbContainerRef = (0, core_1.createRef)();
    const arrow3Ref = (0, core_1.createRef)();
    const rerankerCardRef = (0, core_1.createRef)();
    const arrow4Ref = (0, core_1.createRef)();
    const promptCardRef = (0, core_1.createRef)();
    const arrow5Ref = (0, core_1.createRef)();
    const llmCardRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -390, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 44, fontWeight: 800, fill: theme_1.THEME.colors.primary, text: 'Complete Retrieval Pipeline' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: queryCardRef, x: -750, y: 0, width: 160, height: 110, opacity: 0, alignItems: 'center', justifyContent: 'center', children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'QUERY', color: theme_1.THEME.colors.primary, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: 'User Input', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow1Ref, points: [[-660, 0], [-580, 0]], glowColor: theme_1.THEME.colors.primary }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: embedCardRef, x: -480, y: 0, width: 160, height: 110, opacity: 0, glowColor: theme_1.THEME.colors.cyan, alignItems: 'center', justifyContent: 'center', children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'EMBED', color: theme_1.THEME.colors.cyan, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: 'Encoder NN', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow2Ref, points: [[-390, 0], [-310, 0]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: dbContainerRef, x: -200, y: 0, opacity: 0, scale: 0.72, children: (0, jsx_runtime_1.jsx)(Database_1.Database, { label: 'VECTOR DB', glow: true }) }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow3Ref, points: [[-100, 0], [20, 0]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: rerankerCardRef, x: 140, y: 0, width: 180, height: 110, opacity: 0, glowColor: theme_1.THEME.colors.purple, alignItems: 'center', justifyContent: 'center', children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'RE-RANK', color: theme_1.THEME.colors.purple, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: 'Cross-Encoder', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow4Ref, points: [[240, 0], [340, 0]], glowColor: theme_1.THEME.colors.purple }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: promptCardRef, x: 460, y: 0, width: 180, height: 110, opacity: 0, glowColor: theme_1.THEME.colors.warning, alignItems: 'center', justifyContent: 'center', children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'PROMPT', color: theme_1.THEME.colors.warning, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: 'Augmented', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow5Ref, points: [[560, 0], [650, 0]], glowColor: theme_1.THEME.colors.success }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: llmCardRef, x: 760, y: 0, width: 160, height: 110, opacity: 0, glowColor: theme_1.THEME.colors.success, showGlow: true, alignItems: 'center', justifyContent: 'center', children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'LLM', color: theme_1.THEME.colors.success, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.success, text: 'Final Answer', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 360, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(cameraRef().scale(1.04, 40), cameraRef().position.y(10, 40), (0, core_1.chain)((0, core_1.waitFor)(1), (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), 
    // Animate pipeline stage by stage
    (0, pop_1.popIn)(queryCardRef(), 5), (0, draw_1.drawIn)(arrow1Ref(), 1), (0, pop_1.popIn)(embedCardRef(), 5), (0, draw_1.drawIn)(arrow2Ref(), 1), (0, pop_1.popIn)(dbContainerRef(), 5, 0.72), (0, draw_1.drawIn)(arrow3Ref(), 1), (0, pop_1.popIn)(rerankerCardRef(), 5), (0, draw_1.drawIn)(arrow4Ref(), 1), (0, pop_1.popIn)(promptCardRef(), 5), (0, draw_1.drawIn)(arrow5Ref(), 1), (0, pop_1.popIn)(llmCardRef(), 5), (0, core_1.waitFor)(2), (0, fade_1.fadeIn)(captionRef(), 0.5), (0, typing_1.typeText)(captionTxt, 'The full retrieval pipeline: Query → Embed → VectorDB → Re-rank → Augment Prompt → LLM Answer.', 2.6), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene25.js.map