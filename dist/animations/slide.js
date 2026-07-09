"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slideInFrom = slideInFrom;
exports.slideOutTo = slideOutTo;
const core_1 = require("@revideo/core");
/**
 * Slides a node in from a relative offset and fades it in.
 */
function* slideInFrom(node, offsetX, offsetY, duration = 0.6) {
    const targetX = node.position.x();
    const targetY = node.position.y();
    node.position.x(targetX + offsetX);
    node.position.y(targetY + offsetY);
    node.opacity(0);
    yield* (0, core_1.all)(node.position.x(targetX, duration, core_1.easeOutCubic), node.position.y(targetY, duration, core_1.easeOutCubic), node.opacity(1, duration));
}
/**
 * Slides a node out to a relative offset and fades it out.
 */
function* slideOutTo(node, offsetX, offsetY, duration = 0.6) {
    const startX = node.position.x();
    const startY = node.position.y();
    yield* (0, core_1.all)(node.position.x(startX + offsetX, duration, core_1.easeInCubic), node.position.y(startY + offsetY, duration, core_1.easeInCubic), node.opacity(0, duration));
}
//# sourceMappingURL=slide.js.map