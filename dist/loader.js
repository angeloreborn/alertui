"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPoint = exports.createLoader = void 0;
function createLoader(pixels, numberOfDots, rotation) {
    let points = [];
    let currentRotation = 0;
    let container = document.createElement('div');
    const container_style = {
        width: `${pixels}px`,
        height: `${pixels}px`,
        position: "relative",
    };
    const point_container = {
        position: 'absolute',
        left: "0",
        top: "0",
        width: "100%",
        height: "100%"
    };
    const point_style = {
        background: 'blue',
        borderRadius: '50%',
        width: '4px',
        height: '4px',
        position: 'absolute',
    };
    let delayCumulative = 100;
    let delay = 0;
    let animation_loaderRotate = [{
            transform: "rotate(0deg)",
        }, { transform: "rotate(180deg)" }, { transform: "rotate(360deg)" }];
    let animation_loaderGrow = [{
            transform: "scale(1)"
        }, { transform: "scale(1.12)" }, { transform: "scale(1)" }];
    Object.assign(container.style, container_style);
    let radius = pixels / 2;
    for (let i = 0; i < numberOfDots; i++) {
        let nxtPoint = getPoint(radius, currentRotation);
        let loadPoint = document.createElement('div');
        let x = document.createElement('div');
        Object.assign(x.style, point_container);
        Object.assign(loadPoint.style, point_style);
        loadPoint.style.left = `${nxtPoint.x + radius}px`;
        loadPoint.style.top = `${nxtPoint.y + radius}px`;
        x.appendChild(loadPoint);
        x.animate(animation_loaderRotate, {
            duration: 1800,
            iterations: Infinity,
            easing: "cubic-bezier(0.5, 0, 0.5, 1)",
            delay: delay
        });
        // loadPoint.animate(animation_loaderGrow,{
        //     duration: 1666,
        //     iterations : Infinity,
        //     delay: delay,
        // })
        container.appendChild(x);
        currentRotation += rotation;
        delay -= delayCumulative;
    }
    return container;
}
exports.createLoader = createLoader;
function getPoint(radius, rotation) {
    return {
        x: radius * Math.cos(rotation * Math.PI / 180),
        y: radius * Math.sin(rotation * Math.PI / 180)
    };
}
exports.getPoint = getPoint;
//# sourceMappingURL=loader.js.map