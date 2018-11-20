import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

const _mm = new MUtil();
const _user = new User();

class TopNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: _mm.getStorage('userInfo').username
		}
	}
	
	onLoginOut() {
		_user.loginOut().then(res => {
			_mm.removeStorage('userInfo');
			window.location.href = '/login';
		},errrMsg => {
			_mm.errorTips(errrMsg);
		});
	}
	
	render() {
		return (
			<div className="navbar navbar-default top-navbar"  >
	            <div className="navbar-header">
	                <Link className="navbar-brand" to="/"><b>HAPPY</b>REACT</Link>
	            </div>

	            <ul className="nav navbar-top-links navbar-right" id="navbar-top">
	                <li className="dropdown">
	                    <a className="dropdown-toggle" href="javascript:void(0)">
	                        <i className="fa fa-user fa-fw"></i> 
	                        	<span>{this.state.username ? ('欢迎, '+this.state.username) : '亲,请登录'}</span>
	                        <i className="fa fa-caret-down"></i>
	                    </a>
	                    <ul className="dropdown-menu dropdown-user">
	                        <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
	                        </li>
	                        <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
	                        </li>
	                        <li className="divider"></li>
	                        <li>
	                        	<a href="#" onClick={() => {this.onLoginOut()}}>
	                        		<i className="fa fa-sign-out fa-fw"></i> 
	                        		退出登录
	                        	</a>
	                        </li>
	                    </ul>
	                </li>
	            </ul>
        	</div>
		);
	}
} 

export default TopNav;