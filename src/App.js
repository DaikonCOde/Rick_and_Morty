import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component
import Layout from './components/layout'; 

// Template page 
import Home from './pages/home';
import Character from './pages/character';
import NotFound from './pages/not-found';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/character/:id" component={Character} ></Route>
          <Route component={NotFound} ></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
