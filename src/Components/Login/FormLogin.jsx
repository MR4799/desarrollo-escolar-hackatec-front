import React, {useState} from "react";
import school from "./formlogin.module.scss"
import { ButtonWhite } from "../Buttons/Buttons";
import iconlogin from "../../../login icon.svg"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

const FormLogin = () => {
    return (
        <>
            <section className={school.section__main__form}>
                    <div className={school.contain__form__login}>
                    <h1>INICIO DE SESIÓN</h1>
                        <div className={school.icon__login}><img src={iconlogin} /></div>
                        <div className={school.login__label__input}>
                            <label htmlFor="user" className={school.label__form}>Nombre de usuario</label>
                            <div className={school.icon__input}><FaUser /></div>
                            <input type="text" className={school.input__form} placeholder="Ingresa tu nombre de usuario" />
                        </div>
                        <div className={school.login__label__input}>
                            <label htmlFor="password" className={school.label__form}>Contraseña</label>
                            <div className={school.icon__input}><FaLock /></div>
                            <input type="text" className={school.input__form} placeholder="Ingresa tu contraseña" />
                        </div>
                        <ButtonWhite titleButton={"Ingresar"}/>
                        <div className={school.without__account}>
                            ¿No tienes cuenta? 
                            <a href="/">Registrate aqui</a>
                        </div>
                    </div>
            </section>
        </>
    )
}
export default FormLogin