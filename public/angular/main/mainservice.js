var stoftiApp = angular.module('stoftiApp');

stoftiApp.factory('Users', ['$http', function($http){
    return {
        getUser:  function(id, callback){
            $http.get('/api/user?user_id='+id)
                .success(callback)
        }
    }
}]);
stoftiApp.factory('Read', ['$http', function($http){
    return {
        getContribution: function(id, callback){
            $http.get('/api/read?contrib_id='+id)
                .success(callback)
        },
        voteContribution: function(id, user_id){
            $http.post('/api/vote?contrib_id='+id+'&user_id='+user_id)
                .success(function(){
                    $route.reload()
                })
        }
    }
}]);
stoftiApp.factory('Write', ['$http', function($http){
    return {
        editContribution: function(id, user_id){
            $http.put('/api/write?contrib_id='+id)
                .success(function(){
                    $location.path('/write?user_id='+user_id)
                })
        },
        newContribution: function(user_id){
            $http.post('/api/writenew')
                .success(function(){
                    $location.path('/write?user_id='+user_id)
                })
        }
    }
}]);