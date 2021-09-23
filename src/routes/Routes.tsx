import { Start } from "../components/Start";
import { Mode } from "../components/Mode";
import { Quiz } from "../components/Quiz";
import { Score } from "../components/Score";
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
            <Route
            exact
            path="/score"
            >
            <Score />
            </Route>
          </Switch>
      </Router>
    </>
  );
}
        // <Route
        // exact
        // path="/XXX"
        // >
        // <Xxx />
        // </Route>