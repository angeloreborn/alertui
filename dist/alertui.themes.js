"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightTheme = void 0;
const alertui_styles_1 = require("./alertui.styles");
let GroupStyle = (...args) => {
    for (var i = 0; i < args.length; i++) {
        Object.assign(args[0], args[i]);
    }
    return args[0];
};
exports.lightTheme = {
    backdrop: alertui_styles_1.lightBackdropStyle,
    container: alertui_styles_1.lightContainerStyle,
    header: alertui_styles_1.lightContentContainerStyle,
    body: alertui_styles_1.lightContentContainerStyle,
    action: alertui_styles_1.lightContentContainerStyle,
    footer: alertui_styles_1.lightFooterContainerStyle,
    loader: alertui_styles_1.lightContentLoaderStyle,
    button: {
        primary: GroupStyle(alertui_styles_1.buttonStyle, alertui_styles_1.buttonPrimaryStyle),
        secondary: GroupStyle(alertui_styles_1.buttonStyle, alertui_styles_1.buttonSecondaryStyle),
        warning: GroupStyle(alertui_styles_1.buttonStyle, alertui_styles_1.buttonPrimaryStyle)
    }
};
//# sourceMappingURL=alertui.themes.js.map