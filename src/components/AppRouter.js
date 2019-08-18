import React from "react";

import {Switch, Route} from 'react-router-dom';
import Character from "../components/Character";
import Location from "../components/Location";
import Episodes from "../components/Episodes"




import WelcomePage from "../components/WelcomePage"

export default function AppRouter() {
  return (
    <div>
     <Switch>
     <Route exact path="/" component={WelcomePage} />
     <Route  path="/character" component={Character} />
     <Route  path="/location" component={Location} />
     <Route  path="/episodes" component={Episodes} />
     </Switch>
    </div>

  );
}
