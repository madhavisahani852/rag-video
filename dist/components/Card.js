"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = Card;
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const theme_1 = require("../utils/theme");
/**
 * Glassmorphic Card container with optional glow states.
 */
function Card({ glowColor = theme_1.THEME.colors.primary, showGlow = false, children, ...props }) {
    return ((0, jsx_runtime_1.jsx)(_2d_1.Rect, { layout: true, direction: 'column', padding: 30, radius: theme_1.THEME.radius.md, fill: theme_1.THEME.colors.cardBg, stroke: theme_1.THEME.colors.cardBorder, lineWidth: 1.5, shadowColor: showGlow ? glowColor : 'rgba(0, 0, 0, 0.5)', shadowBlur: showGlow ? 30 : 15, shadowOffset: [0, 4], ...props, children: children }));
}
//# sourceMappingURL=Card.js.map