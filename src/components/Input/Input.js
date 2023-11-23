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
                <input
                    id="remember"
                    type="checkbox"
                    style={{
                        opacity: 0,
                        cursor: "pointer",
                        height: 0,
                        width: 0,
                    }}
                />
                <span style={{}}></span>
                <label
                    htmlFor="remember"
                    className={styles.label}
                    style={{
                        color: "#6251DD",
                        fontWeight: 700,
                        fontSize: 16,
                        marginLeft: 4,
                    }}
                >
                    Remember me
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
            />
        </div>
    )
}
