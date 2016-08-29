/**
 * Input range directive for different color in AngularJS
 */

helloDemo.directive('colorRange', function () {
    return {
        restrict: 'EA',
        replace: false,
        template: '',

        link: function (scope, elem, attrs) {
            console.log(elem);
            console.log(attrs.rangeColor);
            console.log(document.body);
            if (attrs.ngModel) {
                var startPoint = (attrs.value / attrs.max) * 100;
                elem[0].style.backgroundImage = "linear-gradient(to right, "+attrs.rangeColor+" 0%,"+attrs.rangeColor+" " + startPoint + "%,#cccccc " + startPoint + "%,#cccccc 100%)";

                scope.$watch(attrs.ngModel, function (newValue) {
                    var point = (newValue / attrs.max) * 100;
                    elem[0].style.backgroundImage = "linear-gradient(to right, "+attrs.rangeColor+" 0%,"+attrs.rangeColor+" " + point + "%,#cccccc " + point + "%,#cccccc 100%)";
                });
            }
        }
    };
});