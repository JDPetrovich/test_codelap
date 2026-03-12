import { useState } from "react"
import { useNavigate } from "react-router-dom"
import type { LoginProps } from "../types/login-props.type"
import { GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import type { GoogleUser } from "../types/google-user.type"

export default function Login({ setUsername }: LoginProps) {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    function handleLogin() {
        localStorage.setItem("username", input)
        setUsername(input)
        navigate("/home")
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="border p-6 rounded w-80 bg-gray-200">
                <h1 className="text-xl font-bold mb-4">Login</h1>

                <input
                    className="border w-full p-2 mb-4 bg-white"
                    placeholder="username"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="bg-orange-500 text-white px-4 py-2 rounded w-full mb-1 hover:bg-orange-600"
                >
                    Enter
                </button>

                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        const decoded = jwtDecode<GoogleUser>(credentialResponse.credential!)

                        const username = decoded.name

                        localStorage.setItem("username", username)
                        setUsername(username)

                        navigate("/home")
                    }}
                    onError={() => {
                        console.log("Google login failed")
                    }}
                />
            </div>
        </div>
    )
}