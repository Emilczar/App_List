(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/edycja_id.html',
    '<div class="container">\n' +
    '    \n' +
    '    <h3>edycja_list</h3>\n' +
    '</div>');
}]);
})();
