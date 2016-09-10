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
	                if (res || res.data.msg == 'success') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWI3NmRmZjQ0NmU2ZWIxZWMwN2EiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcXVlc3QvcXVlc3QubW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcXVlc3QvdGVzdC1wYWdlL3F1ZXN0LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9xdWVzdC9saXN0LXBhZ2UvcXVlc3QubGlzdC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcXVlc3QvcXVlc3QuY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9xdWVzdC9xdWVzdC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3F1ZXN0L3Rlc3QtcGFnZS9xdWVzdC52aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9xdWVzdC9saXN0LXBhZ2UvcXVlc3QubGlzdC52aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9xdWVzdC9jb21wb25lbnRzL3F1ZXN0LmlucHV0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3F1ZXN0L2NvbXBvbmVudHMvcXVlc3QuaW5wdXQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3F1ZXN0L3NlcnZpY2UvYW5zd2VyLnN0b3JlLnNlcnZpY2UuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsImNvbnN0YW50IiwiZmFjdG9yeSIsImNvbnRyb2xsZXIiLCJjb21wb25lbnQiLCJRVUVTVENPTlNUIiwiV2Vha01hcCIsIkFOU1dFUlNUT1JFIiwiU1RBVEUiLCJRdWVzdENvbnRyb2xsZXIiLCJRdWVzdENvbnN0IiwiQW5zd2VyU3RvcmVTZXJ2aWNlIiwiJHN0YXRlIiwic2V0IiwicXVlc3RzIiwiZ2V0IiwiY3VycmVudCIsInBvc2l0aW9uIiwibGVuZ3RoIiwiYW5zd2VyIiwibWFwIiwicSIsIm90aGVycyIsInNhdmVBbnN3ZXIiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm1zZyIsImFsZXJ0IiwiJGluamVjdCIsIlF1ZXN0TGlzdENvbnRyb2xsZXIiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInRpdGxlIiwiaXRlbXMiLCJoYXNPdGhlciIsIlF1ZXN0Um91dGVDb25maWciLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsIm90aGVyd2lzZSIsInN0YXRlIiwidXJsIiwidGVtcGxhdGUiLCJjb250cm9sbGVyQXMiLCJhcHBRdWVzdElucHV0Q29udHJvbGxlciIsImFwcFF1ZXN0SW5wdXQiLCJiaW5kaW5ncyIsInF1ZXN0IiwiaW5kZXgiLCJIVFRQIiwiJGh0dHAiLCJtZXRob2QiLCJ1c2VybmFtZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENBOztBQUVBQSxTQUFRQyxNQUFSLENBQWUsS0FBZixFQUFzQixDQUNsQixXQURrQixFQUVsQixjQUZrQixDQUF0QjtBQUhBLFM7Ozs7Ozs7O0FDREE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUQsU0FBUUMsTUFBUixDQUFlLGNBQWYsRUFBK0IsQ0FDM0IsV0FEMkIsQ0FBL0IsRUFHS0MsTUFITCx1QkFJS0MsUUFKTCxDQUljLFlBSmQsMkJBS0tDLE9BTEwsQ0FLYSxvQkFMYixFQUttQyw2QkFBbUJBLE9BTHRELEVBTUtDLFVBTkwsQ0FNZ0IsaUJBTmhCLDZCQU9LQSxVQVBMLENBT2dCLHFCQVBoQixpQ0FRS0MsU0FSTCxDQVFlLGVB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LGFBQWEsb0lBQW9JLGFBQWEsR0FBRyxRQUFRLHlCQUF5QixNQUFNLDZNQUE2TSxhQUFhLDRDQUE0QyxhQUFhLHNEQUFzRCxhQUFhLDZWOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTE0QixLQUFJSSxPQUFPLElBQUk1QyxPQUFKLEVBQVg7O0tBRU1LLGtCO0FBQ0YsaUNBQVl3QyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsY0FBS2hDLE1BQUwsR0FBYyxFQUFkO0FBQ0ErQixjQUFLckMsR0FBTCxDQUFTLElBQVQsRUFBZXNDLEtBQWY7QUFDSDs7OztvQ0FFVWhDLE0sRUFBUTs7QUFFZixvQkFBUStCLEtBQUtuQyxHQUFMLENBQVMsSUFBVCxDQUFELENBQWlCO0FBQ3BCcUMseUJBQVEsTUFEWTtBQUVwQlYsOEJBRm9CO0FBR3BCaEIsdUJBQU07QUFDRjJCLCtCQUFVLEtBRFI7QUFFRkMsOEJBQVNuQztBQUZQO0FBSGMsY0FBakIsQ0FBUDtBQVNIOzs7aUNBRWNnQyxLLEVBQU87QUFDbEIsb0JBQU8sSUFBSXhDLGtCQUFKLENBQXVCd0MsS0FBdkIsQ0FBUDtBQUNIOzs7Ozs7QUFJTHhDLG9CQUFtQmtCLE9BQW5CLEdBQTZCLENBQUMsT0FBRCxDQUE3Qjs7bUJBRWVsQixrQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxYjc2ZGZmNDQ2ZTZlYjFlYzA3YVxuICoqLyIsIlxyXG4vL21vZHVsZVxyXG5pbXBvcnQgXCIuL21vZHVsZXMvcXVlc3QvcXVlc3QubW9kdWxlLmpzXCJcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXHJcbiAgICAndWkucm91dGVyJyxcclxuICAgICdxdWVzdC5tb2R1bGUnXHJcbl0pXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwLmpzXG4gKiovIiwiaW1wb3J0IFF1ZXN0Q29udHJvbGxlciBmcm9tICcuL3Rlc3QtcGFnZS9xdWVzdC5jb250cm9sbGVyLmpzJ1xyXG5pbXBvcnQgUXVlc3RMaXN0Q29udHJvbGxlciBmcm9tICcuL2xpc3QtcGFnZS9xdWVzdC5saXN0LmNvbnRyb2xsZXIuanMnXHJcbmltcG9ydCBRdWVzdENvbnN0IGZyb20gJy4vcXVlc3QuY29uc3RhbnQuanMnXHJcbmltcG9ydCBRdWVzdFJvdXRlQ29uZmlnIGZyb20gJy4vcXVlc3Qucm91dGUuanMnXHJcbmltcG9ydCBhcHBRdWVzdElucHV0IGZyb20gJy4vY29tcG9uZW50cy9xdWVzdC5pbnB1dC5jb21wb25lbnQuanMnO1xyXG5pbXBvcnQgQW5zd2VyU3RvcmVTZXJ2aWNlIGZyb20gJy4vc2VydmljZS9hbnN3ZXIuc3RvcmUuc2VydmljZS5qcydcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdxdWVzdC5tb2R1bGUnLCBbXHJcbiAgICAndWkucm91dGVyJ1xyXG5dKVxyXG4gICAgLmNvbmZpZyhRdWVzdFJvdXRlQ29uZmlnKVxyXG4gICAgLmNvbnN0YW50KCdRdWVzdENvbnN0JywgUXVlc3RDb25zdClcclxuICAgIC5mYWN0b3J5KCdBbnN3ZXJTdG9yZVNlcnZpY2UnLCBBbnN3ZXJTdG9yZVNlcnZpY2UuZmFjdG9yeSlcclxuICAgIC5jb250cm9sbGVyKCdRdWVzdENvbnRyb2xsZXInLCBRdWVzdENvbnRyb2xsZXIpXHJcbiAgICAuY29udHJvbGxlcignUXVlc3RMaXN0Q29udHJvbGxlcicsIFF1ZXN0TGlzdENvbnRyb2xsZXIpXHJcbiAgICAuY29tcG9uZW50KCdhcHBRdWVzdElucHV0JywgYXBwUXVlc3RJbnB1dClcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL3F1ZXN0L3F1ZXN0Lm1vZHVsZS5qc1xuICoqLyIsImxldCBRVUVTVENPTlNUID0gbmV3IFdlYWtNYXAoKTtcclxubGV0IEFOU1dFUlNUT1JFID0gbmV3IFdlYWtNYXAoKTtcclxubGV0IFNUQVRFID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbmNsYXNzIFF1ZXN0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihRdWVzdENvbnN0LCBBbnN3ZXJTdG9yZVNlcnZpY2UsICRzdGF0ZSkge1xyXG4gICAgICAgIFFVRVNUQ09OU1Quc2V0KHRoaXMsIFF1ZXN0Q29uc3QpXHJcbiAgICAgICAgQU5TV0VSU1RPUkUuc2V0KHRoaXMsIEFuc3dlclN0b3JlU2VydmljZSk7XHJcbiAgICAgICAgU1RBVEUuc2V0KHRoaXMsICRzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5xdWVzdHMgPSBRVUVTVENPTlNULmdldCh0aGlzKS5xdWVzdHM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2KCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCAtIDE7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuY3VycmVudCAqIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCArIDE7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuY3VycmVudCAqIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZpcnN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzTGFzdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09IHRoaXMucXVlc3RzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtKCkge1xyXG4gICAgICAgIGxldCBhbnN3ZXIgPSB0aGlzLnF1ZXN0cy5tYXAoKHEpPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcS5hbnN3ZXIgfHwgcS5vdGhlcnM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgKEFOU1dFUlNUT1JFLmdldCh0aGlzKSkuc2F2ZUFuc3dlcihhbnN3ZXIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXN8fCByZXMuZGF0YS5tc2c9PSdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyhTVEFURS5nZXQodGhpcykpLmdvKCdxdWVzdC1saXN0Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblF1ZXN0Q29udHJvbGxlci4kaW5qZWN0ID0gWydRdWVzdENvbnN0JywgJ0Fuc3dlclN0b3JlU2VydmljZScsICckc3RhdGUnXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvcXVlc3QvdGVzdC1wYWdlL3F1ZXN0LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJsZXQgUVVFU1RDT05TVCA9IG5ldyBXZWFrTWFwKCk7XHJcbmxldCBBTlNXRVJTVE9SRSA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG5jbGFzcyBRdWVzdExpc3RDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKFF1ZXN0Q29uc3QsIEFuc3dlclN0b3JlU2VydmljZSkge1xyXG4gICAgICAgIFFVRVNUQ09OU1Quc2V0KHRoaXMsIFF1ZXN0Q29uc3QpO1xyXG4gICAgICAgIEFOU1dFUlNUT1JFLnNldCh0aGlzLCBBbnN3ZXJTdG9yZVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMucXVlc3RzID0gUVVFU1RDT05TVC5nZXQodGhpcykucXVlc3RzO1xyXG4gICAgICAgIHRoaXMuYW5zd2VyID0gQU5TV0VSU1RPUkUuZ2V0KHRoaXMpLmFuc3dlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFuc3dlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0TGlzdENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL3F1ZXN0L2xpc3QtcGFnZS9xdWVzdC5saXN0LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJsZXQgUXVlc3RDb25zdCA9IHtcclxuICAgIHF1ZXN0czogW1xyXG4gICAgICAgIHt0eXBlOiAncmFkaW8nLCB0aXRsZTogJ2FhYWFhYWFhYWFhYScsIGl0ZW1zOiBbJ2FhJywgJ2JiYiddLCBoYXNPdGhlcjogdHJ1ZX0sXHJcbiAgICAgICAge3R5cGU6ICd0ZXh0YXJlYScsIHRpdGxlOiAnYmJiYmJiYmJiYmJiJ30sXHJcbiAgICAgICAge3R5cGU6ICdyYWRpbycsIHRpdGxlOiAnY2NjY2NjY2NjJywgaXRlbXM6IFsnZWUnLCAnd3d3dyddfSxcclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVlc3RDb25zdDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvcXVlc3QvcXVlc3QuY29uc3RhbnQuanNcbiAqKi8iLCJpbXBvcnQgcXVlc3RUcGwgZnJvbSAnLi90ZXN0LXBhZ2UvcXVlc3Qudmlldy5odG1sJ1xyXG5pbXBvcnQgcXVlc3RMaXN0VHBsIGZyb20gJy4vbGlzdC1wYWdlL3F1ZXN0Lmxpc3Qudmlldy5odG1sJ1xyXG5cclxuXHJcbmxldCBRdWVzdFJvdXRlQ29uZmlnID0gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpID0+IHtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvcXVlc3RcIik7XHJcblxyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ3F1ZXN0Jywge1xyXG4gICAgICAgICAgICB1cmw6ICcvcXVlc3QnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcXVlc3RUcGwsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdRdWVzdENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgncXVlc3QtbGlzdCcsIHtcclxuICAgICAgICAgICAgdXJsOiAnL3F1ZXN0LWxpc3QnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcXVlc3RMaXN0VHBsLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUXVlc3RMaXN0Q29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblF1ZXN0Um91dGVDb25maWcuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJ107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWVzdFJvdXRlQ29uZmlnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZXMvcXVlc3QvcXVlc3Qucm91dGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicXVlc3RfX2hlYWRlcl9ib3ggZmxleF9fcm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicmliYm9uX19jb250ZW50IHJpYmJvbl9fZXh0cmFcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyaWJib25fX2NvbnRlbnQgZmxleF9fcm93XzFcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInF1ZXN0X192aWV3X2JveFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInF1ZXN0X19tYXNrXFxcIj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwicXVlc3RfX2NvbnRhaW5lclxcXCJcXHJcXG4gICAgICAgICAgICBuZy1zdHlsZT1cXFwieydsZWZ0JzogLTEgKiB2bS5wb3NpdGlvbiArICclJ31cXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwicXVlc3RfX2l0ZW1cXFwiXFxyXFxuICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cXFwicXVlc3QgaW4gdm0ucXVlc3RzIHRyYWNrIGJ5ICRpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInF1ZXN0X19xdWVzdGlvbiB0ZXh0XzIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7JGluZGV4ICsgMX19LiB7e3F1ZXN0LnRpdGxlfX1cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxhcHAtcXVlc3QtaW5wdXQgdHlwZT1cXFwicXVlc3QudHlwZVxcXCIgcXVlc3Q9XFxcInF1ZXN0XFxcIiBpbmRleD1cXFwie3skaW5kZXh9fVxcXCI+PC9hcHAtcXVlc3QtaW5wdXQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJxdWVzdF9fYnV0dG9uX3ByZXZcXFwiIG5nLWNsaWNrPVxcXCJ2bS5wcmV2KClcXFwiIG5nLXNob3c9XFxcIiF2bS5pc0ZpcnN0KClcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctbGVmdCBxdWVzdF9fYXJyb3cgdGV4dF8zMCB0ZXh0X3B1cnBsZSB0ZXh0X3B1cnBsZVxcXCI+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicXVlc3RfX2J1dHRvbl9jb25maXJtXFxcIiBuZy1jbGljaz1cXFwidm0uY29uZmlybSgpXFxcIiBuZy1zaG93PVxcXCJ2bS5pc0xhc3QoKVxcXCI+XFxyXFxuICAgICAgICBDb25maXJtXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJxdWVzdF9fYnV0dG9uX25leHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5uZXh0KClcXFwiIG5nLXNob3c9XFxcIiF2bS5pc0xhc3QoKVxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1yaWdodCBxdWVzdF9fYXJyb3cgdGV4dF8zMCB0ZXh0X3B1cnBsZSB0ZXh0X3B1cnBsZVxcXCI+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbW9kdWxlcy9xdWVzdC90ZXN0LXBhZ2UvcXVlc3Qudmlldy5odG1sXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgY2xhc3M9XFxcInF1ZXN0X19oZWFkZXJfYm94IGZsZXhfX3Jvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJpYmJvbl9fY29udGVudCByaWJib25fX2V4dHJhXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicmliYm9uX19jb250ZW50IGZsZXhfX3Jvd18xXFxcIj48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJxdWVzdF9fdmlld19ib3ggc2Nyb2xsLXlcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJxdWVzdF9fdmlld19pbm5lci1zY3JvbGxcXFwiPlxcclxcbiAgICAgICAgPHVsPlxcclxcbiAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcInF1ZXN0IGluIHZtLnF1ZXN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInF1ZXN0X190aXRsZV9ib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInF1ZXN0X19udW1fYm94XFxcIj57eyRpbmRleCArIDF9fS48L3NwYW4+PHNwYW4+e3txdWVzdC50aXRsZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicXVlc3RfX2Fuc3dlcl9ib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAge3t2bS5hbnN3ZXJbJGluZGV4XX19XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbW9kdWxlcy9xdWVzdC9saXN0LXBhZ2UvcXVlc3QubGlzdC52aWV3Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgdHBsIGZyb20gJy4vcXVlc3QuaW5wdXQudGVtcGxhdGUuaHRtbCdcclxuXHJcbmNsYXNzIGFwcFF1ZXN0SW5wdXRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxubGV0IGFwcFF1ZXN0SW5wdXQgPSB7XHJcbiAgICB0ZW1wbGF0ZTogdHBsLFxyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICB0eXBlOiAnPCcsXHJcbiAgICAgICAgcXVlc3Q6ICc8JyxcclxuICAgICAgICBpbmRleDogJ0AnXHJcbiAgICB9XHJcbiAgICAvL2NvbnRyb2xsZXI6IGFwcFF1ZXN0SW5wdXRDb250cm9sbGVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFF1ZXN0SW5wdXQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGVzL3F1ZXN0L2NvbXBvbmVudHMvcXVlc3QuaW5wdXQuY29tcG9uZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctc3dpdGNoPVxcXCIkY3RybC50eXBlXFxcIiBjbGFzcz1cXFwicXVlc3RfX2NvbnRlbnRfYm94XFxcIj5cXHJcXG4gICAgPHVsIG5nLXN3aXRjaC13aGVuPVxcXCJyYWRpb1xcXCIgY2xhc3M9XFxcInRleHRfMTZcXFwiPlxcclxcbiAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwiaXRlbSBpbiAkY3RybC5xdWVzdC5pdGVtc1xcXCIgY2xhc3M9XFxcInF1ZXN0X2NvbnRlbnQtaXRlbV9ib3ggYXBwLXJhZGlvXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIGlkPVxcXCJpdGVte3skY3RybC5pbmRleH19X3t7JGluZGV4fX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcIml0ZW17eyRjdHJsLmluZGV4fX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVxcXCJpdGVtXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwiJGN0cmwucXVlc3QuYW5zd2VyXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJpdGVte3skY3RybC5pbmRleH19X3t7JGluZGV4fX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICB7e2l0ZW19fVxcclxcbiAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpIG5nLXNob3c9XFxcIiRjdHJsLnF1ZXN0Lmhhc090aGVyXFxcIiAgY2xhc3M9XFxcInF1ZXN0X2NvbnRlbnQtaXRlbV9ib3ggYXBwLXJhZGlvXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIGlkPVxcXCJpdGVte3skY3RybC5pbmRleH19X290aGVyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJpdGVte3skY3RybC5pbmRleH19XFxcIlxcclxcbiAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJpdGVte3skY3RybC5pbmRleH19X290aGVyXFxcIiBjbGFzcz1cXFwiZmxvYXRfX2xlZnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBPdGhlclxcclxcbiAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHdpZHRoPVxcXCIyMDBcXFwiIGNsYXNzPVxcXCJxdWVzdF9faW5wdXRfb3RoZXJzXFxcIiAgbmctbW9kZWw9XFxcIiRjdHJsLnF1ZXN0Lm90aGVyc1xcXCIvPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPHRleHRhcmVhIG5nLXN3aXRjaC13aGVuPVxcXCJ0ZXh0YXJlYVxcXCIgY2xhc3M9XFxcImFwcC10ZXh0YXJlYVxcXCIgbmctbW9kZWw9XFxcIiRjdHJsLnF1ZXN0LmFuc3dlclxcXCI+PC90ZXh0YXJlYT5cXHJcXG48L2Rpdj5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbW9kdWxlcy9xdWVzdC9jb21wb25lbnRzL3F1ZXN0LmlucHV0LnRlbXBsYXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibGV0IEhUVFAgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuY2xhc3MgQW5zd2VyU3RvcmVTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwKSB7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXIgPSBbXTtcclxuICAgICAgICBIVFRQLnNldCh0aGlzLCAkaHR0cCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUFuc3dlcihhbnN3ZXIpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChIVFRQLmdldCh0aGlzKSkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBgXFxhbnN3ZXJgLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJ3h4eCcsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhbnN3ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmYWN0b3J5KCRodHRwKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBbnN3ZXJTdG9yZVNlcnZpY2UoJGh0dHApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQW5zd2VyU3RvcmVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJ107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXJTdG9yZVNlcnZpY2U7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9xdWVzdC9zZXJ2aWNlL2Fuc3dlci5zdG9yZS5zZXJ2aWNlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==