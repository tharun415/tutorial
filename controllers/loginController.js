/* Created by Teja on 28/1/2017. */

     app.controller("loginController",loginController);
     loginController.$inject=["$scope","$location","loginService","$localStorage"];
     function loginController($scope,$location,loginService,$localStorage){
         $scope.login_details=function (data) {
             if ((loginService.authenticate(data))=='Success'){
                 $localStorage.user_details=data;
                 $location.path("/home");
             }else{
                 alert("Invalid Details");
             }
         };


     }