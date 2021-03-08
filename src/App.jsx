import './App.css';
import './styles/styles.scss'
import Menu from './components/Menu'
import { Provider } from 'react-redux';
import Store from "./Store/store";
import { Router, Switch } from "react-router-dom";

function App() {
  return (
    // <span class="material-icons material-icons-outlined">android
    //</span>
    <Provider store={Store}>
      <Menu />
      {/*<Router>
        <Switch>
           <Route exact path="/" component={Home} />
        <Route path="/catalogue" component={Catalogue} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Item} /> 
        </Switch>
      </Router>*/}
    </Provider>
  );
}

export default App;
