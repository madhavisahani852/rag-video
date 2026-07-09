"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = Database;
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const theme_1 = require("../utils/theme");
/**
 * 3D-like stack of database disks representing a Vector DB.
 */
function Database({ label = 'VECTOR DATABASE', glow = false, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(_2d_1.Rect, { ...props, children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { y: -30, width: 180, height: 45, radius: 22.5, fill: theme_1.THEME.colors.cardBg, stroke: theme_1.THEME.colors.primary, lineWidth: 3, shadowColor: glow ? theme_1.THEME.colors.primary : 'rgba(0, 0, 0, 0.4)', shadowBlur: glow ? 20 : 5 }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { y: 0, width: 180, height: 45, radius: 22.5, fill: theme_1.THEME.colors.cardBg, stroke: theme_1.THEME.colors.primary, lineWidth: 3, shadowColor: glow ? theme_1.THEME.colors.primary : 'rgba(0, 0, 0, 0.4)', shadowBlur: glow ? 20 : 5 }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { y: 30, width: 180, height: 45, radius: 22.5, fill: theme_1.THEME.colors.cardBg, stroke: theme_1.THEME.colors.primary, lineWidth: 3, shadowColor: glow ? theme_1.THEME.colors.primary : 'rgba(0, 0, 0, 0.4)', shadowBlur: glow ? 20 : 5 }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { y: 80, fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 800, fill: theme_1.THEME.colors.cyan, text: label, letterSpacing: 1 })] }));
}
//# sourceMappingURL=Database.js.map