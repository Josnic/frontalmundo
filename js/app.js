var app=angular.module('almundo-app',['ngAnimate','ngSanitize','ui.bootstrap']);app.filter('toRange',function(){return function(input){var lowBound,highBound;if(input.length==1){lowBound=0;highBound=+input[0]-1;}else if(input.length==2){lowBound=+input[0];highBound=+input[1];}
var i=lowBound;var result=[];while(i<=highBound){result.push(i);i++;}
return result;}})
app.service("consumeApi",function(){this.request=function($scope,$http){$scope.loader=true;$http.get('https://apialmundo.herokuapp.com/readFront?stars='+$scope.stars.value+'&name='+$scope.hotelName).then(function(response){console.log(response.data)
$scope.loader=false;$scope.hotels=response.data;},function(response){$scope.loader=false;alert("Ha ocurrido un error. Por favor intenta de nuevo refrescando la página.")
console.log(response)});}})
app.controller('almundo-controller',function($scope,$http,$document,consumeApi){$document.ready(function(){consumeApi.request($scope,$http);})
$scope.filters=true;$scope.loader=false;$scope.hotelName='';$scope.stars={value:'6'}
$scope.hotels=[]
$scope.viewFilters=function(){if($scope.filters==true){$scope.filters=false;}else{$scope.filters=true;}}
$scope.searchHotel=function(hotelName){if(typeof hotelName!=='undefined'){$scope.hotelName=hotelName;}
consumeApi.request($scope,$http);}});app.directive('resize',['$window',function($window){return{link:link,restrict:'A'};function link(scope,element,attrs){scope.width=$window.innerWidth;function onResize(){{scope.width=$window.innerWidth;if(window.matchMedia("(max-width: 768px)").matches){scope.filters=false;}else{scope.filters=true;}
scope.$digest();}};function cleanUp(){angular.element($window).off('resize',onResize);}
angular.element($window).on('resize',onResize);scope.$on('$destroy',cleanUp);}}]);