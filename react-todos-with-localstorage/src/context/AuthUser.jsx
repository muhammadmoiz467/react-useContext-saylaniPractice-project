// import React, { createContext, useContext, useReducer } from 'react'

// const AuthContext = createContext()
// const initialState = { isAuth: false, user: {} }

// const reducer = (state, { type, payload }) => {
//   const { user = {} } = payload
//   switch (type) {
//     case "SET_LOGIN":
//       return { isAuth: true, user }
//     case "SET_PROFILE":
//       return { isAuth: true, user }
//     case "SET_LOGOUT":
//       return initialState
//     default:
//       return state
//   }
// }
// const AuthUser = ({ children }) => {

//   const [state, dispatch] = useReducer(reducer, initialState)

//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthUser

// export const useAuth = () => useContext(AuthContext) 