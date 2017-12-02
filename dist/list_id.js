(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/list_id.html',
    '<div class="container-fluid">\n' +
    '    \n' +
    '\n' +
    '<div class="nameID">\n' +
    '<h1>{{name}}</h1>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '    \n' +
    '   \n' +
    '\n' +
    '<table class="table table-striped table-inverse">\n' +
    '\n' +
    '    \n' +
    '    <thead>\n' +
    '        <tr>\n' +
    '            <th>#</th>\n' +
    '            <th>nazwa</th>\n' +
    '            <th>Edycja</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '    <tbody ng-repeat="y in list">\n' +
    '        <tr>\n' +
    '            <td scope="row "></td>\n' +
    '            <td>{{y.name}}</td>\n' +
    '            <td></td>\n' +
    '        </tr>\n' +
    '    \n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '\n' +
    '\n' +
    '<a href="/lists/zm/{{id}}">dodaj do listy</a>\n' +
    '\n' +
    '    <button type="submit" class="btn btn-primary" ng-click="addList()" >zmiana</button>\n' +
    '</div>');
}]);
})();
