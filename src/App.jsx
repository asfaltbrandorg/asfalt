import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

import { publicRoutes, privateRoutes } from "./routes";
import Page404 from "./views/404";

function App() {
  return (
    <Container fluid className="p-0">
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
    </Container>
  );
}

export default App;
