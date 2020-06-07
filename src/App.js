import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import CreateAnswer from "./components/pages/CreateAnswer";
import CreateImagery from "./components/pages/CreateImagery";
import ReviewImagery from "./components/pages/ReviewImagery";
import ReviewAnswer from "./components/pages/ReviewAnswer";
import ReviewEmpty from "./components/pages/ReviewEmpty";
import AllCards from "./components/pages/AllCards";
import Edit from "./components/pages/Edit";
import NotFound from "./components/pages/NotFound";

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
