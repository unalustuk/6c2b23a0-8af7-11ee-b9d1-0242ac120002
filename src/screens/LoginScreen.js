import React from "react"
import picture from "../assets/images/Picture.png"
import { ReactComponent as Logo } from "../assets/icons/Logo.svg"
import { Input } from "../components/Input/Input"

import styles from "./LoginScreen.module.css"
import { Button } from "../components/Button/Button"

export const LoginScreen = ({ handleChange, logInfo, onSubmit }) => {
    return (
        <>
            <img src={picture} className={styles.image} />
            <div className={styles.loginContainer}>
                <div className={styles.topInfoContainer}>
                    <div className={styles.logo}>
                        <Logo
                            style={{
                                width: 120,
                                height: 78,
                            }}
                        />
                    </div>
                    <div className={styles.topTexts}>
                        <p className={styles.text2}>Welcome back!</p>
                        <p className={styles.text1}>Login to your account</p>
                    </div>
                </div>
                <form className={styles.formContainer} onSubmit={onSubmit}>
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
                    <div className={styles.formButtonContainer}>
                        <Button type={"login"}>Login</Button>
                    </div>
                </form>
                <div className={styles.buttonContainer}>
                    <Button type={"register"}>Register</Button>
                </div>
            </div>
        </>
    )
}
