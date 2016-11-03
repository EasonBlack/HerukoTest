import QuestAnswerRouteConfig from './question-answer.route.js'
import QuestAnswerController from './question-answer.controller.js'
import QuestionService from '../service/question.service'

angular.module('question-answer.module', [
    'ui.router'
])
    .config(QuestAnswerRouteConfig)
    .controller('QuestAnswerController', QuestAnswerController)
    .factory('QuestionService', QuestionService.factory)
