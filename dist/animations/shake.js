"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shakeNode = shakeNode;
/**
 * Shakes a node horizontally to indicate error or hallucination.
 */
function* shakeNode(node, amount = 15, duration = 0.5) {
    const originalX = node.position.x();
    const step = duration / 6;
    yield* node.position.x(originalX + amount, step);
    yield* node.position.x(originalX - amount, step);
    yield* node.position.x(originalX + amount * 0.6, step);
    yield* node.position.x(originalX - amount * 0.6, step);
    yield* node.position.x(originalX + amount * 0.3, step);
    yield* node.position.x(originalX, step);
}
//# sourceMappingURL=shake.js.map