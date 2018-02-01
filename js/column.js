var tjwqTitleVal = $('.tjwqtitle').text().trim();
if($(".listbtnz").hasClass("tjwqActive")) {
	var secVal = $('.tjwqActive').text();
}
if(secVal == undefined) {
	$('#tjwqtitlenav').text('欢迎登陆本系统！您当前的位置为:' + tjwqTitleVal);
} else {
	$('#tjwqtitlenav').text('欢迎登陆本系统！您当前的位置为:' + tjwqTitleVal + ' > ' + secVal);
}

$('#tjwqBtn div').click(function() {

	var self = $(this);
	if(self.attr("url") != undefined && self.attr("url") != "") {
		var url = self.attr("url");
		//alert(url);
		$("#mainFrame").attr("src", url);
	}

})
$('#tjwqBtn .listbtnz').click(function() {
	if($(this).next().is(".list_hidegrp")) {
		if($(this).is(".on_xk")) {
			$(this).removeClass("on_xk");
			$(this).next(".list_hidegrp").stop().animate({
				"height": 0
			}, 300);
		} else {
			$(this).addClass("on_xk").siblings(".listbtnz").removeClass("on_xk");
			var _thisheight_ = $(this).next(".list_hidegrp").stop().height();
			var _thisaim_ = $(this).next(".list_hidegrp").css("height", "auto").height();
			$(this).next(".list_hidegrp").css("height", _thisheight_).animate({
				"height": _thisaim_
			}, 300);
			$(this).next(".list_hidegrp").siblings(".list_hidegrp").stop().animate({
				"height": 0
			}, 300);
		}
	} else {
		$(this).addClass("on_xk").siblings(".listbtnz").removeClass("on_xk");
		$(this).siblings(".list_hidegrp").stop().animate({
			"height": 0
		}, 300);
		$('#tjwqBtn .listbtnz').removeClass('tjwqActive');
		$(this).addClass('tjwqActive');
		var tjwqTitleVal = $('.tjwqtitle').text().trim();
		if($(".listbtnz").hasClass("tjwqActive")) {
			var secVal = $('.tjwqActive').children("div").text();
		}
		if(secVal == undefined) {
			$('#tjwqtitlenav').text('欢迎登陆本系统！您当前的位置为:' + tjwqTitleVal);
		} else {
			$('#tjwqtitlenav').text('欢迎登陆本系统！您当前的位置为:' + tjwqTitleVal + ' > ' + secVal);
		}
	}
});
var linkjump = {
	"公文-发文管理": 'File-document-handle-send.html',
	"公文-收文管理": 'File-document-handle-receive.html',
	"简报-发文管理": 'File-briefing-handle-send.html',
	"简报-收文管理": 'File-briefing-handle-receive.html',
	"公文管理": 'File-document-manager.html',
	"我的公文": 'File-document-search.html',
	"我的任务": 'Work-myTask.html',
	"权限管理": 'System-power.html',
	"组织管理": 'System-organization.html',
	"人员管理": 'System-personnel.html',
	"统计查询": 'Statistics-searchInfo.html',
	"档案管理": 'Work-archives-manage.html',
	"值班表": 'statistics-workingshift.html',
	"考核表": 'statistics-check.html',
	"工作计划": 'Work-plan.html',
	"通知通告": 'Work-bulletin.html',
	"收发单位管理": 'unit-file-management.html',
	"回退统计":'Statistics-fallback.html'

}
$(document).on("click", "[frameHref]", function() {
	var _thishref_ = $(this).attr("frameHref");
	if(_thishref_ == undefined || _thishref_ == null || _thishref_ == "") {
		if($(this).children("div").length) {
			_thishref_ = $(this).children("div").text();
		} else {
			_thishref_ = $(this).text();
		}

	}
	if(linkjump[_thishref_] != undefined && linkjump[_thishref_] != null && linkjump[_thishref_] != "") {
		_thishref_ = linkjump[_thishref_];
	}
	try {
		$("#mainFrame").attr("src", _thishref_);
	} catch(e) {
		//TODO handle the exception
	}
})

window.onload = function() {
	var oDiv = document.getElementById('roll');
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var speed = -4;
	var oBtn1 = oDiv.getElementsByTagName('a')[0];
	var oBtn2 = oDiv.getElementsByTagName('a')[1];
	var roll_timer = null;

	oUl.innerHTML += oUl.innerHTML;
	oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';

	//左
	oBtn1.onclick = function() {
		speed = 82;
		oUl.style.left = oUl.offsetLeft + speed + 'px';
		if(oUl.offsetLeft < -oUl.offsetWidth / 2) {
			oUl.style.left = 0 + 'px';
		} else if(oUl.offsetLeft > (0)) {
			oUl.style.left = -oUl.offsetWidth / 2 + 'px';
		}
	}
	//右
	oBtn2.onclick = function() {
		speed = -82;
		oUl.style.left = oUl.offsetLeft + speed + 'px';
		if(oUl.offsetLeft < -oUl.offsetWidth / 2) {
			oUl.style.left = 0 + 'px';
		} else if(oUl.offsetLeft > (0)) {
			oUl.style.left = -oUl.offsetWidth / 2 + 'px';
		}
	}
};

/*--------------------------------*/
/*左侧菜单列表收缩、展开*/
function fnDisplayNavBar(obj) {
	
	//var hw = $(window).width();
	//var lWrap = $('#tjwqBtn').width();
	if($(obj).hasClass("open")) {
		$(obj).removeClass("open");
		$("body").removeClass("big-page");
		$('#tjwqBtn').show();
		$('#tjwqMainframe').css('width', '85%');
	} else {
		$(obj).addClass("open");
		$("body").addClass("big-page");
		$('#tjwqBtn').hide();
		$('#tjwqMainframe').css('width', '100%')
	}
};
/*监听窗口大小、设置右侧容器宽度*/
function resizeWindow() {
	var hw = $(window).width();
	var lWrap = $('#tjwqBtn').width();
	$('#tjwqMainframe').css('width', (hw - lWrap - 2));
};
//resizeWindow();


function resizeBody() {
	var bodyH = $(window).height();
	var headerH = $('#tjwq_header').height();
	var navH = $('#nav').height();
	//console.log(bodyH);
	//console.log(bodyH -headerH -navH );
	$('.pagewrap').css('height', (bodyH - headerH - navH));
	$('#tjwqMainframe_bodybox').css('height', (bodyH - headerH - navH));
};
resizeBody();

function resizeWarp() {
	$('.pngfix').addClass("open");
	$("body").addClass("big-page");
	$('#tjwqBtn').hide();
	$('#tjwqMainframe').css('width', '100%')
}
resizeWarp();

$(window).resize(function() {
	//resizeWindow();
	resizeBody();
	resizeWarp();
});
$("#ui-toggle-1").click(function() {
	$("#ui-content-1").fadeToggle(1000);
});
$("#ui-toggle-2").click(function() {
	$("#ui-content-2").fadeToggle(1000);
});
$("#ui-toggle-3").click(function() {
	$("#ui-content-3").fadeToggle(1000);
});
$("#ui-toggle-4").click(function() {
	$("#ui-content-4").fadeToggle(1000);
});


