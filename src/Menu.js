import Swabi from "./swabi";
import Jokes from "./Jokes";
import User from "./user";
import { Link, Route, Switch } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/jokes">Jokes</Link>
          </li>
          <li>
            <Link to="/swabi">Swabi</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/"></Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/jokes">
          <Jokes />
        </Route>
        <Route path="/swabi">
          <Swabi />
        </Route>
      </Switch>
    </div>
  );
}
