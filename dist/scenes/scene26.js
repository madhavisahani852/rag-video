"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Badge_1 = require("../components/Badge");
const Caption_1 = require("../components/Caption");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const pop_1 = require("../animations/pop");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene26', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const adv1Ref = (0, core_1.createRef)();
    const adv2Ref = (0, core_1.createRef)();
    const adv3Ref = (0, core_1.createRef)();
    const adv4Ref = (0, core_1.createRef)();
    const adv5Ref = (0, core_1.createRef)();
    const check1Ref = (0, core_1.createRef)();
    const check2Ref = (0, core_1.createRef)();
    const check3Ref = (0, core_1.createRef)();
    const check4Ref = (0, core_1.createRef)();
    const check5Ref = (0, core_1.createRef)();
    const badgeRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -380, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.success, text: 'Advantages of RAG' }) }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'column', gap: 22, y: -60, alignItems: 'start', x: -100, children: [(0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: adv1Ref, layout: true, direction: 'row', gap: 20, alignItems: 'center', opacity: 0, children: [(0, jsx_runtime_1.jsx)(_2d_1.Line, { ref: check1Ref, points: [[0, 10], [8, 18], [24, 2]], stroke: theme_1.THEME.colors.success, lineWidth: 4, end: 0 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 26, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'No retraining needed for new knowledge' })] }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: adv2Ref, layout: true, direction: 'row', gap: 20, alignItems: 'center', opacity: 0, children: [(0, jsx_runtime_1.jsx)(_2d_1.Line, { ref: check2Ref, points: [[0, 10], [8, 18], [24, 2]], stroke: theme_1.THEME.colors.success, lineWidth: 4, end: 0 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 26, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Dramatically reduces hallucination' })] }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: adv3Ref, layout: true, direction: 'row', gap: 20, alignItems: 'center', opacity: 0, children: [(0, jsx_runtime_1.jsx)(_2d_1.Line, { ref: check3Ref, points: [[0, 10], [8, 18], [24, 2]], stroke: theme_1.THEME.colors.success, lineWidth: 4, end: 0 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 26, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Citeable, verifiable sources' })] }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: adv4Ref, layout: true, direction: 'row', gap: 20, alignItems: 'center', opacity: 0, children: [(0, jsx_runtime_1.jsx)(_2d_1.Line, { ref: check4Ref, points: [[0, 10], [8, 18], [24, 2]], stroke: theme_1.THEME.colors.success, lineWidth: 4, end: 0 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 26, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Works with private & domain-specific data' })] }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: adv5Ref, layout: true, direction: 'row', gap: 20, alignItems: 'center', opacity: 0, children: [(0, jsx_runtime_1.jsx)(_2d_1.Line, { ref: check5Ref, points: [[0, 10], [8, 18], [24, 2]], stroke: theme_1.THEME.colors.success, lineWidth: 4, end: 0 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 26, fontWeight: 700, fill: theme_1.THEME.colors.text, text: 'Cost-effective vs full fine-tuning' })] })] }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: badgeRef, y: 230, opacity: 0, children: (0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'RAG = ACCURATE · FRESH · EXPLAINABLE', color: theme_1.THEME.colors.success }) }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 380, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(cameraRef().scale(1.04, 40), cameraRef().position.y(-5, 40), (0, core_1.chain)((0, core_1.waitFor)(1), (0, fade_1.fadeIn)(titleRef(), 0.6), (0, core_1.waitFor)(2), 
    // Animate list items with checkmarks
    (0, core_1.all)((0, fade_1.fadeIn)(adv1Ref(), 2), (0, draw_1.drawIn)(check1Ref(), 2)), (0, core_1.waitFor)(2), (0, core_1.all)((0, fade_1.fadeIn)(adv2Ref(), 2), (0, draw_1.drawIn)(check2Ref(), 2)), (0, core_1.waitFor)(2), (0, core_1.all)((0, fade_1.fadeIn)(adv3Ref(), 2), (0, draw_1.drawIn)(check3Ref(), 2)), (0, core_1.waitFor)(2), (0, core_1.all)((0, fade_1.fadeIn)(adv4Ref(), 2), (0, draw_1.drawIn)(check4Ref(), 2)), (0, core_1.waitFor)(2), (0, core_1.all)((0, fade_1.fadeIn)(adv5Ref(), 2), (0, draw_1.drawIn)(check5Ref(), 2)), (0, core_1.waitFor)(2), (0, pop_1.popIn)(badgeRef(), 2), (0, core_1.waitFor)(2), (0, fade_1.fadeIn)(captionRef(), 2), (0, typing_1.typeText)(captionTxt, 'RAG makes LLMs accurate, current, and cost-effective — without expensive retraining or fine-tuning cycles.', 2.6), (0, core_1.waitFor)(22)));
});
//# sourceMappingURL=scene26.js.map