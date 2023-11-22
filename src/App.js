import "./App.css"
import { useState } from "react"
import axios from "axios"

function App() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const [response, setResponse] = useState(null)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const res = await axios.post(
            "https://assign-api.piton.com.tr/api/rest/login",
            form
        )

        setResponse(res)
        console.log(response?.data)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return {
                ...state,
                [name]: value,
            }
        })
    }
    console.log(form)
    return (
        <div className="App">
            <div className="Image">image</div>
            <div className="Login">
                <div className="top">
                    <p>Welcome back!</p>
                    <p>Login to your account</p>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <div className="bottom">
                        <div>
                            <label>E-mail</label>
                            <input
                                type={"email"}
                                name={"email"}
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type={"password"}
                                name={"password"}
                                value={form.password}
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
        </div>
    )
}

export default App
