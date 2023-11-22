import React from "react"
import "./Input.css"

export const Input = ({ label, type, name, value, placeholder, onChange }) => {
    return (
        <div className={"inputContainer"}>
            <label className="label">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={"input"}
            />
        </div>
    )
}
