var jenkinsControllers = angular.module('jenkinsControllers', []);
jenkinsControllers.controller('JobsListCtrl', ['$scope' ,'$http', function($scope, $http) {
    $scope.jobs = new Array;
    $scope.config = config;
    angular.forEach(config['jenkins'], function(url, name){
        console.log(url);
        $http.get(url + 'api/json?tree=jobs[name,color,url]').success(function(data) {
              angular.forEach(data['jobs'], function(job){
                job['jenkinsserver'] = name;
                if (job['color'] == 'notbuilt') {
                    job['icon'] = 'disabled';
                } else {
                    job['icon'] = job['color'];
                }
                $scope.jobs.push(job);
              });
        });
    });
        console.log($scope.jobs)
}]);
