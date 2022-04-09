import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import PrivateRoute from './routes/PrivateRoute'
import Dashboard from "./components/Dashboard/Dashboard"

import Login from "./components/Auth/Login/Login"
import Register from "./components/Auth/Register/Register"
import NotFound from './components/NoFound/NoFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="dashboard" element={<PrivateRoute  component={Dashboard} />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
