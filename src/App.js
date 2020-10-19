import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/index';
import Cart from './pages/Cart/index';

// Components
import FreeShippingBar from './components/FreeShippingBar/index';
import Header from './components/Header/index';

function App() {
  return (
    <div className="App">
      <Router>
        <FreeShippingBar />
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Router>
    </div>
  );
}

export default App;
