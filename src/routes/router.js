import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Auth from '../auth';
import Homepage from '../pages/home/homepage';
import ElectedOfficials from '../pages/Government/electedOfficials';
import JudiciaryOfficials from '../pages/Government/judiciaryOfficials';
import LegistlativeOfficials from '../pages/Government/legistlativeOfficials';
import Mdas from '../pages/Government/mdas';
import GovernorsView from '../pages/Government/officialsView_gov';
import DGovernorsView from '../pages/Government/officialsView_dgov';
import SSGView from '../pages/Government/officialsView_ssg';
import HOSView from '../pages/Government/officialsView_hos';
import COSView from '../pages/Government/officialsView_cos';

const RouterClass = () => {

    return (

        <Routes>

            <Route path = "/">

                <Route index element = {<Homepage/>} />
                
                <Route path="government">

                    <Route path='elected_officials' element = { <ElectedOfficials/> } />

                    <Route path='elected_officials/governor/view' element = { <GovernorsView/> } />
                    <Route path='elected_officials/deputy_governor/view' element = { <DGovernorsView/> } />
                    <Route path='elected_officials/ssg/view' element = { <SSGView/> } />
                    <Route path='elected_officials/hos/view' element = { <HOSView/> } />
                    <Route path='elected_officials/cos/view' element = { <COSView/> } />


                    <Route path='judiciary_officials' element = { <JudiciaryOfficials/> } />
                    <Route path='legistlative_officials' element = { <LegistlativeOfficials/> } />

                    <Route path='mdas' element = { <Mdas/> } />
                    

                </Route>

                {/* 404 Page Not Found */}
                <Route path="*" element = {<h1>Page not found</h1>} />

            </Route>

            
        </Routes>

    );
}

export default RouterClass;
