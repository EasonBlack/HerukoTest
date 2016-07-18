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
	        console.log(res);
	        $scope.items = res;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWVlNTFhYmE4ZGRhYzgyOTgyYzIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBLFNBQVEsTUFBUixDQUFlLEtBQWYsRUFBc0IsRUFBdEIsRUFDSyxVQURMLENBQ2dCLFNBRGhCLEVBQzJCLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsVUFBVSxNQUFWLEVBQWtCLEtBQWxCLEVBQXlCO0FBQ2hFLFlBQU8sT0FBUCxHQUFpQixvQkFBakI7O0FBRUEsV0FBTSxHQUFOLENBQVUsV0FBVixFQUNLLElBREwsQ0FDVSxVQUFDLEdBQUQsRUFBUztBQUNYLGlCQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0EsZ0JBQU8sS0FBUCxHQUFlLEdBQWY7QUFDSCxNQUpMOztBQU9BLFlBQU8sR0FBUCxHQUFhLFlBQUs7QUFDZCxpQkFBUSxHQUFSLENBQVksT0FBTyxPQUFuQjtBQUNBLGVBQU0sSUFBTixDQUFXLE1BQVgsRUFBbUIsRUFBQyxNQUFNLE9BQU8sT0FBZCxFQUFuQixFQUEyQyxVQUFVLEdBQVYsRUFBZTtBQUN0RCxxQkFBUSxHQUFSLENBQVksR0FBWjtBQUNILFVBRkQ7QUFHSCxNQUxEO0FBT0gsRUFqQnNCLENBRDNCLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5ZWU1MWFiYThkZGFjODI5ODJjMlxuICoqLyIsIi8vaW1wb3J0ICdhbmd1bGFyJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSlcclxuICAgIC5jb250cm9sbGVyKCdhcHBDdHJsJywgWyckc2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCkge1xyXG4gICAgICAgICRzY29wZS5tZXNzYWdlID0gJ3h4eGQgZmQgZGRmZGZkIGZkZic7XHJcblxyXG4gICAgICAgICRodHRwLmdldCgnL2dldGl0ZW1zJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5pdGVtcyA9IHJlcztcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICRzY29wZS5hZGQgPSAoKT0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAkaHR0cC5wb3N0KCcvYWRkJywge3RleHQ6ICRzY29wZS5jb250ZW50fSwgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1dKVxyXG47XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY2xpZW50L2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=