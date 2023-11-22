import React from "react"
import { ReactComponent as Picture } from "../assets/images/loginscreen-picture.svg"
import { ReactComponent as Logo } from "../assets/icons/Logo.svg"
import { Input } from "../components/Input/Input"

export const LoginScreen = ({ handleChange, logInfo, onSubmit }) => {
    return (
        <>
            <div className="image-container">
                <Picture />
            </div>
            <div className="Login">
                <div className="top">
                    <Logo
                        style={{
                            width: 120,
                            height: 78,
                        }}
                    />
                    <p>Welcome back!</p>
                    <p>Login to your account</p>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="bottom">
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
                    </div>
                    <div className="buttons">
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}
