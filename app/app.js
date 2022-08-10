let myApp = angular.module('MyAngularApp',['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/home',{templateUrl: 'views/home.html'})
    .when('/about',{templateUrl: 'views/about.html'})
    .when('/students',{templateUrl: 'views/students.html', controller: 'MyAngularController'})
    .when('/gallery',{templateUrl: 'views/gallery.html'})
    .when('/contact',{templateUrl: 'views/contact.html'})
    .otherwise({redirectTo: '/home'});

}]);

myApp.controller('MyAngularController', ['$scope',function($scope){

    $scope.removeStd =  function(std){
        let removeStd = $scope.students.indexOf(std);
        $scope.students.splice(removeStd,1);
    };
    $scope.addStd = function(){
        $scope.students.push({
            name:$scope.newStd.Name,
            marks:parseInt($scope.newStd.Marks),
            sal:parseInt($scope.newStd.Sal),
            p:true
        });
        $scope.newStd.Name="";
        $scope.newStd.Marks="";
        $scope.newStd.Sal="";

    };        
    $scope.students = [
        {name:'Shamir',marks:20,sal:15000,p:true,thumb:"../contents/img/std01.jfif"},
        {name:'Hamza',marks:10,sal:12000,p:false,thumb:"../contents/img/std02.jfif"},
        {name:'Mannan',marks:12,sal:16000,p:true,thumb:"../contents/img/std03.jfif"},
        {name:'Shazar',marks:18,sal:17000,p:true,thumb:"../contents/img/std04.jfif"},
        {name:'Talal',marks:19,sal:11000,p:true,thumb:"../contents/img/std05.jfif"},
        {name:'Osama',marks:9,sal:1000,p:false,thumb:"../contents/img/std06.jfif"},
        {name:'Maisum',marks:20,sal:19000,p:true,thumb:"../contents/img/std07.jfif"}
    ]

}]);