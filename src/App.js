import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { LoginScreen } from "./screens/LoginScreen"

const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

const isPassword = (password) => /^(?=.*[A-Za-z0-9_]).{6,20}$/i.test(password)
function App() {
    const [logInfo, setLogInfo] = useState({
        email: "",
        password: "",
    })
    const [isChecked, setIsChecked] = useState(false)
    const [errors, setErrors] = useState({})
    const [response, setResponse] = useState(null)

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        const errors = {}

        if (!isEmail(logInfo.email)) {
            errors.email = true
        }

        if (!isPassword(logInfo.password)) {
            errors.password = true
        }

        setErrors(errors)

        if (!Object.keys(errors).length) {
            const res = await axios.post(
                "https://assign-api.piton.com.tr/api/rest/login",
                logInfo
            )

            if (isChecked && res.data.action_login.token) {
                localStorage.setItem(
                    "token",
                    JSON.stringify(res.data.action_login.token)
                )
            }
            setResponse(res)
        }
    }

    useEffect(() => {
        console.log(response?.data)
    }, [response])

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "checkbox") {
            setIsChecked(!isChecked)
        } else {
            setLogInfo((state) => {
                return {
                    ...state,
                    [name]: value,
                }
            })
        }
    }

    return (
        <div className="App">
            <LoginScreen
                handleChange={handleChange}
                logInfo={logInfo}
                onSubmit={onSubmitHandler}
                errors={errors}
                isChecked={isChecked}
            />
        </div>
    )
}

export default App
