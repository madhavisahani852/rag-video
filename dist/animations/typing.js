"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeText = typeText;
const core_1 = require("@revideo/core");
/**
 * Types out a string of text character by character on a Txt node.
 */
function* typeText(txtNode, targetText, duration = 1.0) {
    txtNode.text('');
    yield* txtNode.text(targetText, duration, core_1.linear);
}
//# sourceMappingURL=typing.js.map