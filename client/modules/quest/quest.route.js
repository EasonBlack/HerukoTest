import questTpl from './test-page/quest.view.html'
import questListTpl from './list-page/quest.list.view.html'


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
}

QuestRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default QuestRouteConfig;
