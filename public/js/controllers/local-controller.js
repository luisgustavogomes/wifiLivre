angular.module('wifilivre').controller('LocalController', function($scope, $http) {
    $scope.locais = [];
    $scope.filtro = '';
    $http.get('http://www.portoalegrelivre.com.br/php/services/WSPoaLivreRedes.php')
        .success(function(locais) {
            $scope.locais = locais;
        })
        .error(function(erro) {
            console.log(erro);
        });

});