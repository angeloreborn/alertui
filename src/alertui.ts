"use strict"

import {
    animate,
    fill_mode
} from './jsanimate'

import {
    disappearIntoOblivion,
    backdropHide,
    backdropShow,
    containerHide,
    containerShow,
    defaultfocus,
    tinyshrink
} from './alertui.animations'

import { createLoader } from './loader'
import { lightTheme } from './alertui.themes'

type animation = "fade-in" | "fade-out" | "fade-in-left" | "fade-in-right"
type mode = "success" | "default" | "ok" | "failure" | "error" | "warning"

let createDivElement = () => { return document.createElement('div') }
let createButtonElement = () => {return document.createElement('button') }

let cssAssign: Function = (element: HTMLElement, style: OptionalStyleDeclaration) => { Object.assign(element.style, style) }

let ui_backdrop: HTMLDivElement = createDivElement()
let ui_container: HTMLDivElement = createDivElement()
let ui_header_container: HTMLDivElement = createDivElement()
let ui_body_container: HTMLDivElement = createDivElement()
let ui_action_container: HTMLDivElement = createDivElement()
let ui_footer_container: HTMLDivElement = createDivElement()
let ui_loader_container: HTMLDivElement = createDivElement()
let ui_content_loader_text: HTMLDivElement = createDivElement()
let ui_content_loader: HTMLDivElement = createLoader(40, 8, 13)
let ui_content_header: HTMLDivElement = createDivElement()
let ui_content_body: HTMLDivElement = createDivElement()
let ui_content_footer : HTMLDivElement = createDivElement()

let ui_locked: boolean = false

let selected_theme: AlertUITheme = lightTheme;

(() => {

    ui_backdrop.onclick = (e: MouseEvent) => {
        if (e.target === ui_backdrop) {
            hidePopup()
        }
    }
    ui_backdrop.onmousedown = (e: MouseEvent) => {
        if (e.target === ui_backdrop && ui_locked === true) {
             animate(ui_container, tinyshrink)
        }
    }

    cssAssign(ui_backdrop, selected_theme.backdrop)
    cssAssign(ui_container, selected_theme.container)
    cssAssign(ui_header_container, selected_theme.header)
    cssAssign(ui_body_container, selected_theme.body)
    cssAssign(ui_action_container, selected_theme.action)
    cssAssign(ui_footer_container, selected_theme.footer)
    cssAssign(ui_loader_container, selected_theme.loader)

    animate(ui_backdrop, disappearIntoOblivion)
    animate(ui_loader_container, disappearIntoOblivion)

    ui_backdrop.appendChild(ui_container)
    ui_container.appendChild(ui_header_container)
    ui_container.appendChild(ui_body_container)
    ui_container.appendChild(ui_action_container)
    ui_container.appendChild(ui_footer_container)
    ui_loader_container.appendChild(ui_content_loader)
    ui_loader_container.appendChild(ui_content_loader_text)
    ui_container.appendChild(ui_loader_container)
    document.body.appendChild(ui_backdrop)

})()



export let popup = (config: Config) => {
    resetPopup()
    renderPopup(config)
}


let renderPopup = (config: Config) => {
    if (config.lock) lock()

    // Header
    if (config.header != null) {
        ui_content_header.innerHTML = config.header
        ui_header_container.appendChild(ui_content_header)
    }

    // Body
    if (config.body != null) {
        ui_content_body.innerHTML = config.body
        ui_body_container.appendChild(ui_content_body)
    }

    // Actions
    if (config.actions != null) {
        console.log(config.actions)
        config.actions.forEach((action: Action) => {
            let newButton = createButtonElement()
            if (action.className) {
                newButton.className = action.className
            } else {
                cssAssign(newButton, selected_theme.button.primary)
            }

            newButton.innerHTML = action.title

            if (action.onClick) {
                if (action.await) {
                    newButton.onclick = async (e) => {
                        lock()
                        setLoadText(action.awaitText)
                        showLoad()
                        if (action.onClick) await action.onClick(e)  
                        hideLoad()
                        unlock()
                    }
                } else {
                    console.log('hidingin')
                    newButton.onclick = (e) => {
                        unlock()
                        hidePopup()
                        if (action.onClick) action.onClick(e)     
                    }
                }
            } else {
                newButton.onclick = () => {
                    unlock()
                    hidePopup()
                }
            }
            ui_action_container.appendChild(newButton)
        })
    }

    // Footer
    if (config.footer != null) {
        ui_content_footer.innerHTML = config.footer
        ui_footer_container.appendChild(ui_content_footer)
    }

    // Style
    if (config.style) {
        if (config.style.header) {
            ui_header_container.className = config.style.header
        }
        if (config.style.body) {
            ui_body_container.className = config.style.body
        }
        if (config.style.actions) {
            ui_action_container.className = config.style.actions
        }
        if (config.style.footer) {
            ui_footer_container.className = config.style.footer
        }
    }
    showPopup()
}



let showPopup = () => {
    animate(ui_backdrop, backdropShow)
    animate(ui_container, containerShow)
}

let hidePopup = () => {
    if (ui_locked === false){
        animate(ui_backdrop, backdropHide)
        animate(ui_container, containerHide)
    }else{
        animate(ui_container, defaultfocus)
    }
 
}

let showLoad = () => {
    animate(ui_loader_container, containerShow)
}

let hideLoad = () => {  
    animate(ui_loader_container, containerHide)
}

let setLoadText = (text: string | undefined) => {
    if (text)
    ui_content_loader_text.innerHTML = text
}

let lock = () => {
    ui_locked = true 
}
let unlock = () => {
    ui_locked = false
}

let resetPopup = () => {
    while(ui_header_container.firstChild){
        ui_header_container.removeChild(ui_header_container.firstChild)
    }
    while(ui_body_container.firstChild){
        ui_body_container.removeChild(ui_body_container.firstChild)
    }
    while(ui_action_container.firstChild){
        ui_action_container.removeChild(ui_action_container.firstChild)
    }
    while(ui_footer_container.firstChild){
        ui_footer_container.removeChild(ui_footer_container.firstChild)
    }
}



