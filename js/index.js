window.onload = function () {
	//搜索框
	(function (key) {
		var lis = document.getElementById('search_m').getElementsByTagName('a');
		for (var i = 0; i < lis.length; i++) {
			if (i == key) {
				lis[i].className = "active"
			}
			lis[i].onclick = function () {
				for (var j = 0; j < lis.length; j++) {
					if(lis[j].className) {
						lis[j].className = ""
					}
				}
				this.className = "active";
				return false
			}
		}
	})(0);

	//轮播图
	(function loop() {
		var box = document.getElementById('loop_box');
		var pic = document.getElementById('loop_pic');
		var prev = document.getElementById('prev');
		var next = document.getElementById('next');
		var butt = document.getElementById('loop_butt').getElementsByTagName('a');
		function moving (num) {
			var newLeft = parseInt(pic.style.left) + num;
			if (newLeft < -2600) {
				newLeft = -520;
			}
			if (newLeft > -520) {
				newLeft = -2600;
			}
			pic.style.left = newLeft + "px";
		}

	    // var timer;
		var play = function () {
		    timer = setInterval(function () {   //自动播放
		        next.onclick()
		    }, 3000)
		}
		play();
		var stop = function () {	//停止播放
	        clearInterval(timer);
	    }

		var index = 1;   //css样式为(-520)第一张
		prev.onclick = function () { //点击向前一张
			index -= 1;
	        if (index < 1) {
	            index = 5;
	        }
	        buttonsShow();
			moving (520);
			return false;
		}
		next.onclick = function () {  //点击向后一张
			index += 1;
	        if (index > 5) {
	            index = 1;
	        }
	        buttonsShow();
			moving (-520);
			return false;
		}
	    for (var i = 0; i < butt.length; i++) {
            butt[i].onclick = function () {
                var clickIndex = parseInt(this.getAttribute('index'));
                var num = 520* (index - clickIndex); //当前图片停留时的index
                moving(num);
                index = clickIndex; //存放鼠标点击后的位置
                buttonsShow();
                return false;
            }
	    }
		function buttonsShow() {
	        for (var i = 0; i < butt.length; i++) {//将之前的小圆点的样式清除
	            if (butt[i].className == "onclick") {
	            	butt[i].className = "";
	            }
	        }
	        butt[index - 1].className = "onclick";  //比如index为"3"的小圆点只在butt中对应的下标为"3-1"
	    }
		// box.onmouseover = stop;
	    // box.onmouseout = play;
	})();


	(function loop2() {
		var box = document.getElementById('loop_box_down');
		var number = document.getElementById('showNum');
		var pic = box.getElementsByTagName('ul');
		var butt = box.getElementsByTagName('div')[0].getElementsByTagName('a');
		var next = box.getElementsByTagName('a')[box.getElementsByTagName('a').length-1];
		var prev = next.previousSibling;
		function moving (num) {
			var newLeft = parseInt(pic[0].style.left) - num;
			if (newLeft < -2600) {
				newLeft = 0;
			}
			if (newLeft > 0) {
				newLeft = -2600;
			}
			pic[0].style.left = newLeft + "px";
		}

		var play = function () {
		    timer = setInterval(function () {   //自动播放
		        next.onclick()
		    }, 2000)
		}
		play();
		var stop = function () {	//停止播放
	        clearInterval(timer);
	    }

	    var index = 1;
		prev.onclick = function () { //点击向前一张
			index -= 1;
	        if (index < 1) {
	            index = 6;
	        }
	        buttonsShow();
			moving (-520);
			return false;
		}
		next.onclick = function () {  //点击向后一张
			index += 1;
	        if (index > 6) {
	            index = 1;
	        }
	        buttonsShow();
			moving (+520);
			return false;
		}
		for (var i = 0; i < butt.length; i++) {
            butt[i].onclick = function () {
                var clickIndex = parseInt(this.getAttribute('index'));
                var num = 520* (index - clickIndex);
                moving(num);
                index = clickIndex;
                buttonsShow();
                return false;
            }
	    }

		function buttonsShow() {
	        for (var i = 0; i < butt.length; i++) {//将之前的小圆点的样式清除
	            if (butt[i].className == "onclick") {
	            	butt[i].className = "";
	            }
	        }
	        butt[index - 1].className = "onclick";
	        number.innerHTML = index;
	    }
		box.onmouseover = stop;
	    box.onmouseout = play;
	})();


	//广告
	(function ad(key) {
		var adUp = document.getElementById('ad_up').getElementsByTagName('a');
		var adDown = document.getElementById('ad_down').getElementsByTagName('div');
		for (var i = 0; i < adUp.length; i++) {
			if (i == key) {
				adUp[i].className = "show";
				adDown[i].style.display = "block";
			}
			(function(i){
				adUp[i].onmouseover = function () {
					for (var j = 0; j < adUp.length; j++) {
						if (adUp[j].className) {
							adUp[j].className = "";
						}
						if (adDown[j].style.display == "block") {
							adDown[j].style.display = "none";
						}	
					}
					adUp[i].className = "show";
					adDown[i].style.display = "block";
				}
			})(i)
		}
	})(0);
}