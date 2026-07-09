"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = Document;
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const theme_1 = require("../utils/theme");
/**
 * Visual document representation with placeholder text lines and custom highlighting.
 */
function Document({ linesCount = 5, highlightedLine = -1, highlightColor = theme_1.THEME.colors.cyan, ...props }) {
    const lines = Array.from({ length: linesCount });
    return ((0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'column', gap: 12, padding: 24, width: 160, height: 220, radius: 12, fill: theme_1.THEME.colors.cardBg, stroke: theme_1.THEME.colors.cardBorder, lineWidth: 2, ...props, children: [(0, jsx_runtime_1.jsx)(_2d_1.Rect, { width: 60, height: 10, radius: 5, fill: theme_1.THEME.colors.textMuted }), (0, jsx_runtime_1.jsx)(_2d_1.Rect, { height: 2 }), lines.map((_, idx) => {
                const isHighlighted = idx === highlightedLine;
                return ((0, jsx_runtime_1.jsx)(_2d_1.Rect, { width: idx % 2 === 0 ? '100%' : '80%', height: 8, radius: 4, fill: isHighlighted ? highlightColor : theme_1.THEME.colors.textDark }));
            })] }));
}
//# sourceMappingURL=Document.js.map