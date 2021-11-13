import {
    lightBackdropStyle,
    lightContainerStyle,
    lightContentContainerStyle,
    lightFooterContainerStyle,
    lightContentLoaderStyle,
    buttonStyle,
    buttonPrimaryStyle,
    buttonSecondaryStyle,
    lightHeaderContainerStyle,
    lightBodyContainerStyle
} from './alertui.styles'


let GroupStyle = (...args : OptionalStyleDeclaration[]) : OptionalStyleDeclaration => {
    for (var i = 0; i < args.length; i++) {
        Object.assign(args[0], args[i]);
    }
    return args[0];
}

// TODO: Group style on generic themes (class normalization)
export const lightTheme: AlertUITheme = {
    backdrop: lightBackdropStyle,
    container:lightContainerStyle,
    header:lightHeaderContainerStyle,
    body:lightBodyContainerStyle,
    action:lightContentContainerStyle,
    footer:lightFooterContainerStyle,
    loader: lightContentLoaderStyle,
    button:{
        primary: GroupStyle(buttonStyle, buttonPrimaryStyle),
        secondary: GroupStyle(buttonStyle, buttonSecondaryStyle),
        warning: GroupStyle(buttonStyle, buttonPrimaryStyle)
    }
} 
