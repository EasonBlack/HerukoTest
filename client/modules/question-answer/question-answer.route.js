
import template from './question-answer.template.html'

let QuestAnswerRouteConfig = ($stateProvider, $urlRouterProvider) => {

    $stateProvider
        .state('quest-answer', {
            url: '/quest-answer',
            template: template,
            controller: 'QuestAnswerController',
            controllerAs: 'vm'
        })
}


QuestAnswerRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default QuestAnswerRouteConfig;
