const { useSelector } = require("react-redux")
const { Navigate } = require("react-router-dom")
const { selectorIsAuth } = require("redux/auth/authSelector")

const PublicRoute =({component, redirectTo = '/phonebook'}) =>{
    const isAuth = useSelector(selectorIsAuth)
    return !isAuth ? component : <Navigate to={redirectTo}/> 
}
export default PublicRoute