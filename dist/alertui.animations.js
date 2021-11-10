"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disappearIntoOblivion = exports.defaultfocus = exports.tinyshrink = exports.containerHide = exports.containerShow = exports.backdropHide = exports.backdropShow = void 0;
// Backdrop
exports.backdropShow = {
    keyFrames: [
        { opacity: 0 },
        { opacity: 1, pointerEvents: "all" }
    ],
    options: {
        duration: 100,
        fill: "forwards"
    }
};
exports.backdropHide = {
    keyFrames: [
        { opacity: 0, pointerEvents: "none" }
    ],
    options: {
        duration: 250,
        fill: "forwards"
    }
};
// Container
exports.containerShow = {
    keyFrames: [
        { opacity: 0, transform: "scale(0.9)" },
        { opacity: 1, transform: "scale(1)", pointerEvents: "all" }
    ],
    options: {
        duration: 190,
        fill: "forwards",
    }
};
exports.containerHide = {
    keyFrames: [
        { opacity: 0, transform: "scale(0.9)", pointerEvents: "none" },
    ],
    options: {
        duration: 180,
        fill: "forwards",
    }
};
exports.tinyshrink = {
    keyFrames: [
        { transform: "scale(0.9)" },
    ],
    options: {
        duration: 120,
        fill: "forwards",
    }
};
exports.defaultfocus = {
    keyFrames: [
        { transform: "scale(1)", pointerEvents: "all", opacity: 1 },
    ],
    options: {
        duration: 120,
        fill: "forwards",
    }
};
exports.disappearIntoOblivion = {
    keyFrames: [
        { opacity: 0, pointerEvents: "none" },
    ],
    options: {
        duration: 0,
        fill: "forwards",
    }
};
//# sourceMappingURL=alertui.animations.js.map