import '../scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Favourites from '../pages/Favourites';
import MovieInfo from '../pages/MovieInfo'


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route path="/favourites">
      <Favourites /></Route>
      <Route path="/movieinfo"><MovieInfo /></Route>
    </div>
    </Router>
  );
}

export default App;
