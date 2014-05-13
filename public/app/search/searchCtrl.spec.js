describe('searchCtrl.js >', function () {
  beforeEach(module('import-poc'));

  var searchCtrl, $scope, $location;
  beforeEach(inject(function ($rootScope, $controller, _$location_) {
    $scope = $rootScope.$new();
    $location = _$location_;

    $location.search({foo:'bar'});

    searchCtrl = $controller('searchCtrl', {$scope:$scope, $location:$location});
  }));

  it('sets location', function () {
    expect($scope.search).toEqual({foo: 'bar'});
  });

  describe(' >', function () {

  });
});