import React, { useEffect } from "react";
import {useLocation} from 'react-router-dom';
import {toast} from 'react-tpastify';
const Homepage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.fromLogin) {
            toast.success('welcome! you are logged in. ');
        }
    }, [location.state]);
    return (
        <div className="home-page">
            <h1>CUSTODIAN</h1>

        </div>
    );
};

export default Homepage;