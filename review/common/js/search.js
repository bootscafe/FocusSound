google.load('search', '1');
 
function getQuery() {
var url = '' + window.location;
var queryStart = url.indexOf('?') + 1;
if (queryStart > 0) {
var parts = url.substr(queryStart).split('&');
for (var i = 0; i < parts.length; i++) {
if (parts[i].length > 2 && parts[i].substr(0, 2) == 'q=') {
return decodeURIComponent(parts[i].split('=')[1].replace(/\+/g, ' '));
}
}
}
return '';
}
 
function onLoad() {
var customSearchControl = new google.search.CustomSearchControl('000608553281753081131:pu084ddpqtw');
var drawOptions = new google.search.DrawOptions();
drawOptions.setInput(document.getElementById('hidden-input'));
customSearchControl.draw('results', drawOptions);
customSearchControl.execute(getQuery());
customSearchControl.setLinkTarget(google.search.Search.LINK_TARGET_SELF);
}
google.setOnLoadCallback(onLoad);