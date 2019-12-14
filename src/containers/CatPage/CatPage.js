import React, { Component } from 'react';
import BlueCat from "../../components/BlueCat/BlueCat";
import YellowCat from "../../components/YellowCat/YellowCat";
import RedCat from "../../components/RedCat/RedCat";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

// const CN = 'cat-page';

class CatPage extends Component {

    render() {
        debugger;

        return (
           <Router>
               <div>
                   <ul>
                       <li>
                           <Link to="/cats/blue">Blue cat</Link>
                       </li>
                       <li>
                           <Link to="/cats/yellow">Yellow cat</Link>
                       </li>
                       <li>
                           <Link to="/cats/red">Red cat</Link>
                       </li>
                   </ul>

                   <Switch>
                       <Route path="/cats/blue">
                              <BlueCat/>
                       </Route>

                       <Route path="/cats/yellow">
                           <YellowCat/>
                       </Route>

                       <Route path="/cats/red">
                           <RedCat/>
                       </Route>
                   </Switch>
               </div>
           </Router>
        );
    }
}

export default CatPage;
