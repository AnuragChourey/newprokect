import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/mdbreact/dist/css/mdb.css"
import Home from './component/homepage/homepage'
import Gallery from './container/gallery'
import User from "./container/users";
import Post from "./container/post";
import Layout from "./hoc/layout/layout";
import About from "./component/about";
import { routes } from "./utility/constant/constant";
import Contact from "./component/contact";

const App = () => {
  return (
    <>
    
      <Router>
      <Layout>
        <Switch>
        
          <Route exact path={routes.HOME} component={Home} />
          <Route exact path={routes.Gallery} component={Gallery} />
          <Route exact path={routes.User} component={User}/>
          <Route exact path={routes.About} component={About}/>
          <Route exact path={routes.Contact} component={Contact}/>
          <Route exact path={routes.Post} component={Post}/>
         
        </Switch>
        </Layout>
      </Router>
      
    </>
  );
}
export default App;
