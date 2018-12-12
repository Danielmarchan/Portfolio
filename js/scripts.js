/*****************************************************************************
	CONTACT FORM - you can change your notification message here
*****************************************************************************/
   $(document).ready(function(){	
			$("#ajax-contact-form").submit(function() {
				var str = $(this).serialize();		
				$.ajax({
					type: "POST",
					url: "contact_form/contact_process.php",
					data: str,
					success: function(msg) {
						// Message Sent - Show the 'Thank You' message and hide the form
						if(msg == 'OK') {
							result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
							$("#fields").hide();
						} else {
							result = msg;
						}
						$('#note').html(result);
					}
				});
				return false;
			});	
			
// preloader
$(window).load(function() { $('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({'overflow':'visible'});
		})
			
/*****************************************************************************
	CSS3 ANIMATIONS
*****************************************************************************/
	jQuery('.fadeIn').appear(function() {
		$('.fadeIn').each(function(){
			$(this).addClass("fadeIn");
		});
	});
	jQuery('.hi-icon-fade').appear(function() {
		$('.hi-icon-fade').each(function(){
			$(this).addClass("fadeIn");
		});
	});
	jQuery('.grida').appear(function() {
		$('.grida').each(function(){
			$(this).addClass("slideRight");
		});
	});
	jQuery('.pricing').appear(function() {
		$('.pricing').each(function(){
			$(this).addClass("slideRight");
		});
	});
	jQuery('.top').appear(function() {
		$('.top').each(function(){
			$(this).addClass("bounce");
		});
	});
	jQuery('.pie').appear(function() {
		$('.pie').each(function(){
			$(this).addClass("fadeIn");
		});
	});
	jQuery('.counter').appear(function() {
		$('.counter').each(function(){
			$(this).addClass("fadeIn");
		});
	});
	jQuery('.fadeit').appear(function() {
		$('.fadeit').each(function(){
			$(this).addClass("fadeIn");
		});
	});
	jQuery('.fadeit2').appear(function() {
		$('.fadeit2').each(function(){
			$(this).addClass("fadeIn");
		});
	});
	
// carousel quotes speed, tooltip, nav collapde, modal box
jQuery('.carousel2').carousel({ interval: 4000})
$('[data-toggle="tooltip"]').tooltip({ 'placement': 'top' })
jQuery('.navbar .nav > li > a').click(function(){
jQuery('.navbar .in').removeClass('in').addClass('collapse').css('height', '0');
$('.modal').bigmodal('hide');
});

/*****************************************************************************
	GOOGLE MAP - ADD YOUR ADDRESS HERE
******************************************************************************/	
$(window).load(function() {
	$(".google-maps").gmap3({
    marker:{     
address:"23, Mornington Crescent, London",  options:{icon: "img/marker.png"}},
    map:{
      options:{
	zoom: 16,
	scrollwheel:false,
	mapTypeControl: false,
    scaleControl: false,
    zoomControl: false,
	disableDefaultUI: true,
	draggable: false}
		} });	
	});	
});

// header shrink
$(window).scroll(function () {
    if ($(document).scrollTop() == 0) {
        $('.header').removeClass('tiny');
    } else {
        $('.header').addClass('tiny');
    }
});
// navigation
$('.nav').localScroll(6000);
$('#top').localScroll(6000);
	
/*****************************************************************************
	PIE CHART - ADD YOUR PERCENTAGES & BAR COLOUR HERE
******************************************************************************/
!function(a,b){"object"==typeof exports?module.exports=b(require("jQuery")):"function"==typeof define&&define.amd?define("EasyPieChart",["jQuery"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size,a.appendChild(d);var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(0,c||1),1),e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,!1),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c,d=24;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)0===d%6?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.lineWidth)};this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,a>0&&h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate),g=b.easing(this,f,a,c-a,b.animate);this.draw(g),b.onStep(a,c,g),f>=b.animate?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#E84E41",trackColor:"#dddddd",scaleColor:"#8A939A",scaleLength:8,lineCap:"round",lineWidth:8,size:140,rotate:0,animate:1e3,easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));e.easing="string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?jQuery.easing[e.easing]:d.easing,this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),g()};a.fn.easyPieChart=function(b){return this.each(function(){a.data(this,"easyPieChart")||a.data(this,"easyPieChart",new c(this,b))})}});
$(function() {
jQuery('.chart1').appear(function() {
    //create instance
    $('.chart1').easyPieChart({
        animate: 1000, barColor:"#D35400"
	});
setTimeout(function() {
        $('.chart1').data('easyPieChart').update(75);
    }, 1000);
});

jQuery('.chart2').appear(function() {
    //create instance
    $('.chart2').easyPieChart({
        animate: 1000, barColor:"#D35400"
});
    setTimeout(function() {
        $('.chart2').data('easyPieChart').update(60);
    }, 1000);
});

jQuery('.chart3').appear(function() {
    //create instance
    $('.chart3').easyPieChart({
        animate: 1000, barColor:"#D35400"
});
    setTimeout(function() {
        $('.chart3').data('easyPieChart').update(90);
    }, 1000);
	});
});

	
// carousel quotes speed, tooltip, nav collapde, modal box
jQuery('.carousel2').carousel({ interval: 4000})
$('[data-toggle="tooltip"]').tooltip({ 'placement': 'top' })
jQuery('.navbar .nav > li > a').click(function(){
jQuery('.navbar .in').removeClass('in').addClass('collapse').css('height', '0');
$('.modal').bigmodal('hide');
});
	
