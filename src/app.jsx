import React , { Component }from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router , Route , Switch , Redirect ,Link } from "react-router-dom";


// import 'font-awesome/css/font-awesome.min.css';
// import './index.css';
// import './app.scss';
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';


class App extends Component {
	render() {
		return (
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/product" component={Home}/>
						<Route path="/product-manager" component={Home}/>
						<Route path="/user" component={Home}/>
						<Route path="/order" component={Home}/>
					</Switch>
				</Layout>
			</Router>
		);
	}
}

ReactDom.render(
	<App />,
	document.getElementById("root")

)
