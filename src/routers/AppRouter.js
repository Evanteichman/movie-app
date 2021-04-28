import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import PageAbout from '../pages/PageAbout';
import PageHome from '../pages/PageHome';
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
          <Route path="/" exact><PageHome /></Route>
          <Route path="/about"><PageAbout /></Route>
          <Route><PageNotFound /></Route>
        </Switch>
        <PageHome />
        {/* <PageAbout /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;