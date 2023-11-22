import React from "react"

export const LoginScreen = ({ handleChange, logInfo, onSubmit }) => {
    return (
        <>
            <div className="Image">image</div>
            <div className="Login">
                <div className="top">
                    <p>Welcome back!</p>
                    <p>Login to your account</p>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="bottom">
                        <div>
                            <label>E-mail</label>
                            <input
                                type={"email"}
                                name={"email"}
                                value={logInfo.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type={"password"}
                                name={"password"}
                                value={logInfo.password}
                                onChange={handleChange}
                            />
                        </div>
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
