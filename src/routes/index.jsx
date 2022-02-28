import { Switch, Route } from "react-router-dom";
import HomeDex from "../pages/HomeDex";
import ListDex from "../pages/ListDex";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeDex />
      </Route>
      <Route path="/list">
        <ListDex />
      </Route>
    </Switch>
  );
};

export default Routes;
