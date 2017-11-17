(function () {

    angular
        .module("app")
        .controller("WeatherController", WeatherController);

    WeatherController.$inject = ['AppFactory','orderByFilter'];

    function WeatherController(AppFactory,$orderByFilter) {
        var vm = this;
        vm.user = {};

        vm.user.mobileno = 9876543210;
        vm.items = ['Code 1', 'Code 2', 'Code 3', 'Code 4'];
        vm.selection = vm.items[0];
        vm.mobileNoRegex = '^[0-9](\.{9})+$';
        vm.addForm = addForm;

        vm.templates =
            [{ name: 'google', url: 'template1.html' },
            { name: 'yahoo', url: 'template2.html' }];

        function addForm(formObj) {
            if(formObj.$valid) {
                console.log('Valid form');
            }else{
                console.log("Error");
            }
        }
        AppFactory.showWeather()
            .then(
            function (response) {
                console.log("response",response);
                vm.dataWeather = response;
            },
            function (error) {
                console.log(error);
            });

        /*
        $http.get('https://samples.openweathermap.org/data/2.5/forecast/daily?id=1255364&appid=b1b15e88fa797225412429c1c50c122a1', true).then(
            function (response) {
                vm.weatherData = response.data;
                console.log(response.data);
            }, function () {
                console.log("error");
            });
        */
    }
})();