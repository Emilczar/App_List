(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/index.html',
    '<!doctype html>\n' +
    '<html lang="pl" ng-app="myApp">\n' +
    '\n' +
    '<head>\n' +
    '    <base href="/">\n' +
    '    <meta charset="UTF-8">\n' +
    '    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
    '    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n' +
    '    <title>Title</title>\n' +
    '    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"\n' +
    '        crossorigin="anonymous">\n' +
    '\n' +
    '    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>\n' +
    '    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>\n' +
    '    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"\n' +
    '        crossorigin="anonymous"></script>\n' +
    '    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>\n' +
    '    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>\n' +
    '    <script src="/js/app.js"></script>\n' +
    '    <script src="/js/service/service.js"></script>\n' +
    '    <link rel="stylesheet" href="/css/main.css">\n' +
    '</head>\n' +
    '\n' +
    '<body>\n' +
    '\n' +
    '\n' +
    '\n' +
    '    <div class="container-fluid"> \n' +
    '        <nav>\n' +
    '        <ul class="nav nav-pills nav-stacked flex-column">\n' +
    '            <li class="nav-item">\n' +
    '                <a href="/new" class="nav-link " ><h4>Nowe</h4></a>\n' +
    '            </li>\n' +
    '            <li class="nav-item">\n' +
    '                <a href="/lists" class="nav-link"><h4>Lista</h4></a>\n' +
    '            </li>\n' +
    '            <li class="nav-item disabled">\n' +
    '                <a href="/" class="nav-link"><h4>Historia</h4></a>\n' +
    '            </li>\n' +
    '        </ul>    \n' +
    '    </nav>\n' +
    '    <div ng-view>\n' +
    '    </div>\n' +
    '</div>\n' +
    '</body>\n' +
    '\n' +
    '</html>');
}]);
})();
