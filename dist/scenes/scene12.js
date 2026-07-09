"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Card_1 = require("../components/Card");
const Caption_1 = require("../components/Caption");
const pop_1 = require("../animations/pop");
exports.default = (0, _2d_1.makeScene2D)('scene12', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const listContainerRef = (0, core_1.createRef)();
    const adv1Ref = (0, core_1.createRef)();
    const check1Ref = (0, core_1.createRef)();
    const adv2Ref = (0, core_1.createRef)();
    const check2Ref = (0, core_1.createRef)();
    const adv3Ref = (0, core_1.createRef)();
    const check3Ref = (0, core_1.createRef)();
    const adv4Ref = (0, core_1.createRef)();
    const check4Ref = (0, core_1.createRef)();
    const thankYouRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsxs)(Card_1.Card, { ref: thankYouRef, y: 0, width: 600, height: 300, opacity: 0, glowColor: theme_1.THEME.colors.primary, showGlow: true, alignItems: 'center', justifyContent: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 56, fontWeight: 800, fill: theme_1.THEME.colors.text, text: 'Thank You', marginBottom: 10 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 24, fill: theme_1.THEME.colors.textMuted, text: 'You are now ready to build with RAG!' })] }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Slow camera drift
    cameraRef().scale(1.05, 40), cameraRef().position.y(20, 40), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(0.5), 
    // Animate List items in sequence
    // Fade out advantages list & title, and fade in bottom caption
    // Pop in Thank You Card
    (0, pop_1.popIn)(thankYouRef(), 0.8), (0, core_1.waitFor)(70)));
});
//# sourceMappingURL=scene12.js.map