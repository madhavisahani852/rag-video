"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Title_1 = require("../components/Title");
const Caption_1 = require("../components/Caption");
const Badge_1 = require("../components/Badge");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene1', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const badgesRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    const captionTextRef = (0, core_1.createRef)();
    // Add background and camera wrapper
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['50%', '50%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(Title_1.Title, { ref: titleRef, titleText: 'Retrieval-Augmented Generation', subtitleText: 'An Educational Guide to RAG', y: -100 }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: badgesRef, layout: true, direction: 'row', gap: 32, y: 100, opacity: 0, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'ACCURACY', color: theme_1.THEME.colors.primary }), (0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'KNOWLEDGE', color: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(Badge_1.Badge, { text: 'LLM', color: theme_1.THEME.colors.purple })] }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    // Setup refs for Caption's internal Txt node
    // We can query the first Txt child of the caption node
    const captionTxt = captionRef().children()[0];
    // Run continuous cinematic camera movement in parallel with scene animations
    yield* (0, core_1.all)(
    // Slow camera zoom and horizontal pan
    cameraRef().scale(1.04, 40), cameraRef().position.y(-10, 40), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(0.5), 
    // Pop in title
    (0, pop_1.popIn)(titleRef(), 0.8), (0, core_1.waitFor)(0.5), 
    // Fade in badges
    (0, fade_1.fadeIn)(badgesRef(), 0.6), (0, core_1.waitFor)(0.5), 
    // Fade in Caption container
    (0, fade_1.fadeIn)(captionRef(), 0.5), 
    // Type out explanation text
    (0, typing_1.typeText)(captionTxt, 'Retrieval-Augmented Generation (RAG) is a technique that enhances LLMs with external data.', 2.5), 
    // Wait for the remainder of the 75s duration
    (0, core_1.waitFor)(10)));
});
//# sourceMappingURL=scene1.js.map