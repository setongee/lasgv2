import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Auth from '../auth';
import Homepage from '../pages/home/homepage';
import ElectedOfficials from '../pages/Government/electedOfficials';
import JudiciaryOfficials from '../pages/Government/judiciaryOfficials';
import LegistlativeOfficials from '../pages/Government/legistlativeOfficials';
import Mdas from '../pages/Government/mdas';

const RouterClass = () => {

    return (

        <Routes>

            <Route path = "/">

                <Route index element = {<Homepage/>} />
                
                <Route path="government">

                    <Route path='elected_officials' element = { <ElectedOfficials/> } />
                    <Route path='judiciary_officials' element = { <JudiciaryOfficials/> } />
                    <Route path='legistlative_officials' element = { <LegistlativeOfficials/> } />
                    <Route path='mdas/:initial' element = { <Mdas/> } />

                </Route>

                {/* 404 Page Not Found */}
                <Route path="*" element = {<h1>Page not found</h1>} />

            </Route>

            
        </Routes>

    );
}

export default RouterClass;