//stackslider and footer image boxes
$( function() {
	$( '#st-stack' ).stackslider();
	$("#letter-container h2").lettering();
});

//rotator
/* ===========================================================
* jquery-simple-text-rotator.js v1
* ===========================================================
* Copyright 2013 Pete Rojwongsuriya.
* http://www.thepetedesign.com
* https://github.com/peachananr/simple-text-rotator
* ========================================================== */
!function($){var defaults={animation:"dissolve",separator:",",speed:2000};$.fx.step.textShadowBlur=function(fx){$(fx.elem).prop("textShadowBlur",fx.now).css({textShadow:"0 0 "+Math.floor(fx.now)+"px black"})};$.fn.textrotator=function(options){var settings=$.extend({},defaults,options);return this.each(function(){var el=$(this);var array=[];$.each(el.text().split(settings.separator),function(key,value){array.push(value)});el.text(array[0]);var rotate=function(){switch(settings.animation){case"dissolve":el.animate({textShadowBlur:20,opacity:0},500,function(){index=$.inArray(el.text(),array);if((index+1)==array.length){index=-1}el.text(array[index+1]).animate({textShadowBlur:0,opacity:1},500)});break;case"flip":if(el.find(".back").length>0){el.html(el.find(".back").html())}var initial=el.text();var index=$.inArray(initial,array);if((index+1)==array.length){index=-1}el.html("");$("<span class='front'>"+initial+"</span>").appendTo(el);$("<span class='back'>"+array[index+1]+"</span>").appendTo(el);el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({"-webkit-transform":" rotateY(-180deg)","-moz-transform":" rotateY(-180deg)","-o-transform":" rotateY(-180deg)",transform:" rotateY(-180deg)"});break;case"flipUp":if(el.find(".back").length>0){el.html(el.find(".back").html())}var initial=el.text();var index=$.inArray(initial,array);if((index+1)==array.length){index=-1}el.html("");$("<span class='front'>"+initial+"</span>").appendTo(el);$("<span class='back'>"+array[index+1]+"</span>").appendTo(el);el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({"-webkit-transform":" rotateX(-180deg)","-moz-transform":" rotateX(-180deg)","-o-transform":" rotateX(-180deg)",transform:" rotateX(-180deg)"});break;case"flipCube":if(el.find(".back").length>0){el.html(el.find(".back").html())}var initial=el.text();var index=$.inArray(initial,array);if((index+1)==array.length){index=-1}el.html("");$("<span class='front'>"+initial+"</span>").appendTo(el);$("<span class='back'>"+array[index+1]+"</span>").appendTo(el);el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({"-webkit-transform":" rotateY(180deg)","-moz-transform":" rotateY(180deg)","-o-transform":" rotateY(180deg)",transform:" rotateY(180deg)"});break;case"flipCubeUp":if(el.find(".back").length>0){el.html(el.find(".back").html())}var initial=el.text();var index=$.inArray(initial,array);if((index+1)==array.length){index=-1}el.html("");$("<span class='front'>"+initial+"</span>").appendTo(el);$("<span class='back'>"+array[index+1]+"</span>").appendTo(el);el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({"-webkit-transform":" rotateX(180deg)","-moz-transform":" rotateX(180deg)","-o-transform":" rotateX(180deg)",transform:" rotateX(180deg)"});break;case"spin":if(el.find(".rotating").length>0){el.html(el.find(".rotating").html())}index=$.inArray(el.text(),array);if((index+1)==array.length){index=-1}el.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(array[index+1]).show().css({"-webkit-transform":" rotate(0) scale(1)","-moz-transform":"rotate(0) scale(1)","-o-transform":"rotate(0) scale(1)",transform:"rotate(0) scale(1)"});break;case"fade":el.fadeOut(settings.speed,function(){index=$.inArray(el.text(),array);if((index+1)==array.length){index=-1}el.text(array[index+1]).fadeIn(settings.speed)});break}};setInterval(rotate,settings.speed*2)})}}(window.jQuery);
    $(".rotate").show();
		$(".rotate").textrotator({
	      animation: "fade",
	      separator: "*",
	      speed: 2000
	    });

//modal	
	;(function($){
	function update(modal) {
		modal.find('.modal-body').outerHeight(
			modal.innerHeight() -
			modal.find('.modal-header').outerHeight() -
			modal.find('.modal-footer').outerHeight()
		);
	}

	if ($.fn.modal) {
		var bigmodals = $(),
				modal;

		$(window).resize(function() {
			bigmodals.filter(':visible').each(function() {
				update($(this));
			});
		});

		$.fn.bigmodal = function(option) {
			var ret = $.fn.modal.apply(this, arguments);
			this.addClass('bigmodal');
			bigmodals = bigmodals.add(this);
			this.on('shown', function(){
				update($(this));
			});
			return ret;
		};
	}
	else {
		$.fn.bigmodal = function(option){
			return this;
		};
	}
}(window.jQuery));

/*****************************************************************************
	PARALLAX BACKGROUNDS
******************************************************************************/
( function ( $ ) {
'use strict';
$(document).ready(function(){
$(window).bind('load', function () {
		parallaxInit();						  
	});
	function parallaxInit() {
		testMobile = isMobile.any();
		if (testMobile == null)
		{
	$('#Section-top .well').parallax("0%", 0.4); 
	$('#Section-1 .well').parallax("0%", 0.3); 
	$('#Section-2 .well').parallax("0%", 0.3); 
	$('#Section-bigstats .well').parallax("0%", 0.3); 
		}
	}	
	parallaxInit();	 
});	
//Mobile Detect
var testMobile;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
}( jQuery ));
	

