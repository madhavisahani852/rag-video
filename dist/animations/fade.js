"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
/**
 * Smoothly fades in a node from 0 to 1 opacity.
 */
function* fadeIn(node, duration = 0.5) {
    node.opacity(0);
    yield* node.opacity(1, duration);
}
/**
 * Smoothly fades out a node to 0 opacity.
 */
function* fadeOut(node, duration = 0.5) {
    yield* node.opacity(0, duration);
}
//# sourceMappingURL=fade.js.map