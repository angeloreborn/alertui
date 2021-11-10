export interface JsAnimation {
    keyFrames : Keyframe[],
    options : KeyframeAnimationOptions
}

export let animate = async (element: HTMLElement, animation: JsAnimation) : Promise<HTMLElement> => {
    return new Promise<HTMLElement>(resolve => {
        let canimation = element.animate(animation.keyFrames, animation.options)
        if (canimation){
            canimation.onfinish = () => {
                resolve(element as HTMLElement)
            }
        }else{
            resolve(element  as HTMLElement);
        }
    })
}

export let fill_mode = {
    forwards: "forwards" as FillMode
}

