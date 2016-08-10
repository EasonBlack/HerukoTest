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
	        value: function factory() {
	            return new AnswerStoreService($http);
	        }
	    }]);
	
	    return AnswerStoreService;
	}();
	
	AnswerStoreService.$inject = ['$http'];
	
	exports.default = AnswerStoreService;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzEyNTI2Yjc1MGZjNzAxYjhiNTUiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcXVlc3QvcXVlc3QubW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcXVlc3QvdGVzdC1wYWdlL3F1ZXN0LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9xdWVzdC9saXN0LXBhZ2UvcXVlc3QubGlzdC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcXVlc3QvcXVlc3QuY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9xdWVzdC9xdWVzdC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3F1ZXN0L3Rlc3QtcGFnZS9xdWVzdC52aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9xdWVzdC9saXN0LXBhZ2UvcXVlc3QubGlzdC52aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9xdWVzdC9jb21wb25lbnRzL3F1ZXN0LmlucHV0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3F1ZXN0L2NvbXBvbmVudHMvcXVlc3QuaW5wdXQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3F1ZXN0L3NlcnZpY2UvYW5zd2VyLnN0b3JlLnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7O0FBRUEsU0FBUSxNQUFSLENBQWUsS0FBZixFQUFzQixD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Z0I7QUFFaEIsZUFBVTtBQUNOLGVBQU0sR0FEQTtBQUVOLGdCQUFPLEdBRkQ7QUFHTixnQkFBTztBQUhEO0FBS1Y7QUFQZ0IsRUFBcEI7O21CQVVlLGE7Ozs7OztBQ2xCZiwrU0FBOFMsYUFBYSxHQUFHLFFBQVEsc0NBQXNDLGFBQWEsb0lBQW9JLGFBQWEsR0FBRyxRQUFRLHlCQUF5QixNQUFNLDZNQUE2TSxhQUFhLDRDQUE0QyxhQUFhLHNEQUFzRCxhQUFhLDZWOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTE0QixLQUFJLE9BQU8sSUFBSSxPQUFKLEVBQVg7O0tBRU0sa0I7QUFDRixpQ0FBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsY0FBSyxNQUFMLEdBQWMsRUFBZDtBQUNBLGNBQUssR0FBTCxDQUFTLElBQVQsRUFBZSxLQUFmO0FBQ0g7Ozs7b0NBRVUsTSxFQUFROztBQUVmLG9CQUFRLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBRCxDQUFpQjtBQUNwQix5QkFBUSxNQURZO0FBRXBCLDhCQUZvQjtBQUdwQix1QkFBTTtBQUNGLCtCQUFVLEtBRFI7QUFFRiw4QkFBUztBQUZQO0FBSGMsY0FBakIsQ0FBUDtBQVNIOzs7bUNBRWdCO0FBQ2Isb0JBQU8sSUFBSSxrQkFBSixDQUF1QixLQUF2QixDQUFQO0FBQ0g7Ozs7OztBQUlMLG9CQUFtQixPQUFuQixHQUE2QixDQUFDLE9BQUQsQ0FBN0I7O21CQUVlLGtCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGMxMjUyNmI3NTBmYzcwMWI4YjU1XG4gKiovIiwiXHJcbi8vbW9kdWxlXHJcbmltcG9ydCBcIi4vbW9kdWxlcy9xdWVzdC9xdWVzdC5tb2R1bGUuanNcIlxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcclxuICAgICd1aS5yb3V0ZXInLFxyXG4gICAgJ3F1ZXN0Lm1vZHVsZSdcclxuXSlcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAuanNcbiAqKi8iLCJpbXBvcnQgUXVlc3RDb250cm9sbGVyIGZyb20gJy4vdGVzdC1wYWdlL3F1ZXN0LmNvbnRyb2xsZXIuanMnXHJcbmltcG9ydCBRdWVzdExpc3RDb250cm9sbGVyIGZyb20gJy4vbGlzdC1wYWdlL3F1ZXN0Lmxpc3QuY29udHJvbGxlci5qcydcclxuaW1wb3J0IFF1ZXN0Q29uc3QgZnJvbSAnLi9xdWVzdC5jb25zdGFudC5qcydcclxuaW1wb3J0IFF1ZXN0Um91dGVDb25maWcgZnJvbSAnLi9xdWVzdC5yb3V0ZS5qcydcclxuaW1wb3J0IGFwcFF1ZXN0SW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL3F1ZXN0LmlucHV0LmNvbXBvbmVudC5qcyc7XHJcbmltcG9ydCBBbnN3ZXJTdG9yZVNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlL2Fuc3dlci5zdG9yZS5zZXJ2aWNlLmpzJ1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3F1ZXN0Lm1vZHVsZScsIFtcclxuICAgICd1aS5yb3V0ZXInXHJcbl0pXHJcbiAgICAuY29uZmlnKFF1ZXN0Um91dGVDb25maWcpXHJcbiAgICAuY29uc3RhbnQoJ1F1ZXN0Q29uc3QnLCBRdWVzdENvbnN0KVxyXG4gICAgLmZhY3RvcnkoJ0Fuc3dlclN0b3JlU2VydmljZScsIEFuc3dlclN0b3JlU2VydmljZS5mYWN0b3J5KVxyXG4gICAgLmNvbnRyb2xsZXIoJ1F1ZXN0Q29udHJvbGxlcicsIFF1ZXN0Q29udHJvbGxlcilcclxuICAgIC5jb250cm9sbGVyKCdRdWVzdExpc3RDb250cm9sbGVyJywgUXVlc3RMaXN0Q29udHJvbGxlcilcclxuICAgIC5jb21wb25lbnQoJ2FwcFF1ZXN0SW5wdXQnLCBhcHBRdWVzdElucHV0KVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvcXVlc3QvcXVlc3QubW9kdWxlLmpzXG4gKiovIiwibGV0IFFVRVNUQ09OU1QgPSBuZXcgV2Vha01hcCgpO1xyXG5sZXQgQU5TV0VSU1RPUkUgPSBuZXcgV2Vha01hcCgpO1xyXG5sZXQgU1RBVEUgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuY2xhc3MgUXVlc3RDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKFF1ZXN0Q29uc3QsIEFuc3dlclN0b3JlU2VydmljZSwgJHN0YXRlKSB7XHJcbiAgICAgICAgUVVFU1RDT05TVC5zZXQodGhpcywgUXVlc3RDb25zdClcclxuICAgICAgICBBTlNXRVJTVE9SRS5zZXQodGhpcywgQW5zd2VyU3RvcmVTZXJ2aWNlKTtcclxuICAgICAgICBTVEFURS5zZXQodGhpcywgJHN0YXRlKTtcclxuICAgICAgICB0aGlzLnF1ZXN0cyA9IFFVRVNUQ09OU1QuZ2V0KHRoaXMpLnF1ZXN0cztcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXYoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50IC0gMTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5jdXJyZW50ICogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50ICsgMTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5jdXJyZW50ICogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRmlyc3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNMYXN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT0gdGhpcy5xdWVzdHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm0oKSB7XHJcbiAgICAgICAgbGV0IGFuc3dlciA9IHRoaXMucXVlc3RzLm1hcCgocSk9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBxLmFuc3dlciB8fCBxLm90aGVycztcclxuICAgICAgICB9KTtcclxuICAgICAgICAoQU5TV0VSU1RPUkUuZ2V0KHRoaXMpKS5zYXZlQW5zd2VyKGFuc3dlcilcclxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5tc2c9PSdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyhTVEFURS5nZXQodGhpcykpLmdvKCdxdWVzdC1saXN0Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblF1ZXN0Q29udHJvbGxlci4kaW5qZWN0ID0gWydRdWVzdENvbnN0JywgJ0Fuc3dlclN0b3JlU2VydmljZScsICckc3RhdGUnXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvcXVlc3QvdGVzdC1wYWdlL3F1ZXN0LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJsZXQgUVVFU1RDT05TVCA9IG5ldyBXZWFrTWFwKCk7XHJcbmxldCBBTlNXRVJTVE9SRSA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG5jbGFzcyBRdWVzdExpc3RDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKFF1ZXN0Q29uc3QsIEFuc3dlclN0b3JlU2VydmljZSkge1xyXG4gICAgICAgIFFVRVNUQ09OU1Quc2V0KHRoaXMsIFF1ZXN0Q29uc3QpO1xyXG4gICAgICAgIEFOU1dFUlNUT1JFLnNldCh0aGlzLCBBbnN3ZXJTdG9yZVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMucXVlc3RzID0gUVVFU1RDT05TVC5nZXQodGhpcykucXVlc3RzO1xyXG4gICAgICAgIHRoaXMuYW5zd2VyID0gQU5TV0VSU1RPUkUuZ2V0KHRoaXMpLmFuc3dlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFuc3dlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0TGlzdENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL3F1ZXN0L2xpc3QtcGFnZS9xdWVzdC5saXN0LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJsZXQgUXVlc3RDb25zdCA9IHtcclxuICAgIHF1ZXN0czogW1xyXG4gICAgICAgIHt0eXBlOiAncmFkaW8nLCB0aXRsZTogJ2FhYWFhYWFhYWFhYScsIGl0ZW1zOiBbJ2FhJywgJ2JiYiddLCBoYXNPdGhlcjogdHJ1ZX0sXHJcbiAgICAgICAge3R5cGU6ICd0ZXh0YXJlYScsIHRpdGxlOiAnYmJiYmJiYmJiYmJiJ30sXHJcbiAgICAgICAge3R5cGU6ICdyYWRpbycsIHRpdGxlOiAnY2NjY2NjY2NjJywgaXRlbXM6IFsnZWUnLCAnd3d3dyddfSxcclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVlc3RDb25zdDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvcXVlc3QvcXVlc3QuY29uc3RhbnQuanNcbiAqKi8iLCJpbXBvcnQgcXVlc3RUcGwgZnJvbSAnLi90ZXN0LXBhZ2UvcXVlc3Qudmlldy5odG1sJ1xyXG5pbXBvcnQgcXVlc3RMaXN0VHBsIGZyb20gJy4vbGlzdC1wYWdlL3F1ZXN0Lmxpc3Qudmlldy5odG1sJ1xyXG5cclxuXHJcbmxldCBRdWVzdFJvdXRlQ29uZmlnID0gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpID0+IHtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvcXVlc3RcIik7XHJcblxyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ3F1ZXN0Jywge1xyXG4gICAgICAgICAgICB1cmw6ICcvcXVlc3QnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcXVlc3RUcGwsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdRdWVzdENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgncXVlc3QtbGlzdCcsIHtcclxuICAgICAgICAgICAgdXJsOiAnL3F1ZXN0LWxpc3QnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcXVlc3RMaXN0VHBsLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUXVlc3RMaXN0Q29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblF1ZXN0Um91dGVDb25maWcuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJ107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWVzdFJvdXRlQ29uZmlnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvcXVlc3QvcXVlc3Qucm91dGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicXVlc3RfX2hlYWRlcl9ib3ggZmxleF9fcm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicmliYm9uX19jb250ZW50IHJpYmJvbl9fZXh0cmFcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyaWJib25fX2NvbnRlbnQgZmxleF9fcm93XzFcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInF1ZXN0X192aWV3X2JveFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInF1ZXN0X19tYXNrXFxcIj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwicXVlc3RfX2NvbnRhaW5lclxcXCJcXHJcXG4gICAgICAgICAgICBuZy1zdHlsZT1cXFwieydsZWZ0JzogLTEgKiB2bS5wb3NpdGlvbiArICclJ31cXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwicXVlc3RfX2l0ZW1cXFwiXFxyXFxuICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cXFwicXVlc3QgaW4gdm0ucXVlc3RzIHRyYWNrIGJ5ICRpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInF1ZXN0X19xdWVzdGlvbiB0ZXh0XzIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7JGluZGV4ICsgMX19LiB7e3F1ZXN0LnRpdGxlfX1cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxhcHAtcXVlc3QtaW5wdXQgdHlwZT1cXFwicXVlc3QudHlwZVxcXCIgcXVlc3Q9XFxcInF1ZXN0XFxcIiBpbmRleD1cXFwie3skaW5kZXh9fVxcXCI+PC9hcHAtcXVlc3QtaW5wdXQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJxdWVzdF9fYnV0dG9uX3ByZXZcXFwiIG5nLWNsaWNrPVxcXCJ2bS5wcmV2KClcXFwiIG5nLXNob3c9XFxcIiF2bS5pc0ZpcnN0KClcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctbGVmdCBxdWVzdF9fYXJyb3cgdGV4dF8zMCB0ZXh0X3B1cnBsZSB0ZXh0X3B1cnBsZVxcXCI+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicXVlc3RfX2J1dHRvbl9jb25maXJtXFxcIiBuZy1jbGljaz1cXFwidm0uY29uZmlybSgpXFxcIiBuZy1zaG93PVxcXCJ2bS5pc0xhc3QoKVxcXCI+XFxyXFxuICAgICAgICBDb25maXJtXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJxdWVzdF9fYnV0dG9uX25leHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5uZXh0KClcXFwiIG5nLXNob3c9XFxcIiF2bS5pc0xhc3QoKVxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1yaWdodCBxdWVzdF9fYXJyb3cgdGV4dF8zMCB0ZXh0X3B1cnBsZSB0ZXh0X3B1cnBsZVxcXCI+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbW9kdWxlcy9xdWVzdC90ZXN0LXBhZ2UvcXVlc3Qudmlldy5odG1sXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgY2xhc3M9XFxcInF1ZXN0X19oZWFkZXJfYm94IGZsZXhfX3Jvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJpYmJvbl9fY29udGVudCByaWJib25fX2V4dHJhXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicmliYm9uX19jb250ZW50IGZsZXhfX3Jvd18xXFxcIj48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJxdWVzdF9fdmlld19ib3ggc2Nyb2xsLXlcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJxdWVzdF9fdmlld19pbm5lci1zY3JvbGxcXFwiPlxcclxcbiAgICAgICAgPHVsPlxcclxcbiAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcInF1ZXN0IGluIHZtLnF1ZXN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInF1ZXN0X190aXRsZV9ib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInF1ZXN0X19udW1fYm94XFxcIj57eyRpbmRleCArIDF9fS48L3NwYW4+PHNwYW4+e3txdWVzdC50aXRsZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicXVlc3RfX2Fuc3dlcl9ib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAge3t2bS5hbnN3ZXJbJGluZGV4XX19XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbW9kdWxlcy9xdWVzdC9saXN0LXBhZ2UvcXVlc3QubGlzdC52aWV3Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgdHBsIGZyb20gJy4vcXVlc3QuaW5wdXQudGVtcGxhdGUuaHRtbCdcclxuXHJcbmNsYXNzIGFwcFF1ZXN0SW5wdXRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxubGV0IGFwcFF1ZXN0SW5wdXQgPSB7XHJcbiAgICB0ZW1wbGF0ZTogdHBsLFxyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICB0eXBlOiAnPCcsXHJcbiAgICAgICAgcXVlc3Q6ICc8JyxcclxuICAgICAgICBpbmRleDogJ0AnXHJcbiAgICB9XHJcbiAgICAvL2NvbnRyb2xsZXI6IGFwcFF1ZXN0SW5wdXRDb250cm9sbGVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFF1ZXN0SW5wdXQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL3F1ZXN0L2NvbXBvbmVudHMvcXVlc3QuaW5wdXQuY29tcG9uZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctc3dpdGNoPVxcXCIkY3RybC50eXBlXFxcIiBjbGFzcz1cXFwicXVlc3RfX2NvbnRlbnRfYm94XFxcIj5cXHJcXG4gICAgPHVsIG5nLXN3aXRjaC13aGVuPVxcXCJyYWRpb1xcXCIgY2xhc3M9XFxcInRleHRfMTZcXFwiPlxcclxcbiAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwiaXRlbSBpbiAkY3RybC5xdWVzdC5pdGVtc1xcXCIgY2xhc3M9XFxcInF1ZXN0X2NvbnRlbnQtaXRlbV9ib3ggYXBwLXJhZGlvXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIGlkPVxcXCJpdGVte3skY3RybC5pbmRleH19X3t7JGluZGV4fX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcIml0ZW17eyRjdHJsLmluZGV4fX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVxcXCJpdGVtXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwiJGN0cmwucXVlc3QuYW5zd2VyXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJpdGVte3skY3RybC5pbmRleH19X3t7JGluZGV4fX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICB7e2l0ZW19fVxcclxcbiAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpIG5nLXNob3c9XFxcIiRjdHJsLnF1ZXN0Lmhhc090aGVyXFxcIiAgY2xhc3M9XFxcInF1ZXN0X2NvbnRlbnQtaXRlbV9ib3ggYXBwLXJhZGlvXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIGlkPVxcXCJpdGVte3skY3RybC5pbmRleH19X290aGVyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJpdGVte3skY3RybC5pbmRleH19XFxcIlxcclxcbiAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJpdGVte3skY3RybC5pbmRleH19X290aGVyXFxcIiBjbGFzcz1cXFwiZmxvYXRfX2xlZnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBPdGhlclxcclxcbiAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHdpZHRoPVxcXCIyMDBcXFwiIGNsYXNzPVxcXCJxdWVzdF9faW5wdXRfb3RoZXJzXFxcIiAgbmctbW9kZWw9XFxcIiRjdHJsLnF1ZXN0Lm90aGVyc1xcXCIvPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPHRleHRhcmVhIG5nLXN3aXRjaC13aGVuPVxcXCJ0ZXh0YXJlYVxcXCIgY2xhc3M9XFxcImFwcC10ZXh0YXJlYVxcXCIgbmctbW9kZWw9XFxcIiRjdHJsLnF1ZXN0LmFuc3dlclxcXCI+PC90ZXh0YXJlYT5cXHJcXG48L2Rpdj5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbW9kdWxlcy9xdWVzdC9jb21wb25lbnRzL3F1ZXN0LmlucHV0LnRlbXBsYXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibGV0IEhUVFAgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuY2xhc3MgQW5zd2VyU3RvcmVTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwKSB7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXIgPSBbXTtcclxuICAgICAgICBIVFRQLnNldCh0aGlzLCAkaHR0cCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUFuc3dlcihhbnN3ZXIpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChIVFRQLmdldCh0aGlzKSkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBgXFxhbnN3ZXJgLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJ3h4eCcsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhbnN3ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmYWN0b3J5KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQW5zd2VyU3RvcmVTZXJ2aWNlKCRodHRwKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkFuc3dlclN0b3JlU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCddO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyU3RvcmVTZXJ2aWNlO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvcXVlc3Qvc2VydmljZS9hbnN3ZXIuc3RvcmUuc2VydmljZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=