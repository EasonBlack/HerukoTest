import QuestGenRouteConfig from './question-gen.route.js'
import QuestGenController from './question-gen.controller'
import QuestionService from '../service/question.service'
import QuestionNewComponent from './new/question-new.component'


angular.module('question-gen.module', [
    'ui.router'
])
    .config(QuestGenRouteConfig)
    .controller('QuestGenController', QuestGenController)
    .factory('QuestionService', QuestionService.factory)
    .component('questionNew', QuestionNewComponent);
