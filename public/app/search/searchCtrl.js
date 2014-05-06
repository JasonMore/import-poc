app.controller('searchCtrl', function ($scope, $location) {
  // search filters

  var currentSearch = $location.search();

  $scope.countOptions = ["50", "100", "150", "200", "250", "500"];
  $scope.count = currentSearch.count;

  $scope.fiscalWeekOptions = {
    '2013-12-01': 'Dec 2014 Wk 1',
    '2013-12-08': 'Dec 2014 Wk 2',
    '2013-12-15': 'Dec 2014 Wk 3',
    '2013-12-22': 'Dec 2014 Wk 4',
    '2013-12-29': 'Dec 2014 Wk 5',
    '2014-01-05': 'Jan 2014 Wk 1',
    '2014-01-19': 'Jan 2014 Wk 2',
    '2014-01-26': 'Jan 2014 Wk 3'
  };

  $scope.fiscalWeek = currentSearch.fiscalWeek;


  $scope.$watchCollection('{count:count, fiscalWeek:fiscalWeek}', function(newVal){
    var noNulls = _.omit(newVal, function(item){ return !item});
    $location.search(noNulls);
  });
});