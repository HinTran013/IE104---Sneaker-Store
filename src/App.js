import './styles/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AboutUsPage from './pages/AboutUsPage'
import BlogPage from './pages/BlogPage'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/product' component={ProductPage} />
        <Route path='/about-us' component={AboutUsPage} />
        <Route path='/blog' component={BlogPage} />
      </Switch>
    </Router>
  )

}

export default App;