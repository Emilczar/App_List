(function () {
    const app = angular.module('dbService', [])

    // service do pobierania całej listy TODO
    app.factory('dbList', ['$http', ($http) => {

        const _getList = (cb) => {
            cb = cb || function () {};
            $http.get('http://localhost:3000/api/lists')
                .then((data) => {
                    cb(data);
                })
        }
        // funkcja do pobierania danych z wybranej listy 
        const _getIdList = (id,cb)=>{
            cb = cb|| function(){};
            
            $http.get('http://localhost:3000/api/lists/'+id)
            .then((res) => {
                console.log(`cb dbIdList :  ${JSON.stringify(res.data.list)}`)
                cb(res)
            })
            .catch((err)=>{
                console.log(`error dbIdList :  ${err}`)
            })
        }
        // funkcja do dodawania wybranej listy TODO kolejnego zadania
        const _addList = (id, data)=>{  
            $http.put('http://localhost:3000/api/lists/'+id , data)
            .then((data)=>{
                console.log(`editList :  ${data}`)
            })
            .catch((err)=>{
                console.log(`error dbIdList :  ${err}`)
            })
        }
        // funkcja do create new list

        const _createList = (data)=>{
            $http.post('http://localhost:3000/api/new' ,data)
            .then((data)=>{
                console.log(`newList :  ${data}`)
            })
            .catch((err)=>{
                console.log(`error newList :  ${err}`)
            })
        }

        return {
            getList: _getList,
            getIdList: _getIdList,
            addList: _addList,
            createList: _createList
        };
    }])


 

  


})();