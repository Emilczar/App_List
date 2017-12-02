(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/lists.html',
    '<div class="container">\n' +
    '    \n' +
    '<div class="nameID">\n' +
    '<h1>lista</h1>\n' +
    '</div>\n' +
    '<div class="lista">\n' +
    '<div ng-repeat="x in lists">\n' +
    '        <div class="list-group ">\n' +
    '                <a href="/lists/{{x._id}}" class="list-group-item list-group-item-action"> <h5>{{x.name}}</h5></a>\n' +
    '        </div>      \n' +
    '    </div>\n' +
    '</div>\n' +
    '</div>\n' +
    '');
}]);
})();
