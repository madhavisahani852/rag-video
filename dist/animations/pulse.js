"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pulseScale = pulseScale;
exports.pulseOpacity = pulseOpacity;
const core_1 = require("@revideo/core");
function* pulseScale(node, scaleFactor = 1.1, duration = 0.6) {
    const original = node.scale();
    let target;
    if (typeof original === 'number') {
        target = original * scaleFactor;
    }
    else if (original && typeof original === 'object' && 'x' in original && 'y' in original) {
        target = { x: original.x * scaleFactor, y: original.y * scaleFactor };
    }
    else {
        target = scaleFactor;
    }
    yield* node.scale(target, duration / 2, core_1.easeInOutSine);
    yield* node.scale(original, duration / 2, core_1.easeInOutSine);
}
function* pulseOpacity(node, minOpacity = 0.4, duration = 1) {
    const original = Number(node.opacity());
    yield* node.opacity(minOpacity, duration / 2, core_1.easeInOutSine);
    yield* node.opacity(original, duration / 2, core_1.easeInOutSine);
}
//# sourceMappingURL=pulse.js.map