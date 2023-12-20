import React from "react";
import school from "./formlogin.module.scss"
import { ButtonWhite } from "../Buttons/Buttons";

const FormRegister = () => {
    return (
        <>
        <section className={school.section__main__form}>
                    <div className={school.contain__form__login}>
                    <h1>REGISTRO</h1>
                        <div className={school.login__label__input}>
                            <label htmlFor="user" className={school.label__form}>Nombre</label>
                            <input type="text" className={school.input__form} placeholder="Ingresa tu nombre" />
                        </div>
                        <div className={school.login__label__input}>
                            <label htmlFor="matricula" className={school.label__form}>Matricula</label>
                            <input type="text" className={school.input__form} placeholder="Ingresa tu matricula" />
                        </div>
                        <div className={school.login__label__input}>
                            <label htmlFor="email" className={school.label__form}>Correo electronico</label>
                            <input type="email" className={school.input__form} placeholder="Ingresa tu correo electronico" />
                        </div>
                        <div className={school.login__label__input}>
                            <label htmlFor="num" className={school.label__form}>Telefono</label>
                            <input type="number" className={school.input__form} placeholder="Ingresa tu numero de telefono" />
                        </div>
                        <div className={school.login__label__input}>
                            <label htmlFor="password" className={school.label__form}>Contraseña</label>
                            <input type="password" className={school.input__form} placeholder="Ingresa tu contraseña" />
                        </div>
                        <ButtonWhite titleButton={"Registrar"}/>
                        <div className={school.without__account}>
                            ¿Ya tienes cuenta? 
                            <a href="/">Da clic aqui</a>
                        </div>
                    </div>
            </section>
        </>
    )
}
export default FormRegister