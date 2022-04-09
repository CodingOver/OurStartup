import { Navigate } from 'react-router-dom'
import tokenStorage from '../utils/tokenStorage'

 const PrivateRoute = ({ component: RouteComponent }) => !!tokenStorage.get() ? <RouteComponent /> : <Navigate to="/login" />

export default PrivateRoute