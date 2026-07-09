"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBar = SearchBar;
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const theme_1 = require("../utils/theme");
/**
 * Visual search input element with magnifying glass icon.
 */
function SearchBar({ searchText = '', placeholder = 'Search databases...', ...props }) {
    return ((0, jsx_runtime_1.jsxs)(_2d_1.Rect, { layout: true, direction: 'row', alignItems: 'center', gap: 16, padding: [14, 24], width: 500, radius: theme_1.THEME.radius.round, fill: theme_1.THEME.colors.cardBg, stroke: theme_1.THEME.colors.cardBorder, lineWidth: 1.5, ...props, children: [(0, jsx_runtime_1.jsxs)(_2d_1.Rect, { width: 24, height: 24, position: [0, 0], children: [(0, jsx_runtime_1.jsx)(_2d_1.Circle, { size: 12, stroke: theme_1.THEME.colors.textMuted, lineWidth: 2.5, x: -2, y: -2 }), (0, jsx_runtime_1.jsx)(_2d_1.Line, { points: [[2, 2], [7, 7]], stroke: theme_1.THEME.colors.textMuted, lineWidth: 2.5 })] }), (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: 20, fontWeight: 500, fill: searchText ? theme_1.THEME.colors.text : theme_1.THEME.colors.textDark, text: searchText || placeholder })] }));
}
//# sourceMappingURL=SearchBar.js.map