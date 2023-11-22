import React from "react"
import picture from "../assets/images/Picture.png"
import { ReactComponent as Logo } from "../assets/icons/Logo.svg"
import { Input } from "../components/Input/Input"

import styles from "./LoginScreen.module.css"

export const LoginScreen = ({ handleChange, logInfo, onSubmit }) => {
    return (
        <>
            <img src={picture} className={styles.image} />
            <div className={styles.loginContainer}>
                <div className={styles.topInfoContainer}>
                    <Logo
                        style={{
                            width: 120,
                            height: 78,
                        }}
                    />
                    <p>Welcome back!</p>
                    <p>Login to your account</p>
                </div>
                <form className={styles.topInfoContainer} onSubmit={onSubmit}>
                    <Input
                        label={"E-mail"}
                        type={"email"}
                        name={"email"}
                        value={logInfo.email}
                        onChange={handleChange}
                        placeholder={"john@mail.com"}
                    />
                    <Input
                        label={"Password"}
                        type={"password"}
                        name={"password"}
                        value={logInfo.password}
                        onChange={handleChange}
                        placeholder={"********"}
                    />
                    <div className="buttons">
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}
