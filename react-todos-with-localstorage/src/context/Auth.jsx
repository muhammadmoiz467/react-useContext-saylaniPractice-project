import { createContext, useContext, useReducer } from "react"

const AuthContext = createContext()
// const initialState = { isAuth: false, user: {} }
const storedUser = JSON.parse(localStorage.getItem("user"))
const initialState = {
    isAuth : storedUser ? true : false,
    user : storedUser || []
}

const reducer = (state, { type, payload }) => {
    const { user = {} } = payload
    switch (type) {
        case "SET_LOGIN":
            return { isAuth: true, user }
        case "SET_PROFILE":
            return { ...state, user }
        case "SET_LOGOUT":
            return { isAuth: false, user: {} }
        default:
            return state

    }
}

const Auth = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

     const handleLogout = () => {
    localStorage.removeItem("user")
    dispatch({type: "SET_LOGOUT"})
     }
    return (
        <AuthContext.Provider value={{ ...state, dispatch, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export default Auth