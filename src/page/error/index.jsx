import React , { Component }from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';

import 'component/layout/theme.css';
import './index.scss';


class ErrorPage extends Component {

	render() {
		return (
			<div id="page-wrapper">
				<PageTitle title="出错啦!" />
				<div className="row">
					<div className="col-md-12">
						<span className="error-style">好像哪里出错了,找不到该路径</span>
						<Link to="/">点我返回首页</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ErrorPage;
