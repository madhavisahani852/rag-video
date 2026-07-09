"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const renderer_1 = require("@revideo/renderer");
async function render() {
    try {
        console.log("Rendering video...");
        const file = await (0, renderer_1.renderVideo)({
            projectFile: "./src/project.tsx",
            settings: {
                logProgress: true,
            },
        });
        console.log("Finished!");
        console.log(file);
    }
    catch (err) {
        console.error(err);
    }
}
render();
//# sourceMappingURL=render.js.map