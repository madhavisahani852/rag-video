"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = Badge;
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const theme_1 = require("../utils/theme");
/**
 * Small pill badge component for labeling workflow blocks.
 */
function Badge({ text, color = theme_1.THEME.colors.primary, textColor = theme_1.THEME.colors.text, ...props }) {
    return ((0, jsx_runtime_1.jsx)(_2d_1.Rect, { padding: [6, 16], radius: theme_1.THEME.radius.round, fill: color, alignItems: 'center', justifyContent: 'center', ...props, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 18, fontWeight: 700, fill: textColor, text: text, letterSpacing: 1 }) }));
}
//# sourceMappingURL=Badge.js.map