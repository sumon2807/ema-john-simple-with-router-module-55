import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location=useLocation();


    if(loading){
        return <div>Loading....</div>
    }

    if(user){
        return children;
    }


    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRouter;