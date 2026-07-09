"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caption = Caption;
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const theme_1 = require("../utils/theme");
/**
 * Educational subtitles/captions box for the bottom of scenes.
 */
function Caption({ text, textColor = theme_1.THEME.colors.text, fontSize = 24, ...props }) {
    return ((0, jsx_runtime_1.jsx)(_2d_1.Rect, { layout: true, direction: 'row', alignItems: 'center', justifyContent: 'center', padding: [16, 32], radius: theme_1.THEME.radius.sm, fill: 'rgba(3, 7, 18, 0.85)', stroke: 'rgba(255, 255, 255, 0.06)', lineWidth: 1, width: 1200, height: 100, ...props, children: (0, jsx_runtime_1.jsx)(_2d_1.Txt, { fontFamily: theme_1.THEME.fonts.main, fontSize: fontSize, fontWeight: 500, fill: textColor, text: text, textAlign: 'center', textWrap: true, width: '100%' }) }));
}
//# sourceMappingURL=Caption.js.map