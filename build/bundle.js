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
	    $scope.message = 'xxxd fd fdf';
	
	    $http.get('/getitems', function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2Y4Y2RiYzk1NmIyZGU2M2E5NmMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBLFNBQVEsTUFBUixDQUFlLEtBQWYsRUFBc0IsRUFBdEIsRUFDSyxVQURMLENBQ2dCLFNBRGhCLEVBQzJCLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsVUFBVSxNQUFWLEVBQWlCLEtBQWpCLEVBQXdCO0FBQy9ELFlBQU8sT0FBUCxHQUFpQixhQUFqQjs7QUFFQSxXQUFNLEdBQU4sQ0FBVSxXQUFWLEVBQXVCLFVBQVMsR0FBVCxFQUFhO0FBQ2hDLGlCQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0EsZ0JBQU8sS0FBUCxHQUFlLEdBQWY7QUFDSCxNQUhEOztBQUtBLFlBQU8sR0FBUCxHQUFhLFlBQUs7QUFDZCxpQkFBUSxHQUFSLENBQVksT0FBTyxPQUFuQjtBQUNBLGVBQU0sSUFBTixDQUFXLE1BQVgsRUFBa0IsRUFBQyxNQUFNLE9BQU8sT0FBZCxFQUFsQixFQUEwQyxVQUFTLEdBQVQsRUFBYTtBQUNuRCxxQkFBUSxHQUFSLENBQVksR0FBWjtBQUNILFVBRkQ7QUFHSCxNQUxEO0FBT0gsRUFmc0IsQ0FEM0IsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGRcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDdmOGNkYmM5NTZiMmRlNjNhOTZjXG4gKiovIiwiLy9pbXBvcnQgJ2FuZ3VsYXInO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKVxyXG4gICAgLmNvbnRyb2xsZXIoJ2FwcEN0cmwnLCBbJyRzY29wZScsICckaHR0cCcsIGZ1bmN0aW9uICgkc2NvcGUsJGh0dHApIHtcclxuICAgICAgICAkc2NvcGUubWVzc2FnZSA9ICd4eHhkIGZkIGZkZic7XHJcblxyXG4gICAgICAgICRodHRwLmdldCgnL2dldGl0ZW1zJywgZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgJHNjb3BlLml0ZW1zID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkc2NvcGUuYWRkID0gKCk9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5jb250ZW50KTtcclxuICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FkZCcse3RleHQ6ICRzY29wZS5jb250ZW50fSwgZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XSk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY2xpZW50L2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=