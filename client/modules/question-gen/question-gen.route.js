
import questGenTpl from './question-gen.template.html'

let QuestGenRouteConfig = ($stateProvider, $urlRouterProvider) => {

    $stateProvider
        .state('quest-gen', {
            url: '/quest-gen',
            template: questGenTpl,
            controller: 'QuestGenController',
            controllerAs: 'vm'
        })
}


QuestGenRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default QuestGenRouteConfig;
