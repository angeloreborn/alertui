export const lightContainerStyle: OptionalStyleDeclaration = {
    minWidth: "400px",
    minHeight: "100px",
    background: "rgb(255,255,255)",
    borderRadius: "4px",
    transitionDuration: "0.4s",
    position: "relative",
}

export const lightContentContainerStyle: OptionalStyleDeclaration = {
    backfaceVisibility: "hidden",
    fontSize: "24px",
    textAlign: "center",
    padding: "10px 15px 10px 15px"
}
export const lightFooterContainerStyle : OptionalStyleDeclaration = {
    backfaceVisibility: "hidden",
    fontSize: "14px",
    fontWeight: "100",
    textAlign: "center",
}
export const lightBackdropStyle : OptionalStyleDeclaration = {
    background: "rgba(0,0,0,0.5)",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "99999"
}

export const lightContentLoaderStyle : OptionalStyleDeclaration = {
    background: "rgba(250,255,255)",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px"
}

export const buttonStyle : OptionalStyleDeclaration = {
    color: "#212529",
    textAlign: "center",
    textDecoration: "none",
    verticalAlign: "middle",
    cursor: "pointer",
    userSelect: "none",
    backgroundColor: "transparent",
    border: "1px solid transparent",
    padding: "5px 10px",
    fontSize: "16px",
    borderRadius: "4px",
}
export const buttonPrimaryStyle : OptionalStyleDeclaration = {
    color:"#fff",
    backgroundColor: "#dc3545",
    borderColor: "#dc3545"
}

export const buttonSecondaryStyle : OptionalStyleDeclaration = {
    color:"#fff",
    backgroundColor: "rgb(40, 40, 40)",
    borderColor: "rgb(190, 190, 190)"
}