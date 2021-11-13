
import { JsAnimation } from './jsanimate'

// Backdrop
export let backdropShow : JsAnimation = {
    keyFrames :  [
        {opacity: 1, pointerEvents: "all"}
    ],
    options: {
        duration: 100,
        fill: "forwards"
    }
} 

export let backdropHide : JsAnimation = {
    keyFrames : [
        {opacity: 0, pointerEvents: "none"}
    ],
    options: {
        duration: 250,
        fill: "forwards",
        delay: 150,
    }
} 

// Container
export let containerShow : JsAnimation = {
    keyFrames : [
        {opacity: 0, transform: "scale(0.9)"},
        {opacity: 1, transform: "scale(1)", pointerEvents: "all"}
    ],
    options: {
        duration: 190,
        fill: "forwards",
    }
}
export let containerHide : JsAnimation = {
    keyFrames : [
        {opacity: 0, transform: "scale(0.9)", pointerEvents: "none"},
    ],
    options: {
        duration: 180,
        fill: "forwards",
    }
}

export let tinyshrink: JsAnimation = {
    keyFrames : [
        {transform: "scale(0.9)"},
    ],
    options: {
        duration: 120,
        fill: "forwards",
    }
}
export let defaultfocus: JsAnimation = {
    keyFrames : [
        {transform: "scale(1)", pointerEvents : "all", opacity: 1},
    ],
    options: {
        duration: 120,
        fill: "forwards",
    }
}

export let disappearIntoOblivion: JsAnimation = {
    keyFrames : [
        {opacity: 0, pointerEvents : "none"},
    ],
    options: {
        duration: 0,
        fill: "forwards",
    }
}