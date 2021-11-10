"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.popup = void 0;
const jsanimate_1 = require("./jsanimate");
const alertui_animations_1 = require("./alertui.animations");
const loader_1 = require("./loader");
const alertui_themes_1 = require("./alertui.themes");
let createDivElement = () => { return document.createElement('div'); };
let createButtonElement = () => { return document.createElement('button'); };
let cssAssign = (element, style) => { Object.assign(element.style, style); };
let ui_backdrop = createDivElement();
let ui_container = createDivElement();
let ui_header_container = createDivElement();
let ui_body_container = createDivElement();
let ui_action_container = createDivElement();
let ui_footer_container = createDivElement();
let ui_loader_container = createDivElement();
let ui_content_loader_text = createDivElement();
let ui_content_loader = (0, loader_1.createLoader)(40, 8, 13);
let ui_content_header = createDivElement();
let ui_content_body = createDivElement();
let ui_content_footer = createDivElement();
let ui_locked = false;
let selected_theme = alertui_themes_1.lightTheme;
(() => {
    ui_backdrop.onclick = (e) => {
        if (e.target === ui_backdrop) {
            hidePopup();
        }
    };
    ui_backdrop.onmousedown = (e) => {
        if (e.target === ui_backdrop && ui_locked === true) {
            (0, jsanimate_1.animate)(ui_container, alertui_animations_1.tinyshrink);
        }
    };
    cssAssign(ui_backdrop, selected_theme.backdrop);
    cssAssign(ui_container, selected_theme.container);
    cssAssign(ui_header_container, selected_theme.header);
    cssAssign(ui_body_container, selected_theme.body);
    cssAssign(ui_action_container, selected_theme.action);
    cssAssign(ui_footer_container, selected_theme.footer);
    cssAssign(ui_loader_container, selected_theme.loader);
    (0, jsanimate_1.animate)(ui_backdrop, alertui_animations_1.disappearIntoOblivion);
    (0, jsanimate_1.animate)(ui_loader_container, alertui_animations_1.disappearIntoOblivion);
    ui_backdrop.appendChild(ui_container);
    ui_container.appendChild(ui_header_container);
    ui_container.appendChild(ui_body_container);
    ui_container.appendChild(ui_action_container);
    ui_container.appendChild(ui_footer_container);
    ui_loader_container.appendChild(ui_content_loader);
    ui_loader_container.appendChild(ui_content_loader_text);
    ui_container.appendChild(ui_loader_container);
    document.body.appendChild(ui_backdrop);
})();
let popup = (config) => {
    resetPopup();
    renderPopup(config);
};
exports.popup = popup;
let renderPopup = (config) => {
    if (config.lock)
        lock();
    // Header
    if (config.header != null) {
        ui_content_header.innerHTML = config.header;
        ui_header_container.appendChild(ui_content_header);
    }
    // Body
    if (config.body != null) {
        ui_content_body.innerHTML = config.body;
        ui_body_container.appendChild(ui_content_body);
    }
    // Actions
    if (config.actions != null) {
        console.log(config.actions);
        config.actions.forEach((action) => {
            let newButton = createButtonElement();
            if (action.className) {
                newButton.className = action.className;
            }
            else {
                cssAssign(newButton, selected_theme.button.primary);
            }
            newButton.innerHTML = action.title;
            if (action.onClick) {
                if (action.await) {
                    newButton.onclick = async (e) => {
                        lock();
                        setLoadText(action.awaitText);
                        showLoad();
                        if (action.onClick)
                            await action.onClick(e);
                        hideLoad();
                        unlock();
                    };
                }
                else {
                    console.log('hidingin');
                    newButton.onclick = (e) => {
                        unlock();
                        hidePopup();
                        if (action.onClick)
                            action.onClick(e);
                    };
                }
            }
            else {
                newButton.onclick = () => {
                    unlock();
                    hidePopup();
                };
            }
            ui_action_container.appendChild(newButton);
        });
    }
    // Footer
    if (config.footer != null) {
        ui_content_footer.innerHTML = config.footer;
        ui_footer_container.appendChild(ui_content_footer);
    }
    // Style
    if (config.style) {
        if (config.style.header) {
            ui_header_container.className = config.style.header;
        }
        if (config.style.body) {
            ui_body_container.className = config.style.body;
        }
        if (config.style.actions) {
            ui_action_container.className = config.style.actions;
        }
        if (config.style.footer) {
            ui_footer_container.className = config.style.footer;
        }
    }
    showPopup();
};
let showPopup = () => {
    (0, jsanimate_1.animate)(ui_backdrop, alertui_animations_1.backdropShow);
    (0, jsanimate_1.animate)(ui_container, alertui_animations_1.containerShow);
};
let hidePopup = () => {
    if (ui_locked === false) {
        (0, jsanimate_1.animate)(ui_backdrop, alertui_animations_1.backdropHide);
        (0, jsanimate_1.animate)(ui_container, alertui_animations_1.containerHide);
    }
    else {
        (0, jsanimate_1.animate)(ui_container, alertui_animations_1.defaultfocus);
    }
};
let showLoad = () => {
    (0, jsanimate_1.animate)(ui_loader_container, alertui_animations_1.containerShow);
};
let hideLoad = () => {
    (0, jsanimate_1.animate)(ui_loader_container, alertui_animations_1.containerHide);
};
let setLoadText = (text) => {
    if (text)
        ui_content_loader_text.innerHTML = text;
};
let lock = () => {
    ui_locked = true;
};
let unlock = () => {
    ui_locked = false;
};
let resetPopup = () => {
    while (ui_header_container.firstChild) {
        ui_header_container.removeChild(ui_header_container.firstChild);
    }
    while (ui_body_container.firstChild) {
        ui_body_container.removeChild(ui_body_container.firstChild);
    }
    while (ui_action_container.firstChild) {
        ui_action_container.removeChild(ui_action_container.firstChild);
    }
    while (ui_footer_container.firstChild) {
        ui_footer_container.removeChild(ui_footer_container.firstChild);
    }
};
//# sourceMappingURL=alertui.js.map