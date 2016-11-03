import questTpl from './test-page/quest.view.html'
import questListTpl from './list-page/quest.list.view.html'
import questCompleteTpl from './quest-complete/quest.complete.view.html'


let QuestRouteConfig = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/quest");

    $stateProvider
        .state('quest', {
            url: '/quest',
            template: questTpl,
            controller: 'QuestController',
            controllerAs: 'vm'
        })
        .state('quest-list', {
            url: '/quest-list',
            template: questListTpl,
            controller: 'QuestListController',
            controllerAs: 'vm'
        })
        .state('quest-complete', {
            url: '/quest-complete',
            template: questCompleteTpl,
            controller: 'QuestCompleteController',
            controllerAs: 'vm'
        })
}

QuestRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default QuestRouteConfig;
