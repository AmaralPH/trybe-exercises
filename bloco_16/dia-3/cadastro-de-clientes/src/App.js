import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NewClient from './pages/NewClient';
import Login from './pages/Login';
import ClientList from './pages/ClientList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/client-list" component={ ClientList } />
          <Route path="/new-client" component={ NewClient } />
          <Route path="/login" component={ Login } />
          <Route path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
