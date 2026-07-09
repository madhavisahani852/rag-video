"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Card_1 = require("../components/Card");
const Badge_1 = require("../components/Badge");
const Caption_1 = require("../components/Caption");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const shake_1 = require("../animations/shake");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene27', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const lim1Ref = (0, core_1.createRef)();
    const lim2Ref = (0, core_1.createRef)();
    const lim3Ref = (0, core_1.createRef)();
    const lim4Ref = (0, core_1.createRef)();
    const noteRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -380, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.error, text: 'Limitations of RAG' }) }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'row', gap: 28, y: -60, wrap: 'wrap', width: 1100, justifyContent: 'center', children: [(0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: lim1Ref, width: 480, height: 160, opacity: 0, glowColor: theme_1.THEME.colors.error, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'LATENCY', color: theme_1.THEME.colors.error, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 17, fill: theme_1.THEME.colors.textMuted, text: 'Extra retrieval step adds ~100–500ms latency per query. Real-time apps need careful optimization.', textWrap: true, textAlign: 'center' })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: lim2Ref, width: 480, height: 160, opacity: 0, glowColor: theme_1.THEME.colors.error, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'CHUNK QUALITY', color: theme_1.THEME.colors.error, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 17, fill: theme_1.THEME.colors.textMuted, text: 'Poor chunking or indexing leads to retrieved context that is irrelevant or incomplete.', textWrap: true, textAlign: 'center' })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: lim3Ref, width: 480, height: 160, opacity: 0, glowColor: theme_1.THEME.colors.warning, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'CONTEXT LIMIT', color: theme_1.THEME.colors.warning, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 17, fill: theme_1.THEME.colors.textMuted, text: 'LLM context windows are finite — too many chunks overflow the prompt and lose information.', textWrap: true, textAlign: 'center' })] }), (0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: lim4Ref, width: 480, height: 160, opacity: 0, glowColor: theme_1.THEME.colors.warning, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'STALE DATA', color: theme_1.THEME.colors.warning, marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 17, fill: theme_1.THEME.colors.textMuted, text: 'If the knowledge base is not re-indexed regularly, retrieved facts can become outdated.', textWrap: true, textAlign: 'center' })] })] }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: noteRef, y: 230, opacity: 0, children: (0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'Mitigations exist — but require careful engineering', color: 'rgba(239,68,68,0.25)', textColor: theme_1.THEME.colors.error }) }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 380, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(cameraRef().scale(1.04, 40), cameraRef().position.y(5, 40), (0, core_1.chain)((0, core_1.waitFor)(1), (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), 
    // Pop in limitation cards with slight shake on each
    (0, pop_1.popIn)(lim1Ref(), 4), (0, shake_1.shakeNode)(lim1Ref(), 8, 4), (0, pop_1.popIn)(lim2Ref(), 4), (0, shake_1.shakeNode)(lim2Ref(), 8, 4), (0, pop_1.popIn)(lim3Ref(), 4), (0, shake_1.shakeNode)(lim3Ref(), 8, 4), (0, pop_1.popIn)(lim4Ref(), 4), (0, core_1.waitFor)(2), (0, pop_1.popIn)(noteRef(), 4), (0, core_1.waitFor)(2), (0, fade_1.fadeIn)(captionRef(), 4), (0, typing_1.typeText)(captionTxt, 'RAG has real trade-offs: latency, chunking quality, context limits, and stale data must all be managed.', 2.6), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene27.js.map