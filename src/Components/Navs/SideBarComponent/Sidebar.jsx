import React from "react";
import school from "./sidebar.module.scss"

const Sidebar = () => {
    return (
        <>
        <div className={school.sidebar__contain}>
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
export default Sidebar