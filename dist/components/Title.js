"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = Title;
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const theme_1 = require("../utils/theme");
/**
 * Standardized title and subtitle component using flexbox layout.
 */
function Title({ titleText, subtitleText, titleColor = theme_1.THEME.colors.text, subtitleColor = theme_1.THEME.colors.textMuted, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'column', alignItems: 'center', gap: 16, ...props, children: [(0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 72, fontWeight: 800, fill: titleColor, text: titleText, letterSpacing: 1 }), subtitleText && ((0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 32, fontWeight: 400, fill: subtitleColor, text: subtitleText }))] }));
}
//# sourceMappingURL=Title.js.map