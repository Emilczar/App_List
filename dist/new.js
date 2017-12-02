(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/new.html',
    '<div class="container">\n' +
    '    <div class="nameID">\n' +
    '        <h1>NEW</h1>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class=" box">\n' +
    '        <div class="box1 form-group">\n' +
    '            <div class="row">\n' +
    '                <div class="col-sx-1">\n' +
    '                    <label for="name">Nazwa</label>\n' +
    '                </div>\n' +
    '                <div class="col col-sx-4">\n' +
    '                    <input type="text" class="form-control" name="name" id="SendList" aria-describedby="helpId" placeholder="">\n' +
    '                </div>\n' +
    '                <div class="col col-sx-4">\n' +
    '\n' +
    '                        <button   type="submit" class="btn btn-primary" ng-click="createList()">SEND</button>\n' +
    '                  \n' +
    '                    </div>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '            /** wyswietlanie danych na liscie  */\n' +
    '            <div class="boxList">\n' +
    '                <h4>Lista</h4>\n' +
    '            </div>\n' +
    '            <div class="row">\n' +
    '                <table class="table table-striped table-inverse">\n' +
    '                    <thead>\n' +
    '                        <tr>\n' +
    '                            <th>#</th>\n' +
    '                            <th>nazwa</th>\n' +
    '                            <th>Edycja</th>\n' +
    '                        </tr>\n' +
    '                    </thead>\n' +
    '                    <tbody ng-repeat="x in ListaNew track by $index">\n' +
    '                        <tr>\n' +
    '                            <td scope="row"></td>\n' +
    '                            <td class="col-sx-9">{{x.name}}</td>\n' +
    '                            <td></td>\n' +
    '                        </tr>\n' +
    '\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '             \n' +
    '\n' +
    '\n' +
    '                /** input dodawania do listy */\n' +
    '                <div class="row">\n' +
    '\n' +
    '                    <div id="newAdd" class="col-sx-4">\n' +
    '                        <input type="text" class="form-control" name="Zadanie" id="Zadanie" aria-describedby="helpId" placeholder="">\n' +
    '                    </div>\n' +
    '                    <div id="newAdd" class="col col-sx-4">\n' +
    '                        <button type="submit" class="btn btn-primary" ng-click="addToList()">ADD</button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                /**-----------------------------*/\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>');
}]);
})();
