/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	//import 'angular';
	
	angular.module('app', []).controller('appCtrl', ['$scope', '$http', function ($scope, $http) {
	    $scope.message = 'xxxd fd ddfdfd fdf';
	
	    $http.get('/getitems').then(function (res) {
	        $scope.items = res.data;
	    });
	
	    $scope.add = function () {
	        console.log($scope.content);
	        $http.post('/add', { text: $scope.content }, function (res) {
	            console.log(res);
	        });
	    };
	}]);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRkYTA1MTM5NDY2ZDViOTQ1ODUiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBLFNBQVEsTUFBUixDQUFlLEtBQWYsRUFBc0IsRUFBdEIsRUFDSyxVQURMLENBQ2dCLFNBRGhCLEVBQzJCLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsVUFBVSxNQUFWLEVBQWtCLEtBQWxCLEVBQXlCO0FBQ2hFLFlBQU8sT0FBUCxHQUFpQixvQkFBakI7O0FBRUEsV0FBTSxHQUFOLENBQVUsV0FBVixFQUNLLElBREwsQ0FDVSxVQUFDLEdBQUQsRUFBUztBQUNYLGdCQUFPLEtBQVAsR0FBZSxJQUFJLElBQW5CO0FBQ0gsTUFITDs7QUFNQSxZQUFPLEdBQVAsR0FBYSxZQUFLO0FBQ2QsaUJBQVEsR0FBUixDQUFZLE9BQU8sT0FBbkI7QUFDQSxlQUFNLElBQU4sQ0FBVyxNQUFYLEVBQW1CLEVBQUMsTUFBTSxPQUFPLE9BQWQsRUFBbkIsRUFBMkMsVUFBVSxHQUFWLEVBQWU7QUFDdEQscUJBQVEsR0FBUixDQUFZLEdBQVo7QUFDSCxVQUZEO0FBR0gsTUFMRDtBQU9ILEVBaEJzQixDQUQzQixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZFwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNWRkYTA1MTM5NDY2ZDViOTQ1ODVcbiAqKi8iLCIvL2ltcG9ydCAnYW5ndWxhcic7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgW10pXHJcbiAgICAuY29udHJvbGxlcignYXBwQ3RybCcsIFsnJHNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24gKCRzY29wZSwgJGh0dHApIHtcclxuICAgICAgICAkc2NvcGUubWVzc2FnZSA9ICd4eHhkIGZkIGRkZmRmZCBmZGYnO1xyXG5cclxuICAgICAgICAkaHR0cC5nZXQoJy9nZXRpdGVtcycpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5pdGVtcyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLmFkZCA9ICgpPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuY29udGVudCk7XHJcbiAgICAgICAgICAgICRodHRwLnBvc3QoJy9hZGQnLCB7dGV4dDogJHNjb3BlLmNvbnRlbnR9LCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfV0pXHJcbjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jbGllbnQvYXBwLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==