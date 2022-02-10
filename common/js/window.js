$(document).ready( function () {
    $("a[href^='http']:not([href*='focussound.jp'],[href*='select.clairlaw.jp'],[href*='review.clairlaw.jp'],[href*='feature.clairlaw.jp'],[href*='news.clairlaw.jp'],[href*='item.clairlaw.jp'])").attr('target', '_blank');
})