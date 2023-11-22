import React from "react"
import styles from "./Button.module.css"

export const Button = ({ children, type }) => {
    let style
    switch (type) {
        case "login":
            style = styles.loginButton
            break

        case "register":
            style = styles.registerButton
            break

        default:
            break
    }

    return <button className={style}>{children}</button>
}
