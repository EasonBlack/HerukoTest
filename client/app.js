
//module
import "./modules/quest/quest.module.js"
import "./modules/question-gen/question-gen.module.js"

angular.module('app', [
    'ui.router',
    'quest.module',
    'question-gen.module'
])
