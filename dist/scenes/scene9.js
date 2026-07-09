"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
const theme_1 = require("../utils/theme");
const Background_1 = require("../components/Background");
const Database_1 = require("../components/Database");
const SearchBar_1 = require("../components/SearchBar");
const Vector_1 = require("../components/Vector");
const Document_1 = require("../components/Document");
const Caption_1 = require("../components/Caption");
const AnimatedArrow_1 = require("../components/AnimatedArrow");
const pop_1 = require("../animations/pop");
const fade_1 = require("../animations/fade");
const draw_1 = require("../animations/draw");
const slide_1 = require("../animations/slide");
const typing_1 = require("../animations/typing");
exports.default = (0, _2d_1.makeScene2D)('scene9', function* (view) {
    const cameraRef = (0, core_1.createRef)();
    const titleRef = (0, core_1.createRef)();
    const searchBarRef = (0, core_1.createRef)();
    const arrowSearchToVecRef = (0, core_1.createRef)();
    const queryVecRef = (0, core_1.createRef)();
    const arrowVecToDbRef = (0, core_1.createRef)();
    const dbContainerRef = (0, core_1.createRef)();
    const dbRef = (0, core_1.createRef)();
    const arrowDbToDocRef = (0, core_1.createRef)();
    const docContainerRef = (0, core_1.createRef)();
    const docRef = (0, core_1.createRef)();
    const captionRef = (0, core_1.createRef)();
    view.add((0, jsx_runtime_1.jsx)(Background_1.Background, { children: (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ref: cameraRef, size: ['100%', '100%'], justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: titleRef, y: -400, opacity: 0, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 48, fontWeight: 800, fill: theme_1.THEME.colors.cyan, text: 'Vector Search & Retrieval' }) }), (0, jsx_runtime_1.jsx)(SearchBar_1.SearchBar, { ref: searchBarRef, x: -500, y: -150, opacity: 0, searchText: 'What is RAG?' }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrowSearchToVecRef, points: [[-500, -100], [-500, -20]], glowColor: theme_1.THEME.colors.primary }), (0, jsx_runtime_1.jsx)(Vector_1.Vector, { ref: queryVecRef, x: -500, y: 50, opacity: 0, values: [0.77, -0.12, 0.54], glow: true }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrowVecToDbRef, points: [[-350, 50], [-130, 50]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: dbContainerRef, x: 0, y: 50, opacity: 0, children: (0, jsx_runtime_1.jsx)(Database_1.Database, { ref: dbRef }) }), (0, jsx_runtime_1.jsx)(AnimatedArrow_1.AnimatedArrow, { ref: arrowDbToDocRef, points: [[120, 50], [330, 50]], glowColor: theme_1.THEME.colors.cyan }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { ref: docContainerRef, x: 450, y: 50, opacity: 0, children: (0, jsx_runtime_1.jsx)(Document_1.Document, { ref: docRef, highlightedLine: 2, highlightColor: theme_1.THEME.colors.cyan }) }), (0, jsx_runtime_1.jsx)(Caption_1.Caption, { ref: captionRef, text: '', y: 350, opacity: 0 })] }) }));
    const captionTxt = captionRef().children()[0];
    yield* (0, core_1.all)(
    // Slow camera drift
    cameraRef().scale(1.04, 10), cameraRef().position.y(-10, 10), 
    // Scene animation sequence
    (0, core_1.chain)((0, core_1.waitFor)(1), 
    // Fade in Title
    (0, fade_1.fadeIn)(titleRef(), 0.6), 
    // Pop in Search bar
    (0, pop_1.popIn)(searchBarRef(), 0.6), (0, core_1.waitFor)(2), 
    // Draw search to vector arrow
    (0, draw_1.drawIn)(arrowSearchToVecRef(), 0.5), (0, core_1.waitFor)(0.1), 
    // Pop in Query vector
    (0, pop_1.popIn)(queryVecRef(), 0.6), (0, core_1.waitFor)(2), 
    // Pop in database, draw vector to DB arrow
    (0, core_1.all)((0, pop_1.popIn)(dbContainerRef(), 0.6), (0, draw_1.drawIn)(arrowVecToDbRef(), 0.6)), (0, core_1.waitFor)(2), 
    // Slide Query vector into DB canister
    (0, core_1.all)((0, slide_1.slideOutTo)(queryVecRef(), 500, 0, 0.6), (0, core_1.chain)((0, core_1.waitFor)(2), (0, core_1.all)(dbRef().shadowColor(theme_1.THEME.colors.primary, 0.3), dbRef().shadowBlur(20, 0.3)))), (0, core_1.waitFor)(2), 
    // Draw DB to Document arrow, and pop document
    (0, core_1.all)((0, draw_1.drawIn)(arrowDbToDocRef(), 0.6), (0, pop_1.popIn)(docContainerRef(), 0.6)), (0, core_1.waitFor)(2), 
    // Caption
    (0, fade_1.fadeIn)(captionRef(), 0.5), (0, typing_1.typeText)(captionTxt, 'The query is vectorized, compared to indexed vectors, and the top-matching documents are retrieved.', 2.8), (0, core_1.waitFor)(5)));
});
//# sourceMappingURL=scene9.js.map