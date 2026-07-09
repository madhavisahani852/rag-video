"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatedArrow = AnimatedArrow;
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const theme_1 = require("../utils/theme");
/**
 * Directional connector line that is animatable and styled with glow effects.
 */
function AnimatedArrow({ glowColor = theme_1.THEME.colors.primary, ...props }) {
    return ((0, jsx_runtime_1.jsx)(_2d_1.Line, { lineWidth: 4, stroke: theme_1.THEME.colors.primary, endArrow: true, arrowSize: 12, shadowColor: glowColor, shadowBlur: 5, end: 0, ...props }));
}
//# sourceMappingURL=AnimatedArrow.js.map