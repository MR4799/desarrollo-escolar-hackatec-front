import React from "react";
import school from "./buttons.module.scss"

export const ButtonWhite = ({titleButton, direction}) => {
    return (
        <>
            <a className={school.button__white} onClick={direction}>{titleButton}</a>
        </>
    )
}