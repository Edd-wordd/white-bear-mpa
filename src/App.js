import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "src/components/pages/Landing";
import CreateAnswer from "src/components/pages/CreateAnswer";
import CreateImagery from "src/components/pages/CreateImagery";
import ReviewImagery from "src/components/pages/ReviewImagery";
import ReviewAnswer from "src/components/pages/ReviewAnswer";
import ReviewEmpty from "src/components/pages/ReviewEmpty";
import AllCards from "src/components/pages/AllCards";
import Edit from "src/components/pages/Edit";
import NotFound from "src/components/pages/NotFound";

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/create-answer" component={CreateAnswer}></Route>
            <Route
               exact
               path="create-imagery/"
               component={CreateImagery}
            ></Route>
            <Route
               exact
               path="/review-imagery"
               component={ReviewImagery}
            ></Route>
            <Route exact path="/review-answer" component={ReviewAnswer}></Route>
            <Route exact path="/review-empyty" component={ReviewEmpty}></Route>
            <Route exact path="/all-cards" component={AllCards}></Route>
            <Route exact path="/edit" component={Edit}></Route>
            <Route component={NotFound}></Route>
         </Switch>
      </Router>
   );
}

export default App;
