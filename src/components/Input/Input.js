import React from "react"
import styles from "./Input.module.css"

export const Input = ({
    label,
    type,
    name,
    value,
    placeholder,
    onChange,
    error,
    style,
}) => {
    if (type === "checkbox") {
        return (
            <div
                className={styles.inputContainer}
                style={{
                    marginTop: 10,
                    display: "flex",
                    alignItems: "center",
                    height: 24,
                }}
            >
                <label className={styles.container}>
                    Remember Me
                    <input
                        type="checkbox"
                        name={name}
                        onChange={onChange}
                        checked={value}
                    />
                    <span className={styles.checkmark}></span>
                </label>
            </div>
        )
    }

    return (
        <div className={styles.inputContainer}>
            <label className={styles.label}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={error ? styles.error : styles.input}
                style={{ style }}
            />
        </div>
    )
}
