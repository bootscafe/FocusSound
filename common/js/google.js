google.load('search', '1', {language : 'ja'});
 
function inputFocus() {
document.getElementById('textfield').style['background'] = '';
}
 
function inputBlur() {
var queryInput = document.getElementById('textfield');
if (!queryInput.value) {
queryInput.style['background'] = 'white url(//www.google.com/coop/images/' + 'google_custom_search_watermark.gif) no-repeat 0% 50%';}
}
 
function init() {
google.search.CustomSearchControl.attachAutoCompletion('000608553281753081131:pu084ddpqtw',document.getElementById('textfield'),'two-page-form');inputBlur();
}
 
function submitQuery() {
window.location = 'http://focussound.jp/search/?q='+ encodeURIComponent(document.getElementById('textfield').value);
return false;
}
google.setOnLoadCallback(init);
