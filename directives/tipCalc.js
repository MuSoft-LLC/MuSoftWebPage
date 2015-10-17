app.directive('tipCalculator',function(){
  return {
        restrict:'E',
        templateUrl:'templates/tipCalc.html',
        scope:{
            options:"="
        },
        transclude:true,
    };
});