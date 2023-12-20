import React, {useRef} from "react";
import { IoMenuOutline } from "react-icons/io5";
import school from "./navbar.module.scss"

const Navbar = () =>
{
    const menuref = useRef();
    const menuResp = () => {
        menuref.current.style.marginLeft !== "-100%" ? (
            menuref.current.style.marginLeft = "-100%"
        ) : (
            menuref.current.style.marginLeft = "0%"
        )
    }
    return (
        <>
        <div className={school.navbar}>
            <a href="/" className={school.navbar__logo}>Control Escolar</a>
            <div className={school.navbar__links}>
                <ul>
                    <li>
                        <a onClick={menuResp} className={school.button__menu}><IoMenuOutline /></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className={school.navbar__menu__responsive} ref={menuref}>
        <div className={school.sidebar__links}>
            <ul>
                <li>
                    <a href="/">Alumnos</a>
                </li>
                <li>
                    <a href="/">Grupos</a>
                </li>
                <li>
                    <a href="/">Asignaturas</a>
                </li>
                <li>
                    <a href="/">Horarios</a>
                </li>
                <li>
                    <a href="/">Calificaciones</a>
                </li>
                <li>
                    <a href="/">Cronogramas</a>
                </li>
                <li>
                    <a href="/">Comunicaciones</a>
                </li>
            </ul>
            </div>
        </div>
        </>
    )
}
export default Navbar