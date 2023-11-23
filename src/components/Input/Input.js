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
    console.log(label, error)
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
