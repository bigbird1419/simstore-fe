import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const requireAuth = (WrappedComponent) => {
    const RequireAuth = (props) => {
        const { isLogin } = useContext(AuthContext);
        const navigate = useNavigate()

        useEffect(() => {
            if (!isLogin) {
                navigate('/login')
            }
        })
        return <WrappedComponent {...props} />;
    };
    RequireAuth.displayName = `RequireAuth(${getDisplayName(WrappedComponent)})`
    return RequireAuth;
};

export default requireAuth;