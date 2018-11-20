
import React , { Component }from 'react';

import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';
import './index.scss';

const _mm = new MUtil();
const _user = new User();

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			redirect: _mm.getUrlParam('redirect') || '/'
		}

	}

	componentWillMount() {
		document.title = "登录 - HAPPY MMALL";
	}
	// 获取输入的用户名和密码,
	handleChange(inputProp,event) {
		let newState = {};
		newState[inputProp] = event.target.value;
		this.setState(newState);
	}

	onSubmit() {
		let loginInfo = {
			username: this.state.username,
			password: this.state.password
		};

		// 用户名和密码验证结果
		let checkResult = _user.checkLoginInfo(loginInfo);

		// 验证通过
		if(checkResult.status) {
			_user.login(loginInfo).then((res) => {

				_mm.setStorage('userInfo',res);		// 本地存储用户信息
				// console.log(typeof _mm.setStorage);
				this.props.history.push(this.state.redirect);

			}, (errMsg) => {
				_mm.errorTips(errMsg);	
			});
		 } else {	// 验证不通过
			_mm.errorTips(checkResult.msg);
		}
	}

	onInputKeyUp(e) {
		if(e.keyCode === 13) {
			this.onSubmit();
		}
	}

	render() {
		return (
			<div className="col-md-4 col-md-offset-4">
				<div className="panel panel-default login-top">
					<div className="panel-heading">欢迎登录</div>
					<div className="panel-body">
						<div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">用户名</label>
								<input type="text"
									   className="form-control" 
									   placeholder="用户名"
									   onKeyUp={e => {this.onInputKeyUp(e)}}
									   onChange = {this.handleChange.bind(this,"username")}/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">密码</label>
								<input type="password"
									   className="form-control"
									   placeholder="密码"
									   onKeyUp={e => {this.onInputKeyUp(e)}}
									   onChange = {this.handleChange.bind(this,"password")}/>
							</div>
							<button className="btn btn-primary btn-lg btn-block"
									onClick = {e => {this.onSubmit()}}>Submit</button>
						</div>
					</div>
				</div>	
			</div>
		);
	}
}

export default Login;