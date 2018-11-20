

import React , { Component }from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';

import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

import 'rc-pagination/dist/rc-pagination.min.css';
import 'component/layout/theme.css';

const _mm = new MUtil();
const _user = new User();

class UserList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			list: [],
			pageNum: 1,
			firstLoading: true
		}
	}

	componentDidMount() {
		this.loadUserList();
	}

	loadUserList() {
		_user.getUserList(this.state.pageNum).then(
			res => {
				this.setState(res,() => {
					this.setState({
						firstLoading: false
					});
				});
			}).catch(errMsg => {
				_mm.errorTips(errMsg);
			});
	}

	onPageNumChange(pageNum) {
		this.setState({
			pageNum: pageNum
		},() => {
			this.loadUserList();
		});
	}

	render() {
		let listUser = this.state.list.map((user,index) => {
			return (
				<tr key={index}>
					<td>{user.id}</td>
					<td>{user.username}</td>
					<td>{user.email}</td>
					<td>{user.phone}</td>
					<td>{new Date(user.createTime).toLocaleString()}</td>
				</tr>
			);
		});

		let listError = (
			<tr >
				<td colSpan="5" className="text-center">
					{this.state.firstLoading ? '正在加载数据...' : '啊哦,,,没有获取到数据呀~~~'}
				</td>
			</tr>
		); 

		let listBody = (this.state.list.length > 0 ? listUser : listError); 

		return (
			<div id="page-wrapper">
				<PageTitle title="用户列表" />
				<div className="row">
					<div className="col-md-12">
						<table className="table table-striped table-bordered">
							<thead>
								<tr>
									<th>用户ID</th>
									<th>用户名</th>
									<th>邮箱</th>
									<th>电话</th>
									<th>注册时间</th>
								</tr>
							</thead>
							<tbody>
								{ listBody }
							</tbody>
						</table>
						<Pagination total={this.state.total}
							hideOnSinglePage
							showQuickJumper 
							onChange={(pageNum) => {this.onPageNumChange(pageNum)}} />
					</div>
				</div>
			</div>
		);
	}
}

export default UserList;