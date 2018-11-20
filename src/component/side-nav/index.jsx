import React,{ Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class SideNav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			productState: false,
			userState: false,
			orderState: false
		};
	}
	
	// 改变二级菜单的状态样式
	handleClick(kindState) {
		const oldState = this.state;

		let newState = {};
		newState[kindState] = !oldState[kindState];
		this.setState(newState);
	}

	render() {
		return (
			<div className="navbar-default navbar-side" role="navigation">
	            <div className="sidebar-collapse">
	                <ul className="nav">
	                    <li>
	                        <NavLink exact activeClassName="active-menu" to="/">
	                        	<i className="fa fa-dashboard"></i>
	                        	<span> 首页</span>
	                        </NavLink>
	                    </li>
	                    <li className={this.state.productState ? "active" : ""}>
	                        <Link to="/product" onClick={this.handleClick.bind(this,"productState")}>
	                        	<i className="fa fa-list"></i>
	                        	<span>商品</span>
	                        	<span className="fa arrow"></span>
	                        </Link>
	                        <ul className={this.state.productState ? "nav nav-second-level collapse in" :"nav nav-second-level collapse" }>
	                            <li>
	                                <NavLink activeClassName="active-menu" to="/product">
	                                	<span>商品管理</span>
	                                </NavLink>
	                            </li>
	                            <li>
	                                <NavLink exact activeClassName="active-menu" to="/product-manager">
	                                	<span>品类管理</span>
	                                </NavLink>
	                            </li>
	                        </ul>
	                    </li>
	                    <li className={this.state.orderState ? "active" : ""}>
	                        <Link to="/order" onClick={this.handleClick.bind(this,"orderState")}>
	                        	<i className="fa fa-check-square-o"></i>
	                        	<span>订单</span>
	                        	<span className="fa arrow"></span>
	                        </Link>
	                        <ul className={this.state.orderState ? "nav nav-second-level collapse in" :"nav nav-second-level collapse" }>
	                            <li>
	                                <NavLink activeClassName="active-menu" to="/order">
	                                	<span>订单管理</span>
	                                </NavLink>
	                            </li>
	                        </ul>
	                    </li>
	                    <li className={this.state.userState ? "active" : ""}>
	                        <Link to="/user" onClick={this.handleClick.bind(this,"userState")}>
	                        	<i className="fa fa-user-o"></i>
	                        	<span>用户</span>
	                        	<span className="fa arrow"></span>
	                        </Link>
	                        <ul className={this.state.userState ? "nav nav-second-level collapse in" :"nav nav-second-level collapse" }>
	                            <li>
	                                <NavLink activeClassName="active-menu" to="/user">
	                                	<span>用户管理</span>
	                                </NavLink>
	                            </li>
	                        </ul>
	                    </li>
	                </ul>
	            </div>
        	</div>
		);
	}
}

export default SideNav;