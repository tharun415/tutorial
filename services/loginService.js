/* Created by Teja on 28/1/2017. */

app.service("loginService",loginService);
loginService.$inject=["$http","$q"];
function loginService($http,$q) {
    this.authenticate=function (data) {
        var uname=data.u_name;
        var upwd=data.u_pwd;

        if(uname=='tharun' && upwd=='tharun'){
            return 'Success';
        }else{
            return 'Failure';
        }
    }
}