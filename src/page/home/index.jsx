import React , { Component }from 'react';
import PageTitle from 'component/page-title/index.jsx';

import './index.css';

class Home extends Component {

	render() {
		return (

			<div id="page-wrapper">
				<PageTitle title="首页">
					<button className="btn btn-warning">警告</button>
				</PageTitle>
				<div className="row">
					<div className="col-md-12">
						你好,世界
					</div>
				</div>
			</div>
		);
	}
}

export default Home;