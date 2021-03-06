import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* swithc - esse cara faz com que so uma rota apareça  em tela*/}
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />


                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />


            </Switch>
        </BrowserRouter>
    );
}

export default Routes;