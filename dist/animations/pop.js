"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.popIn = popIn;
exports.popOut = popOut;
const core_1 = require("@revideo/core");
/**
 * Pops in a node by scaling it from 0 to targetScale using easeOutBack.
 * Automatically ensures the node's opacity is set to 1.
 */
function* popIn(node, duration = 0.5, targetScale = 1) {
    node.scale(0);
    node.opacity(1); // Ensure node is visible as it scales up
    yield* node.scale(targetScale, duration, core_1.easeOutBack);
}
/**
 * Pops out a node by scaling it to 0 using easeInBack.
 */
function* popOut(node, duration = 0.5) {
    yield* node.scale(0, duration, core_1.easeInBack);
}
//# sourceMappingURL=pop.js.map