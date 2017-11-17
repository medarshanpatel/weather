(function () {
    angular
        .module("app")
        .factory("AppFactory", AppFactory);

    AppFactory.$inject = ['$http', '$q'];

    function AppFactory($http, $q) {

        return {
            showWeather: showWeather
        };

        function showWeather() {
            var deferred = $q.defer();
            return $http.get('https://samples.openweathermap.org/data/2.5/forecast/daily?id=1255364&appid=b1b15e88fa797225412429c1c50c122a1', true)
                .then(function (response) {
                    deferred.resolve(response.data);
                    return deferred.promise;
                })
                .catch(function () {
                    deferred.reject("Something is wrong ");
                    return deferred.promise;
                });

        }
    }
})();