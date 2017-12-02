(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/inne.html',
    '<div>\n' +
    '\n' +
    '<h1>Inne</h1>\n' +
    '\n' +
    '</div>');
}]);
})();
