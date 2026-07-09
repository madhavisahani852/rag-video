"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zoomIn = zoomIn;
exports.zoomOut = zoomOut;
const core_1 = require("@revideo/core");
/**
 * Zooms a node in from a startScale (default 0.8) and fades it in.
 */
function* zoomIn(node, startScale = 0.8, duration = 0.5) {
    const targetScale = node.scale() || 1;
    node.scale(startScale);
    node.opacity(0);
    yield* (0, core_1.all)(node.scale(targetScale, duration, core_1.easeOutQuad), node.opacity(1, duration));
}
/**
 * Zooms a node out to an endScale (default 0.8) and fades it out.
 */
function* zoomOut(node, endScale = 0.8, duration = 0.5) {
    yield* (0, core_1.all)(node.scale(endScale, duration, core_1.easeInQuad), node.opacity(0, duration));
}
//# sourceMappingURL=zoom.js.map