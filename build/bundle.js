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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	angular.module('app', ['ui.router', 'quest.module']);
	//module

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _questController = __webpack_require__(3);
	
	var _questController2 = _interopRequireDefault(_questController);
	
	var _questListController = __webpack_require__(4);
	
	var _questListController2 = _interopRequireDefault(_questListController);
	
	var _questConstant = __webpack_require__(5);
	
	var _questConstant2 = _interopRequireDefault(_questConstant);
	
	var _questRoute = __webpack_require__(6);
	
	var _questRoute2 = _interopRequireDefault(_questRoute);
	
	var _questInputComponent = __webpack_require__(9);
	
	var _questInputComponent2 = _interopRequireDefault(_questInputComponent);
	
	var _answerStoreService = __webpack_require__(11);
	
	var _answerStoreService2 = _interopRequireDefault(_answerStoreService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module('quest.module', ['ui.router']).config(_questRoute2.default).constant('QuestConst', _questConstant2.default).factory('AnswerStoreService', _answerStoreService2.default.factory).controller('QuestController', _questController2.default).controller('QuestListController', _questListController2.default).component('appQuestInput', _questInputComponent2.default);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var QUESTCONST = new WeakMap();
	var ANSWERSTORE = new WeakMap();
	var STATE = new WeakMap();
	
	var QuestController = function () {
	    function QuestController(QuestConst, AnswerStoreService, $state) {
	        _classCallCheck(this, QuestController);
	
	        QUESTCONST.set(this, QuestConst);
	        ANSWERSTORE.set(this, AnswerStoreService);
	        STATE.set(this, $state);
	        this.quests = QUESTCONST.get(this).quests;
	        this.current = 0;
	    }
	
	    _createClass(QuestController, [{
	        key: 'prev',
	        value: function prev() {
	            this.current = this.current - 1;
	            this.position = this.current * 100;
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            this.current = this.current + 1;
	            this.position = this.current * 100;
	        }
	    }, {
	        key: 'isFirst',
	        value: function isFirst() {
	            if (this.current == 0) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: 'isLast',
	        value: function isLast() {
	            if (this.current == this.quests.length - 1) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm() {
	            var answer = this.quests.map(function (q) {
	                return q.answer || q.others;
	            });
	            ANSWERSTORE.get(this).saveAnswer(answer).then(function (res) {
	                if (res.msg == 'success') {
	                    alert('Success');
	                } else {
	                    alert('Failed');
	                }
	            });
	            //(STATE.get(this)).go('quest-list');
	        }
	    }]);
	
	    return QuestController;
	}();
	
	QuestController.$inject = ['QuestConst', 'AnswerStoreService', '$state'];
	
	exports.default = QuestController;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var QUESTCONST = new WeakMap();
	var ANSWERSTORE = new WeakMap();
	
	var QuestListController = function QuestListController(QuestConst, AnswerStoreService) {
	    _classCallCheck(this, QuestListController);
	
	    QUESTCONST.set(this, QuestConst);
	    ANSWERSTORE.set(this, AnswerStoreService);
	    this.quests = QUESTCONST.get(this).quests;
	    this.answer = ANSWERSTORE.get(this).answer;
	    console.log(this.answer);
	};
	
	exports.default = QuestListController;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var QuestConst = {
	    quests: [{ type: 'radio', title: 'aaaaaaaaaaaa', items: ['aa', 'bbb'], hasOther: true }, { type: 'textarea', title: 'bbbbbbbbbbbb' }, { type: 'radio', title: 'ccccccccc', items: ['ee', 'wwww'] }]
	};
	
	exports.default = QuestConst;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _questView = __webpack_require__(7);
	
	var _questView2 = _interopRequireDefault(_questView);
	
	var _questListView = __webpack_require__(8);
	
	var _questListView2 = _interopRequireDefault(_questListView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var QuestRouteConfig = function QuestRouteConfig($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise("/quest");
	
	    $stateProvider.state('quest', {
	        url: '/quest',
	        template: _questView2.default,
	        controller: 'QuestController',
	        controllerAs: 'vm'
	    }).state('quest-list', {
	        url: '/quest-list',
	        template: _questListView2.default,
	        controller: 'QuestListController',
	        controllerAs: 'vm'
	    });
	};
	
	QuestRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	exports.default = QuestRouteConfig;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"quest__header_box flex__row\">\r\n    <div class=\"ribbon__content ribbon__extra\"></div>\r\n    <div class=\"ribbon__content flex__row_1\"></div>\r\n</div>\r\n<div class=\"quest__view_box\">\r\n    <div class=\"quest__mask\">\r\n        <ul class=\"quest__container\"\r\n            ng-style=\"{'left': -1 * vm.position + '%'}\">\r\n            <li class=\"quest__item\"\r\n                ng-repeat=\"quest in vm.quests track by $index\">\r\n                <div class=\"quest__question text_20\">\r\n                    {{$index + 1}}. {{quest.title}}\r\n                </div>\r\n                <app-quest-input type=\"quest.type\" quest=\"quest\" index=\"{{$index}}\"></app-quest-input>\r\n\r\n            </li>\r\n        </ul>\r\n\r\n    </div>\r\n\r\n    <div class=\"quest__button_prev\" ng-click=\"vm.prev()\" ng-show=\"!vm.isFirst()\">\r\n        <span class=\"glyphicon glyphicon-arrow-left quest__arrow text_30 text_purple text_purple\"></span>\r\n    </div>\r\n    <div class=\"quest__button_confirm\" ng-click=\"vm.confirm()\" ng-show=\"vm.isLast()\">\r\n        Confirm\r\n    </div>\r\n    <div class=\"quest__button_next\" ng-click=\"vm.next()\" ng-show=\"!vm.isLast()\">\r\n        <span class=\"glyphicon glyphicon-arrow-right quest__arrow text_30 text_purple text_purple\"></span>\r\n    </div>\r\n</div>\r\n\r\n\r\n";

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"quest__header_box flex__row\">\r\n    <div class=\"ribbon__content ribbon__extra\"></div>\r\n    <div class=\"ribbon__content flex__row_1\"></div>\r\n</div>\r\n<div class=\"quest__view_box scroll-y\">\r\n    <div class=\"quest__view_inner-scroll\">\r\n        <ul>\r\n            <li ng-repeat=\"quest in vm.quests\">\r\n                <div class=\"quest__title_box\">\r\n                    <span class=\"quest__num_box\">{{$index + 1}}.</span><span>{{quest.title}}</span>\r\n                </div>\r\n                <div class=\"quest__answer_box\">\r\n                    {{vm.answer[$index]}}\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _questInputTemplate = __webpack_require__(10);
	
	var _questInputTemplate2 = _interopRequireDefault(_questInputTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var appQuestInputController = function appQuestInputController() {
	    _classCallCheck(this, appQuestInputController);
	};
	
	var appQuestInput = {
	    template: _questInputTemplate2.default,
	    bindings: {
	        type: '<',
	        quest: '<',
	        index: '@'
	    }
	    //controller: appQuestInputController
	};
	
	exports.default = appQuestInput;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div ng-switch=\"$ctrl.type\" class=\"quest__content_box\">\r\n    <ul ng-switch-when=\"radio\" class=\"text_16\">\r\n        <li ng-repeat=\"item in $ctrl.quest.items\" class=\"quest_content-item_box app-radio\">\r\n            <input type=\"radio\"\r\n                   id=\"item{{$ctrl.index}}_{{$index}}\"\r\n                   name=\"item{{$ctrl.index}}\"\r\n                   ng-value=\"item\"\r\n                   ng-model=\"$ctrl.quest.answer\">\r\n            <label for=\"item{{$ctrl.index}}_{{$index}}\">\r\n                {{item}}\r\n            </label>\r\n        </li>\r\n        <li ng-show=\"$ctrl.quest.hasOther\"  class=\"quest_content-item_box app-radio\">\r\n            <input type=\"radio\"\r\n                   id=\"item{{$ctrl.index}}_other\"\r\n                   name=\"item{{$ctrl.index}}\"\r\n            >\r\n            <label for=\"item{{$ctrl.index}}_other\" class=\"float__left\">\r\n                Other\r\n            </label>\r\n            <input type=\"text\" width=\"200\" class=\"quest__input_others\"  ng-model=\"$ctrl.quest.others\"/>\r\n        </li>\r\n    </ul>\r\n    <textarea ng-switch-when=\"textarea\" class=\"app-textarea\" ng-model=\"$ctrl.quest.answer\"></textarea>\r\n</div>";

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HTTP = new WeakMap();
	
	var AnswerStoreService = function () {
	    function AnswerStoreService($http) {
	        _classCallCheck(this, AnswerStoreService);
	
	        this.answer = [];
	        HTTP.set(this, $http);
	    }
	
	    _createClass(AnswerStoreService, [{
	        key: 'saveAnswer',
	        value: function saveAnswer(answer) {
	
	            return HTTP.get(this)({
	                method: 'POST',
	                url: 'answer',
	                data: {
	                    username: 'xxx',
	                    content: answer
	                }
	            });
	        }
	    }], [{
	        key: 'factory',
	        value: function factory($http) {
	            return new AnswerStoreService($http);
	        }
	    }]);
	
	    return AnswerStoreService;
	}();
	
	AnswerStoreService.$inject = ['$http'];
	
	exports.default = AnswerStoreService;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjZmZDA4YmRlMzk1Nzk4ZTczZjciLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcXVlc3QvcXVlc3QubW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcXVlc3QvdGVzdC1wYWdlL3F1ZXN0LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9xdWVzdC9saXN0LXBhZ2UvcXVlc3QubGlzdC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcXVlc3QvcXVlc3QuY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9xdWVzdC9xdWVzdC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3F1ZXN0L3Rlc3QtcGFnZS9xdWVzdC52aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9xdWVzdC9saXN0LXBhZ2UvcXVlc3QubGlzdC52aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9xdWVzdC9jb21wb25lbnRzL3F1ZXN0LmlucHV0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3F1ZXN0L2NvbXBvbmVudHMvcXVlc3QuaW5wdXQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3F1ZXN0L3NlcnZpY2UvYW5zd2VyLnN0b3JlLnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7O0FBRUEsU0FBUSxNQUFSLENBQWUsS0FBZixFQUFzQixD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Z0I7QUFFaEIsZUFBVTtBQUNOLGVBQU0sR0FEQTtBQUVOLGdCQUFPLEdBRkQ7QUFHTixnQkFBTztBQUhEO0FBS1Y7QUFQZ0IsRUFBcEI7O21CQVVlLGE7Ozs7OztBQ2xCZiwrU0FBOFMsYUFBYSxHQUFHLFFBQVEsc0NBQXNDLGFBQWEsb0lBQW9JLGFBQWEsR0FBRyxRQUFRLHlCQUF5QixNQUFNLDZNQUE2TSxhQUFhLDRDQUE0QyxhQUFhLHNEQUFzRCxhQUFhLDZWOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTE0QixLQUFJLE9BQU8sSUFBSSxPQUFKLEVBQVg7O0tBRU0sa0I7QUFDRixpQ0FBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsY0FBSyxNQUFMLEdBQWMsRUFBZDtBQUNBLGNBQUssR0FBTCxDQUFTLElBQVQsRUFBZSxLQUFmO0FBQ0g7Ozs7b0NBRVUsTSxFQUFROztBQUVmLG9CQUFRLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBRCxDQUFpQjtBQUNwQix5QkFBUSxNQURZO0FBRXBCLDhCQUZvQjtBQUdwQix1QkFBTTtBQUNGLCtCQUFVLEtBRFI7QUFFRiw4QkFBUztBQUZQO0FBSGMsY0FBakIsQ0FBUDtBQVNIOzs7aUNBRWMsSyxFQUFPO0FBQ2xCLG9CQUFPLElBQUksa0JBQUosQ0FBdUIsS0FBdkIsQ0FBUDtBQUNIOzs7Ozs7QUFJTCxvQkFBbUIsT0FBbkIsR0FBNkIsQ0FBQyxPQUFELENBQTdCOzttQkFFZSxrQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmNmZkMDhiZGUzOTU3OThlNzNmN1xuICoqLyIsIlxyXG4vL21vZHVsZVxyXG5pbXBvcnQgXCIuL21vZHVsZXMvcXVlc3QvcXVlc3QubW9kdWxlLmpzXCJcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXHJcbiAgICAndWkucm91dGVyJyxcclxuICAgICdxdWVzdC5tb2R1bGUnXHJcbl0pXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwLmpzXG4gKiovIiwiaW1wb3J0IFF1ZXN0Q29udHJvbGxlciBmcm9tICcuL3Rlc3QtcGFnZS9xdWVzdC5jb250cm9sbGVyLmpzJ1xyXG5pbXBvcnQgUXVlc3RMaXN0Q29udHJvbGxlciBmcm9tICcuL2xpc3QtcGFnZS9xdWVzdC5saXN0LmNvbnRyb2xsZXIuanMnXHJcbmltcG9ydCBRdWVzdENvbnN0IGZyb20gJy4vcXVlc3QuY29uc3RhbnQuanMnXHJcbmltcG9ydCBRdWVzdFJvdXRlQ29uZmlnIGZyb20gJy4vcXVlc3Qucm91dGUuanMnXHJcbmltcG9ydCBhcHBRdWVzdElucHV0IGZyb20gJy4vY29tcG9uZW50cy9xdWVzdC5pbnB1dC5jb21wb25lbnQuanMnO1xyXG5pbXBvcnQgQW5zd2VyU3RvcmVTZXJ2aWNlIGZyb20gJy4vc2VydmljZS9hbnN3ZXIuc3RvcmUuc2VydmljZS5qcydcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdxdWVzdC5tb2R1bGUnLCBbXHJcbiAgICAndWkucm91dGVyJ1xyXG5dKVxyXG4gICAgLmNvbmZpZyhRdWVzdFJvdXRlQ29uZmlnKVxyXG4gICAgLmNvbnN0YW50KCdRdWVzdENvbnN0JywgUXVlc3RDb25zdClcclxuICAgIC5mYWN0b3J5KCdBbnN3ZXJTdG9yZVNlcnZpY2UnLCBBbnN3ZXJTdG9yZVNlcnZpY2UuZmFjdG9yeSlcclxuICAgIC5jb250cm9sbGVyKCdRdWVzdENvbnRyb2xsZXInLCBRdWVzdENvbnRyb2xsZXIpXHJcbiAgICAuY29udHJvbGxlcignUXVlc3RMaXN0Q29udHJvbGxlcicsIFF1ZXN0TGlzdENvbnRyb2xsZXIpXHJcbiAgICAuY29tcG9uZW50KCdhcHBRdWVzdElucHV0JywgYXBwUXVlc3RJbnB1dClcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL3F1ZXN0L3F1ZXN0Lm1vZHVsZS5qc1xuICoqLyIsImxldCBRVUVTVENPTlNUID0gbmV3IFdlYWtNYXAoKTtcclxubGV0IEFOU1dFUlNUT1JFID0gbmV3IFdlYWtNYXAoKTtcclxubGV0IFNUQVRFID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbmNsYXNzIFF1ZXN0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihRdWVzdENvbnN0LCBBbnN3ZXJTdG9yZVNlcnZpY2UsICRzdGF0ZSkge1xyXG4gICAgICAgIFFVRVNUQ09OU1Quc2V0KHRoaXMsIFF1ZXN0Q29uc3QpXHJcbiAgICAgICAgQU5TV0VSU1RPUkUuc2V0KHRoaXMsIEFuc3dlclN0b3JlU2VydmljZSk7XHJcbiAgICAgICAgU1RBVEUuc2V0KHRoaXMsICRzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5xdWVzdHMgPSBRVUVTVENPTlNULmdldCh0aGlzKS5xdWVzdHM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2KCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCAtIDE7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuY3VycmVudCAqIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCArIDE7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuY3VycmVudCAqIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZpcnN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzTGFzdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09IHRoaXMucXVlc3RzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtKCkge1xyXG4gICAgICAgIGxldCBhbnN3ZXIgPSB0aGlzLnF1ZXN0cy5tYXAoKHEpPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcS5hbnN3ZXIgfHwgcS5vdGhlcnM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgKEFOU1dFUlNUT1JFLmdldCh0aGlzKSkuc2F2ZUFuc3dlcihhbnN3ZXIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXMubXNnPT0nc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnRmFpbGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8oU1RBVEUuZ2V0KHRoaXMpKS5nbygncXVlc3QtbGlzdCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5RdWVzdENvbnRyb2xsZXIuJGluamVjdCA9IFsnUXVlc3RDb25zdCcsICdBbnN3ZXJTdG9yZVNlcnZpY2UnLCAnJHN0YXRlJ107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWVzdENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL3F1ZXN0L3Rlc3QtcGFnZS9xdWVzdC5jb250cm9sbGVyLmpzXG4gKiovIiwibGV0IFFVRVNUQ09OU1QgPSBuZXcgV2Vha01hcCgpO1xyXG5sZXQgQU5TV0VSU1RPUkUgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuY2xhc3MgUXVlc3RMaXN0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihRdWVzdENvbnN0LCBBbnN3ZXJTdG9yZVNlcnZpY2UpIHtcclxuICAgICAgICBRVUVTVENPTlNULnNldCh0aGlzLCBRdWVzdENvbnN0KTtcclxuICAgICAgICBBTlNXRVJTVE9SRS5zZXQodGhpcywgQW5zd2VyU3RvcmVTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnF1ZXN0cyA9IFFVRVNUQ09OU1QuZ2V0KHRoaXMpLnF1ZXN0cztcclxuICAgICAgICB0aGlzLmFuc3dlciA9IEFOU1dFUlNUT1JFLmdldCh0aGlzKS5hbnN3ZXI7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hbnN3ZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWVzdExpc3RDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9xdWVzdC9saXN0LXBhZ2UvcXVlc3QubGlzdC5jb250cm9sbGVyLmpzXG4gKiovIiwibGV0IFF1ZXN0Q29uc3QgPSB7XHJcbiAgICBxdWVzdHM6IFtcclxuICAgICAgICB7dHlwZTogJ3JhZGlvJywgdGl0bGU6ICdhYWFhYWFhYWFhYWEnLCBpdGVtczogWydhYScsICdiYmInXSwgaGFzT3RoZXI6IHRydWV9LFxyXG4gICAgICAgIHt0eXBlOiAndGV4dGFyZWEnLCB0aXRsZTogJ2JiYmJiYmJiYmJiYid9LFxyXG4gICAgICAgIHt0eXBlOiAncmFkaW8nLCB0aXRsZTogJ2NjY2NjY2NjYycsIGl0ZW1zOiBbJ2VlJywgJ3d3d3cnXX0sXHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0Q29uc3Q7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL3F1ZXN0L3F1ZXN0LmNvbnN0YW50LmpzXG4gKiovIiwiaW1wb3J0IHF1ZXN0VHBsIGZyb20gJy4vdGVzdC1wYWdlL3F1ZXN0LnZpZXcuaHRtbCdcclxuaW1wb3J0IHF1ZXN0TGlzdFRwbCBmcm9tICcuL2xpc3QtcGFnZS9xdWVzdC5saXN0LnZpZXcuaHRtbCdcclxuXHJcblxyXG5sZXQgUXVlc3RSb3V0ZUNvbmZpZyA9ICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSA9PiB7XHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL3F1ZXN0XCIpO1xyXG5cclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdxdWVzdCcsIHtcclxuICAgICAgICAgICAgdXJsOiAnL3F1ZXN0JyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHF1ZXN0VHBsLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUXVlc3RDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoJ3F1ZXN0LWxpc3QnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9xdWVzdC1saXN0JyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHF1ZXN0TGlzdFRwbCxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1F1ZXN0TGlzdENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5RdWVzdFJvdXRlQ29uZmlnLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlciddO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVlc3RSb3V0ZUNvbmZpZztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL3F1ZXN0L3F1ZXN0LnJvdXRlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInF1ZXN0X19oZWFkZXJfYm94IGZsZXhfX3Jvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJpYmJvbl9fY29udGVudCByaWJib25fX2V4dHJhXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicmliYm9uX19jb250ZW50IGZsZXhfX3Jvd18xXFxcIj48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJxdWVzdF9fdmlld19ib3hcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJxdWVzdF9fbWFza1xcXCI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcInF1ZXN0X19jb250YWluZXJcXFwiXFxyXFxuICAgICAgICAgICAgbmctc3R5bGU9XFxcInsnbGVmdCc6IC0xICogdm0ucG9zaXRpb24gKyAnJSd9XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcInF1ZXN0X19pdGVtXFxcIlxcclxcbiAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XFxcInF1ZXN0IGluIHZtLnF1ZXN0cyB0cmFjayBieSAkaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJxdWVzdF9fcXVlc3Rpb24gdGV4dF8yMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICB7eyRpbmRleCArIDF9fS4ge3txdWVzdC50aXRsZX19XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YXBwLXF1ZXN0LWlucHV0IHR5cGU9XFxcInF1ZXN0LnR5cGVcXFwiIHF1ZXN0PVxcXCJxdWVzdFxcXCIgaW5kZXg9XFxcInt7JGluZGV4fX1cXFwiPjwvYXBwLXF1ZXN0LWlucHV0PlxcclxcblxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicXVlc3RfX2J1dHRvbl9wcmV2XFxcIiBuZy1jbGljaz1cXFwidm0ucHJldigpXFxcIiBuZy1zaG93PVxcXCIhdm0uaXNGaXJzdCgpXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWxlZnQgcXVlc3RfX2Fycm93IHRleHRfMzAgdGV4dF9wdXJwbGUgdGV4dF9wdXJwbGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInF1ZXN0X19idXR0b25fY29uZmlybVxcXCIgbmctY2xpY2s9XFxcInZtLmNvbmZpcm0oKVxcXCIgbmctc2hvdz1cXFwidm0uaXNMYXN0KClcXFwiPlxcclxcbiAgICAgICAgQ29uZmlybVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicXVlc3RfX2J1dHRvbl9uZXh0XFxcIiBuZy1jbGljaz1cXFwidm0ubmV4dCgpXFxcIiBuZy1zaG93PVxcXCIhdm0uaXNMYXN0KClcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctcmlnaHQgcXVlc3RfX2Fycm93IHRleHRfMzAgdGV4dF9wdXJwbGUgdGV4dF9wdXJwbGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21vZHVsZXMvcXVlc3QvdGVzdC1wYWdlL3F1ZXN0LnZpZXcuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48ZGl2IGNsYXNzPVxcXCJxdWVzdF9faGVhZGVyX2JveCBmbGV4X19yb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyaWJib25fX2NvbnRlbnQgcmliYm9uX19leHRyYVxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJpYmJvbl9fY29udGVudCBmbGV4X19yb3dfMVxcXCI+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicXVlc3RfX3ZpZXdfYm94IHNjcm9sbC15XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicXVlc3RfX3ZpZXdfaW5uZXItc2Nyb2xsXFxcIj5cXHJcXG4gICAgICAgIDx1bD5cXHJcXG4gICAgICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJxdWVzdCBpbiB2bS5xdWVzdHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJxdWVzdF9fdGl0bGVfYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJxdWVzdF9fbnVtX2JveFxcXCI+e3skaW5kZXggKyAxfX0uPC9zcGFuPjxzcGFuPnt7cXVlc3QudGl0bGV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInF1ZXN0X19hbnN3ZXJfYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7dm0uYW5zd2VyWyRpbmRleF19fVxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21vZHVsZXMvcXVlc3QvbGlzdC1wYWdlL3F1ZXN0Lmxpc3Qudmlldy5odG1sXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHRwbCBmcm9tICcuL3F1ZXN0LmlucHV0LnRlbXBsYXRlLmh0bWwnXHJcblxyXG5jbGFzcyBhcHBRdWVzdElucHV0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBhcHBRdWVzdElucHV0ID0ge1xyXG4gICAgdGVtcGxhdGU6IHRwbCxcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgdHlwZTogJzwnLFxyXG4gICAgICAgIHF1ZXN0OiAnPCcsXHJcbiAgICAgICAgaW5kZXg6ICdAJ1xyXG4gICAgfVxyXG4gICAgLy9jb250cm9sbGVyOiBhcHBRdWVzdElucHV0Q29udHJvbGxlclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBRdWVzdElucHV0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9xdWVzdC9jb21wb25lbnRzL3F1ZXN0LmlucHV0LmNvbXBvbmVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IG5nLXN3aXRjaD1cXFwiJGN0cmwudHlwZVxcXCIgY2xhc3M9XFxcInF1ZXN0X19jb250ZW50X2JveFxcXCI+XFxyXFxuICAgIDx1bCBuZy1zd2l0Y2gtd2hlbj1cXFwicmFkaW9cXFwiIGNsYXNzPVxcXCJ0ZXh0XzE2XFxcIj5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gJGN0cmwucXVlc3QuaXRlbXNcXFwiIGNsYXNzPVxcXCJxdWVzdF9jb250ZW50LWl0ZW1fYm94IGFwcC1yYWRpb1xcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBpZD1cXFwiaXRlbXt7JGN0cmwuaW5kZXh9fV97eyRpbmRleH19XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJpdGVte3skY3RybC5pbmRleH19XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cXFwiaXRlbVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcIiRjdHJsLnF1ZXN0LmFuc3dlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiaXRlbXt7JGN0cmwuaW5kZXh9fV97eyRpbmRleH19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAge3tpdGVtfX1cXHJcXG4gICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSBuZy1zaG93PVxcXCIkY3RybC5xdWVzdC5oYXNPdGhlclxcXCIgIGNsYXNzPVxcXCJxdWVzdF9jb250ZW50LWl0ZW1fYm94IGFwcC1yYWRpb1xcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBpZD1cXFwiaXRlbXt7JGN0cmwuaW5kZXh9fV9vdGhlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiaXRlbXt7JGN0cmwuaW5kZXh9fVxcXCJcXHJcXG4gICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiaXRlbXt7JGN0cmwuaW5kZXh9fV9vdGhlclxcXCIgY2xhc3M9XFxcImZsb2F0X19sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgT3RoZXJcXHJcXG4gICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiB3aWR0aD1cXFwiMjAwXFxcIiBjbGFzcz1cXFwicXVlc3RfX2lucHV0X290aGVyc1xcXCIgIG5nLW1vZGVsPVxcXCIkY3RybC5xdWVzdC5vdGhlcnNcXFwiLz5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICAgIDx0ZXh0YXJlYSBuZy1zd2l0Y2gtd2hlbj1cXFwidGV4dGFyZWFcXFwiIGNsYXNzPVxcXCJhcHAtdGV4dGFyZWFcXFwiIG5nLW1vZGVsPVxcXCIkY3RybC5xdWVzdC5hbnN3ZXJcXFwiPjwvdGV4dGFyZWE+XFxyXFxuPC9kaXY+XCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21vZHVsZXMvcXVlc3QvY29tcG9uZW50cy9xdWVzdC5pbnB1dC50ZW1wbGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImxldCBIVFRQID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbmNsYXNzIEFuc3dlclN0b3JlU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCkge1xyXG4gICAgICAgIHRoaXMuYW5zd2VyID0gW107XHJcbiAgICAgICAgSFRUUC5zZXQodGhpcywgJGh0dHApO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVBbnN3ZXIoYW5zd2VyKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoSFRUUC5nZXQodGhpcykpKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogYFxcYW5zd2VyYCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6ICd4eHgnLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogYW5zd2VyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmFjdG9yeSgkaHR0cCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQW5zd2VyU3RvcmVTZXJ2aWNlKCRodHRwKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkFuc3dlclN0b3JlU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCddO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyU3RvcmVTZXJ2aWNlO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvcXVlc3Qvc2VydmljZS9hbnN3ZXIuc3RvcmUuc2VydmljZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=