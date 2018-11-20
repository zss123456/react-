
class MUtil {
	request(param) {
		return new Promise((resolve,reject) => {
			$.ajax({
				type: param.type || 'get',
				url: param.url || '',
				dataType: param.dataType || 'json',
				data: param.data || null,
				success: res => {

	            	if(res.status === 0) {		// 请求成功
	            		typeof resolve ==='function' && resolve(res.data,res.msg);

	            	} else if(res.status === 10) {		// 用户未登录
						this.doLogin();
	            	} else {		// 请求失败
	            		typeof reject === 'function' && reject(res.msg || res.data);
	            	}
				},
				error: err => {	// 错误处理

					typeof reject === 'function' && reject(err.statusText);
				}
			});
		});
	}

	// 登录成功后页面跳转
	doLogin() {
		window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
	}

	// 获取路径
	getUrlParam(name) {
		let queryString = window.location.search.split('?')[1] || '',
			reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
			result = queryString.match(reg);

		return result ? decodeURIComponent(result[2]) : null;
	}

	// 错误提示
	errorTips(errMsg) {
		alert(errMsg || "好像哪里出错了哦~~~");
	}

	// 本地存储
	setStorage(name,data) {
		let dataType = typeof data;

		if(dataType === 'object') {
			window.localStorage.setItem(name,JSON.stringify(data));
		} else if(['number','string','boolean'].indexOf(dataType) >= 0) {
			window.localStorage.setItem(name,data);
		} else {
			alert('该类型不支持本地存储');
		}
	}

	// 获取本地存储
	getStorage(name) {
		let data = window.localStorage.getItem(name);

		if(data) {
			return JSON.parse(data);
		} else {
			return '';
		}
	}

	// 删除本地存储
	removeStorage(name) {
		window.localStorage.removeItem(name);
	}
}

export default MUtil;