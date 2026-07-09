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
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene3', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const timelineGroupRef = (0, core_1.createRef)();
    const timelineLineRef = (0, core_1.createRef)();
    const year2023Ref = (0, core_1.createRef)();
    const year2024Ref = (0, core_1.createRef)();
    const cutoffRef = (0, core_1.createRef)(); // Cutoff warning card
    const event2026Ref = (0, core_1.createRef)(); // Event card
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -400, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.warning, text: 'The Problem: Knowledge Cutoff' }) }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: timelineGroupRef, width: 1200, height: 300, y: -50, children: [(0, jsx_runtime_1.jsx)(_2d_1.Line, { ref: timelineLineRef, points: [[-500, 0], [500, 0]], lineWidth: 6, stroke: theme_1.THEME.colors.textDark, end: 0 }), (0, jsx_runtime_1.jsx)(_2d_1.Circle, { ref: year2023Ref, x: -350, y: 0, size: 24, fill: theme_1.THEME.colors.textMuted, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { y: 40, fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.textMuted, text: '2023' }) }), (0, jsx_runtime_1.jsx)(_2d_1.Circle, { ref: year2024Ref, x: -100, y: 0, size: 24, fill: theme_1.THEME.colors.textMuted, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { y: 40, fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.textMuted, text: '2024' }) }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: cutoffRef, x: 150, y: -120, width: 260, height: 130, opacity: 0, glowColor: theme_1.THEME.colors.warning, showGlow: true, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'CUTOFF DATE', color: theme_1.THEME.colors.warning, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 24, fontWeight: 800, fill: theme_1.THEME.colors.text, text: 'January 2025', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(_2d_1.Circle, { x: 150, y: 0, size: 32, fill: theme_1.THEME.colors.warning, shadowColor: theme_1.THEME.colors.warning, shadowBlur: 15 }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: event2026Ref, x: 450, y: 120, width: 260, height: 130, opacity: 0, glowColor: theme_1.THEME.colors.error, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'FUTURE EVENT', color: theme_1.THEME.colors.error, marginBottom: 6 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 700, fill: theme_1.THEME.colors.textMuted, text: 'New Event (2026)', textAlign: 'center' })] }), (0, jsx_runtime_1.jsx)(_2d_1.Circle, { x: 450, y: 0, size: 24, fill: theme_1.THEME.colors.textDark })] }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Slow camera drift
    cameraRef().scale(1.04, 40), cameraRef().position.y(-10, 40), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(1), 
    // Fade in Title
    (0, fade_1.fadeIn)(titleRef(), 2), (0, core_1.waitFor)(2), 
    // Draw timeline
    (0, draw_1.drawIn)(timelineLineRef(), 2), (0, core_1.waitFor)(2), 
    // Fade in points 2023 & 2024
    (0, core_1.all)((0, fade_1.fadeIn)(year2023Ref(), 2), (0, fade_1.fadeIn)(year2024Ref(), 2)), (0, core_1.waitFor)(2), 
    // Pop in the Cutoff date
    (0, pop_1.popIn)(cutoffRef(), 2), (0, core_1.waitFor)(2), 
    // Pop in the 2026 Future event (past the cutoff date)
    (0, pop_1.popIn)(event2026Ref(), 2), (0, core_1.waitFor)(2), 
    // Fade in Caption
    (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'LLMs are limited by a static knowledge cutoff date. They are blind to events after this point.', 2.8), (0, core_1.waitFor)(5)));
});
//# sourceMappingURL=scene3.js.map