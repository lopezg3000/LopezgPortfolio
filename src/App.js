import './App.css';
import './assets/fonts.css';
import NavBar from './components/navbar/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';
import NotFound from './components/notfound/NotFound';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/about' component={About} />
        <Route path='/testimonials' component={Testimonials} />
        <Route path='/notfound' component={NotFound} />
        <Redirect from='/' exact to='/home' />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  );
}

export default App;
