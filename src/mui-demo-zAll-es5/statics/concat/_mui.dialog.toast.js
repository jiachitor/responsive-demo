(function($, window) {
	/**
	 * 自动消失提示框
	 */
	$.toast = function(message) {
		if ($.os.plus) {
			//默认显示在底部；
			$.plusReady(function() {
				plus.nativeUI.toast(message, {
					verticalAlign: 'bottom'
				});
			});
		} else {
			var toast = document.createElement('div');
			toast.classList.add('mui-toast-container');
			toast.innerHTML = '<div class="' + 'mui-toast-message' + '">' + message + '</div>';
			document.body.appendChild(toast);
			setTimeout(function() {
				document.body.removeChild(toast);
			}, 2000);
		}
	};

})(mui, window);