"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Background = Background;
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const theme_1 = require("../utils/theme");
/**
 * Modern dark space background with an optional grid overlay.
 */
function Background({ showGrid = true, children, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(_2d_1.Rect, { size: ['100%', '100%'], fill: theme_1.THEME.colors.bgDark, ...props, children: [showGrid && ((0, jsx_runtime_1.jsx)(_2d_1.Grid, { width: '100%', height: '100%', spacing: 80, stroke: 'rgba(59, 130, 246, 0.05)', lineWidth: 1 })), children] }));
}
//# sourceMappingURL=Background.js.map