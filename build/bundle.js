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
	    $scope.message = 'Hello World';
	
	    $http.get('/getitems').then(function (res) {
	        $scope.items = res.data;
	    });
	
	    $scope.add = function () {
	        $http.post('/additem', { text: $scope.content }).then(function (res) {
	            $scope.items = res.data;
	        });
	    };
	}]);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjVkMTc4ZjllMjBiOGRiNjg3NWYiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBLFNBQVEsTUFBUixDQUFlLEtBQWYsRUFBc0IsRUFBdEIsRUFDSyxVQURMLENBQ2dCLFNBRGhCLEVBQzJCLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsVUFBVSxNQUFWLEVBQWtCLEtBQWxCLEVBQXlCO0FBQ2hFLFlBQU8sT0FBUCxHQUFpQixhQUFqQjs7QUFFQSxXQUFNLEdBQU4sQ0FBVSxXQUFWLEVBQ0ssSUFETCxDQUNVLFVBQUMsR0FBRCxFQUFTO0FBQ1gsZ0JBQU8sS0FBUCxHQUFlLElBQUksSUFBbkI7QUFDSCxNQUhMOztBQU1BLFlBQU8sR0FBUCxHQUFhLFlBQUs7QUFDZCxlQUFNLElBQU4sQ0FBVyxVQUFYLEVBQXVCLEVBQUMsTUFBTSxPQUFPLE9BQWQsRUFBdkIsRUFDSyxJQURMLENBQ1UsVUFBQyxHQUFELEVBQVE7QUFDVixvQkFBTyxLQUFQLEdBQWUsSUFBSSxJQUFuQjtBQUNILFVBSEw7QUFJSCxNQUxEO0FBT0gsRUFoQnNCLENBRDNCLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2NWQxNzhmOWUyMGI4ZGI2ODc1ZlxuICoqLyIsIi8vaW1wb3J0ICdhbmd1bGFyJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSlcclxuICAgIC5jb250cm9sbGVyKCdhcHBDdHJsJywgWyckc2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCkge1xyXG4gICAgICAgICRzY29wZS5tZXNzYWdlID0gJ0hlbGxvIFdvcmxkJztcclxuXHJcbiAgICAgICAgJGh0dHAuZ2V0KCcvZ2V0aXRlbXMnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaXRlbXMgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICRzY29wZS5hZGQgPSAoKT0+IHtcclxuICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FkZGl0ZW0nLCB7dGV4dDogJHNjb3BlLmNvbnRlbnR9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLml0ZW1zID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XSlcclxuO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudC9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9