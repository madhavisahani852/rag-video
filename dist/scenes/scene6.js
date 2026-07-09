"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Card_1 = require("../components/Card");
const Document_1 = require("../components/Document");
const Caption_1 = require("../components/Caption");
const Badge_1 = require("../components/Badge");
const AnimatedArrow_1 = require("../components/AnimatedArrow");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene6', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const originalDocRef = (0, core_1.createRef)();
    const sourceDocRef = (0, core_1.createRef)();
    const dimLabelRef = (0, core_1.createRef)();
    const chunk1Ref = (0, core_1.createRef)();
    const chunk2Ref = (0, core_1.createRef)();
    const chunk3Ref = (0, core_1.createRef)();
    const arrow1Ref = (0, core_1.createRef)();
    const arrow2Ref = (0, core_1.createRef)();
    const arrow3Ref = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -400, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.text, text: 'Document Chunking' }) }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: originalDocRef, x: -400, y: 0, opacity: 0, alignItems: 'center', children: ["ref=", sourceDocRef, " x=", 0, " y=", 210, " opacity=", 0, " layout direction=", 'row', " alignItems=", 'center', " gap=", 20, (0, jsx_runtime_1.jsx)(Document_1.Document, { linesCount: 5, highlightedLine: -1 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.textMuted }), (0, jsx_runtime_1.jsx)(Document_1.Document, { linesCount: 8 })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: chunk1Ref, x: 300, y: -160, width: 350, height: 125, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'CHUNK 1 (Intro)', color: theme_1.THEME.colors.cyan, marginBottom: 14 }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { layout: true, direction: 'row', gap: 6, width: '100%', children: (0, jsx_runtime_1.jsx)(_2d_1.Rect, { width: '100%', height: 8, radius: 4, fill: theme_1.THEME.colors.textMuted }) })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: chunk2Ref, x: 300, y: 0, width: 350, height: 125, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'CHUNK 2 (Details)', color: theme_1.THEME.colors.cyan, marginBottom: 14 }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { layout: true, direction: 'row', gap: 6, width: '100%', children: (0, jsx_runtime_1.jsx)(_2d_1.Rect, { width: '90%', height: 8, radius: 4, fill: theme_1.THEME.colors.textMuted }) })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: chunk3Ref, x: 300, y: 160, width: 350, height: 125, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'CHUNK 3 (Summary)', color: theme_1.THEME.colors.cyan, marginBottom: 14 }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { layout: true, direction: 'row', gap: 6, width: '100%', children: (0, jsx_runtime_1.jsx)(_2d_1.Rect, { width: '80%', height: 8, radius: 4, fill: theme_1.THEME.colors.textMuted }) })] }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow1Ref, points: [[-220, 0], [-100, 0], [100, -160]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow2Ref, points: [[-220, 0], [100, 0]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrow3Ref, points: [[-220, 0], [-100, 0], [100, 160]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Slow camera drift
    cameraRef().scale(1.04, 40), cameraRef().position.x(-10, 40), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(1), 
    // Fade in Title
    (0, fade_1.fadeIn)(titleRef(), 2), (0, core_1.waitFor)(2), 
    // Pop in original document
    (0, pop_1.popIn)(originalDocRef(), 2), (0, core_1.waitFor)(2), 
    // Draw all arrows in parallel to represent splitting
    (0, core_1.all)((0, draw_1.drawIn)(arrow1Ref(), 2), (0, draw_1.drawIn)(arrow2Ref(), 2), (0, draw_1.drawIn)(arrow3Ref(), 2)), (0, core_1.waitFor)(2), 
    // Pop in Chunk cards
    (0, core_1.all)((0, pop_1.popIn)(chunk1Ref(), 2), (0, pop_1.popIn)(chunk2Ref(), 2), (0, pop_1.popIn)(chunk3Ref(), 2)), (0, core_1.waitFor)(2), 
    // Caption
    (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'We chunk documents into smaller paragraphs to make sure RAG retrieves highly specific context.', 2.8), (0, core_1.waitFor)(5)));
});
//# sourceMappingURL=scene6.js.map