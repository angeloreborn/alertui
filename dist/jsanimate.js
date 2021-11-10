"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fill_mode = exports.animate = void 0;
let animate = async (element, animation) => {
    return new Promise(resolve => {
        let canimation = element.animate(animation.keyFrames, animation.options);
        if (canimation) {
            canimation.onfinish = () => {
                resolve(element);
            };
        }
        else {
            resolve(element);
        }
    });
};
exports.animate = animate;
exports.fill_mode = {
    forwards: "forwards"
};
//# sourceMappingURL=jsanimate.js.map