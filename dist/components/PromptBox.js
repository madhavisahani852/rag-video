"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptBox = PromptBox;
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const theme_1 = require("../utils/theme");
/**
 * Visual prompt assembler displaying user query merged with retrieved context.
 */
function PromptBox({ questionText = 'What is RAG?', contextText = 'Retrieval-Augmented Generation is...', glow = false, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'column', gap: 16, padding: 24, width: 500, radius: theme_1.THEME.radius.md, fill: theme_1.THEME.colors.cardBg, stroke: glow ? theme_1.THEME.colors.primary : theme_1.THEME.colors.cardBorder, lineWidth: 1.5, shadowColor: glow ? theme_1.THEME.colors.primary : 'rgba(0,0,0,0)', shadowBlur: glow ? 25 : 0, ...props, children: [(0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 16, fontWeight: 800, fill: theme_1.THEME.colors.primary, text: 'AUGMENTED PROMPT TEMPLATE', letterSpacing: 1 }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'column', padding: 14, radius: theme_1.THEME.radius.sm, fill: 'rgba(6, 182, 212, 0.08)', stroke: 'rgba(6, 182, 212, 0.25)', lineWidth: 1, children: [(0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 12, fontWeight: 800, fill: theme_1.THEME.colors.cyan, text: '[RETRIEVED CONTEXT]', marginBottom: 6, letterSpacing: 0.5 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.textMuted, text: contextText, textWrap: true })] }), (0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'column', padding: 14, radius: theme_1.THEME.radius.sm, fill: 'rgba(59, 130, 246, 0.08)', stroke: 'rgba(59, 130, 246, 0.25)', lineWidth: 1, children: [(0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 12, fontWeight: 800, fill: theme_1.THEME.colors.primary, text: '[USER QUESTION]', marginBottom: 6, letterSpacing: 0.5 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 14, fill: theme_1.THEME.colors.text, text: questionText })] })] }));
}
//# sourceMappingURL=PromptBox.js.map