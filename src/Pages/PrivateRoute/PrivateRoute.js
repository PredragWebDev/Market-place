import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation()

    if(isLoading){
        return <h2>Loading...</h2>
    }
    return user ? children : <Navigate to="/login"
    state={{from:location}}
    />
};

export default PrivateRoute;