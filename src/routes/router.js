import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Auth from '../auth';
import Homepage from '../pages/home/homepage';

const RouterClass = () => {

    return (

        <Routes>

            <Route path = "/">

                <Route index element = {<Homepage/>} />

                {/* 404 Page Not Found */}
                <Route path="*" element = {<h1>Page not found</h1>} />

            </Route>

            
        </Routes>

    );
}

export default RouterClass;
