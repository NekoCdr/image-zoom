/* Image Zoom v0.1 | Copyright (c) 2016 Yuri Istomin <https://github.com/intro94> | MIT License (MIT) */

function ZoomOnClick(th)
{
	var ImgUrl	= $(th).attr('data-zoom-content');
	var BoxSize	= $(th).attr('data-zoom-size').split(',');
	
	$('#zoom-box').css({'width': BoxSize[0], 'height': BoxSize[1]});
	$('#zoom-box .image-wrapper').css({'background-image': 'url('+ImgUrl+')'});
	$('#zoom-wrapper').css({'display': 'block'});
}
$(function(){
	$('.image-zoom').click(function(){
		ZoomOnClick(this);
	});
	$('body').on('click', '#zoom-substrate', function(){
		$('#zoom-wrapper').css({'display': 'none'});
	});
	$('body').on('click', '.zoom-box-close', function(){
		$('#zoom-wrapper').css({'display': 'none'});
	});
});
$(document).ready(function(){
	var $ZoomWrapper = $('<div id="zoom-wrapper"><div id="zoom-substrate"></div><div id="zoom-box"><div class="image-wrapper"></div><div class="zoom-box-close">Закрыть</div></div></div>');
	$(document.body).append($ZoomWrapper);
});