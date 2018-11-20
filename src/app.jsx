import React , { Component }from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router , Route , Switch , Redirect ,Link } from "react-router-dom";



import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';
import Login from 'page/login/index.jsx';
import UserList from 'page/user/index.jsx';
import ErrorPage from 'page/error/index.jsx';


class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" render={props => (
						<Layout>
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route path="/product" component={Home}/>
								<Route path="/product-manager" component={Home}/>
								<Route path="/user/index" component={UserList}/>
								<Redirect exact from="/user" to="/user/index" />
								<Route path="/order" component={Home}/>
								<Route component={ErrorPage}/>
							</Switch>
						</Layout>
					)}></Route>
				</Switch>
			</Router>
		);
	}
}

ReactDom.render(
	<App />,
	document.getElementById("root")

)
