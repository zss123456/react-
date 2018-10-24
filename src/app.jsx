import React from 'react';
import ReactDom from 'react-dom';


import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './app.scss';


ReactDom.render(
	<div>
		<i className="fa fa-car"></i>
		<h1>Hello,React</h1>
	</div>,
	document.getElementById("root")

)