import { Start } from "../components/Start";
import { Mode } from "../components/Mode";
import { Quiz } from "../components/Quiz";
import { Header } from "../components/common/Header";
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";

export const Routes = () => {
  return (
    <>
      <Router>
        <Header />
          <Switch>
            <Route
            exact
            path="/"
            >
            <Start />
            </Route>
            <Route
            exact
            path="/mode"
            >
            <Mode />
            </Route>
            <Route
            exact
            path="/quiz"
            >
            <Quiz />
            </Route>
          </Switch>
      </Router>
    </>
  );
}