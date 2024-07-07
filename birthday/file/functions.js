

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	// Ngày hiện tại
	var now = new Date();

// Ngày bắt đầu: 8 tháng 3 năm 3024
	var startDate = new Date(2024, 3, 8); // Tháng 2 là tháng 3 vì tháng trong JavaScript bắt đầu từ 0

// Tính số ngày đã trôi qua
	var timeDiff = now - startDate;
	var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// Tính số giờ hiện tại
	var hours = now.getHours();

// Tính số phút hiện tại
	var minutes = now.getMinutes();

// Tạo chuỗi kết quả
	var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes + "</span>";

// Cập nhật HTML của phần tử #clock
	$("#clock").html(result);


	var text = "My world is more beautiful with you";
	$("#message-box").html(text);

}
