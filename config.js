/* Created by Teja on 28/1/2017. */

app.run(run).config(config);
run.$inject=["$rootScope","$localStorage","$location"];
function run($rootScope,$localStorage,$location){
    $rootScope.$on("$stateChangeStart",function(e,toState,toParams,fromState,fromParams){
        if(!($localStorage.user_details)){
            $location.path("/login");
        }
    });
}


    config.$inject=["$stateProvider","$urlRouterProvider"];
    function config($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");

        $stateProvider.state("login", {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: "loginController"
        })
            .state("home", {
                url: "/home",
                templateUrl: "templates/home.html",
                controller: "homeController"
            })

            .state("login.register",{
                url:"/register",
                templateUrl:"templates/register.html",
                controller:"registerController"
        })

            .state("login.forgot",{
                url:"/forgot",
                templateUrl:"templates/forgot.html",
                controller:"forgotController"
        })

            .state("home.about",{
                url:"/about",
                templateUrl:"templates/about.html",
                controller:"aboutController"
        })

            .state("home.contact",{
                url:"/contact",
                templateUrl:"templates/contact.html",
                controller:"forgotController"
        })
            .state("home.html5",{
                url:"/html5",
                templateUrl:"templates/html5.html",
                controller:"html5Controller"
            })
            .state("home.css",{
                url:"/css",
                templateUrl:"templates/css.html",
                controller:"cssController"
            })
            .state("home.bootstrap",{
                url:"/bootstrap",
                templateUrl:"templates/bootstrap.html",
                controller:"bootstrapController"
            })
            .state("home.javascript",{
                url:"/javascript",
                templateUrl:"templates/javascript.html",
                controller:"javascriptController"
            })
            .state("home.jquery",{
                url:"/jquery",
                templateUrl:"templates/jquery.html",
                controller:"jqueryController"
            })
            .state("home.angular",{
                url:"/angular",
                templateUrl:"templates/angular.html",
                controller:"angularController"
        });
    }
