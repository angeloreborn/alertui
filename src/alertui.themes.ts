import {
    lightBackdropStyle,
    lightContainerStyle,
    lightContentContainerStyle,
    lightFooterContainerStyle,
    lightContentLoaderStyle,
    buttonStyle,
    buttonPrimaryStyle,
    buttonSecondaryStyle
} from './alertui.styles'


let GroupStyle = (...args : OptionalStyleDeclaration[]) : OptionalStyleDeclaration => {
    for (var i = 0; i < args.length; i++) {
        Object.assign(args[0], args[i]);
    }
    return args[0];
}

export const lightTheme: AlertUITheme = {
    backdrop: lightBackdropStyle,
    container:lightContainerStyle,
    header:lightContentContainerStyle,
    body:lightContentContainerStyle,
    action:lightContentContainerStyle,
    footer:lightFooterContainerStyle,
    loader: lightContentLoaderStyle,
    button:{
        primary: GroupStyle(buttonStyle, buttonPrimaryStyle),
        secondary: GroupStyle(buttonStyle, buttonSecondaryStyle),
        warning: GroupStyle(buttonStyle, buttonPrimaryStyle)
    }
} 
