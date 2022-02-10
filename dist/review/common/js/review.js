$(function() {
	$.bootscafe.heightset("#reviewlist ul",6);
	$.bootscafe.heightset("#backnumber ul li h3",5);
	$.bootscafe.heightset(".category",3);
	$.bootscafe.heightset("#relativereview ul",4);
	$.bootscafe.heightset("#archive ul",4);
	$.bootscafe.heightset("#youtube dl",4);
    $.bootscafe.heightset("#amazon ul",5);

if( $("#youtube dl").length < 1 ){
$("#youtube").css("display", "none");
}

if( $("#amazon ul").length < 1 ){
$("#amazon").css("display", "none");
}

});