import "./App.css"
import { useState } from "react"
import axios from "axios"
import { LoginScreen } from "./screens/LoginScreen"

function App() {
    const [logInfo, setLogInfo] = useState({
        email: "",
        password: "",
    })
    const [response, setResponse] = useState(null)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const res = await axios.post(
            "https://assign-api.piton.com.tr/api/rest/login",
            logInfo
        )

        setResponse(res)
        console.log(response?.data)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setLogInfo((state) => {
            return {
                ...state,
                [name]: value,
            }
        })
    }
    return (
        <div className="App">
            <LoginScreen
                handleChange={handleChange}
                logInfo={logInfo}
                onSubmit={onSubmitHandler}
            />
        </div>
    )
}

export default App
