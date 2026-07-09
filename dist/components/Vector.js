"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = Vector;
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const theme_1 = require("../utils/theme");
/**
 * Mathematical vector visualization displaying an array of floats.
 */
function Vector({ values = [0.12, -0.85, 0.44, 0.91, -0.03, 0.56], glowColor = theme_1.THEME.colors.cyan, glow = false, ...props }) {
    const textVal = `[ ${values.map(v => v.toFixed(2)).join(', ')} ]`;
    return ((0, jsx_runtime_1.jsx)(_2d_1.Rect, { layout: true, direction: 'row', alignItems: 'center', justifyContent: 'center', padding: [12, 20], radius: theme_1.THEME.radius.sm, fill: theme_1.THEME.colors.cardBg, stroke: glow ? glowColor : theme_1.THEME.colors.cardBorder, lineWidth: 1.5, shadowColor: glow ? glowColor : 'rgba(0,0,0,0)', shadowBlur: glow ? 20 : 0, ...props, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.mono, fontSize: 18, fontWeight: 600, fill: glow ? theme_1.THEME.colors.cyan : theme_1.THEME.colors.textMuted, text: textVal }) }));
}
//# sourceMappingURL=Vector.js.map