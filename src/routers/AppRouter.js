import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import PageAbout from '../pages/PageAbout';
import Footer from '../components/Footer';
import PageNotFound from '../pages/PageNotFound';
import '../scss/main.scss';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header />
        <Nav /> */}
        <Switch>
        <Header />
          <Route path="/about"><PageAbout /></Route>
          <Route><PageNotFound /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;