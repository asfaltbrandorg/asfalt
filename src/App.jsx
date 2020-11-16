import { Switch, Route, Redirect } from "react-router-dom";

import { publicRoutes, privateRoutes } from "./routes";
import Page404 from "./views/404";

function App() {
  return (
    <div>
      <Switch>
        {publicRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        <Redirect to="/" />
      </Switch>
      {/* <Switch>
        {privateRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        <Redirect to="products" />
      </Switch> */}
    </div>
  );
}

export default App;
