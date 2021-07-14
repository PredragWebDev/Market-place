import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';

const AdminRoute = ({children}) => {
    const {user, isLoading , admin} = useAuth();
    console.log()
    const location = useLocation();

    if(isLoading){
        return <h2>Loading</h2>
    }
    if(user?.email && admin){
        return children;
    }
    return   <Navigate to="/" state={{from: location}} />
};

export default AdminRoute;