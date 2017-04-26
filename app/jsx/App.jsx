import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, Link} from 'react-router';
import {ProductsPanel} from './products/ProductsPanel.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <h1><Link to="/products">Products</Link></h1>
        {this.props.children}
      </div>
    )
  }
}

const rt = (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/products" component={ProductsPanel}></Route>
    </Route>
  </Router>
)

ReactDOM.render(rt, document.getElementById('app'));
