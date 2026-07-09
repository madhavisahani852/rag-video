"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawIn = drawIn;
exports.drawOut = drawOut;
/**
 * Draws a curve or line in by animating its 'end' property from 0 to 1.
 */
function* drawIn(curve, duration = 0.8) {
    curve.end(0);
    yield* curve.end(1, duration);
}
/**
 * Erases a curve or line by animating its 'end' property from 1 to 0.
 */
function* drawOut(curve, duration = 0.8) {
    yield* curve.end(0, duration);
}
//# sourceMappingURL=draw.js.map